import { useEffect, useRef } from 'react';

const FIRE_TEXT = 'ESFIRE';

function createPalette() {
  return Array.from({ length: 256 }, (_, index) => {
    const heat = index / 255;

    if (heat < 0.42) {
      return [4, 3, 2, Math.round((heat / 0.42) * 72)];
    }

    if (heat < 0.66) {
      const mix = (heat - 0.42) / 0.24;
      return [Math.round(55 + 130 * mix), Math.round(13 + 38 * mix), 0, 150];
    }

    if (heat < 0.88) {
      const mix = (heat - 0.66) / 0.22;
      return [Math.round(188 + 67 * mix), Math.round(55 + 96 * mix), 0, 218];
    }

    const mix = (heat - 0.88) / 0.12;
    return [255, Math.round(155 + 80 * mix), Math.round(6 + 62 * mix), 245];
  });
}

export function FireText() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = canvas?.parentElement;
    const outline = stage?.querySelector('.footer-fire-outline');

    if (!canvas || !stage || !outline) return undefined;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const context = canvas.getContext('2d', { alpha: true });
    const fireCanvas = document.createElement('canvas');
    const fireContext = fireCanvas.getContext('2d', { alpha: true });
    const palette = createPalette();
    let heat = new Uint8Array(1);
    let columns = 1;
    let rows = 1;
    let fuelRow = 1;
    let width = 1;
    let height = 1;
    let frameId = null;
    let active = false;
    let disposed = false;
    let lastUpdate = 0;

    if (!context || !fireContext) return undefined;

    const seedBase = () => {
      const bottomRow = fuelRow * columns;
      const rowAbove = Math.max(0, fuelRow - 1) * columns;
      const time = performance.now() * 0.00032;

      for (let x = 0; x < columns; x += 1) {
        const ribbon =
          Math.sin(x * 0.075 + time) * 0.52 +
          Math.sin(x * 0.19 - time * 0.64) * 0.28 +
          Math.sin(x * 0.031 + time * 0.42) * 0.2;
        const ember = Math.random() * 0.32;
        const lit = ribbon + ember > -0.02;
        const value = lit
          ? 178 + Math.max(0, ribbon) * 64 + Math.random() * 18
          : Math.random() * 36;
        heat[bottomRow + x] = Math.max(0, Math.min(255, value));
        heat[rowAbove + x] = Math.max(
          0,
          heat[bottomRow + x] - 12 - Math.random() * 25,
        );
      }
    };

    const propagateFire = () => {
      seedBase();

      for (let y = 1; y <= fuelRow; y += 1) {
        for (let x = 0; x < columns; x += 1) {
          const source = y * columns + x;
          const drift = Math.random() < 0.58 ? 0 : Math.random() < 0.5 ? -1 : 1;
          const destinationX = (x + drift + columns) % columns;
          const destination = (y - 1) * columns + destinationX;
          const left = y * columns + ((x - 1 + columns) % columns);
          const right = y * columns + ((x + 1) % columns);
          const softened = (heat[source] * 2 + heat[left] + heat[right]) / 4;
          const cooling = 0.45 + Math.random() * 1.55;
          const nextHeat = Math.max(0, softened - cooling);
          heat[destination] = heat[destination] * 0.76 + nextHeat * 0.24;
        }
      }
    };

    const paintFire = () => {
      const imageData = fireContext.createImageData(columns, rows);

      for (let index = 0; index < heat.length; index += 1) {
        const [red, green, blue, alpha] = palette[heat[index]];
        const pixel = index * 4;
        imageData.data[pixel] = red;
        imageData.data[pixel + 1] = green;
        imageData.data[pixel + 2] = blue;
        imageData.data[pixel + 3] = alpha;
      }

      fireContext.putImageData(imageData, 0, 0);
      context.clearRect(0, 0, width, height);
      context.save();
      context.imageSmoothingEnabled = true;
      context.drawImage(fireCanvas, 0, 0, width, height);
      context.globalCompositeOperation = 'destination-in';

      const stageBounds = stage.getBoundingClientRect();
      const outlineBounds = outline.getBoundingClientRect();
      const outlineStyle = getComputedStyle(outline);
      const fontSize = Number.parseFloat(outlineStyle.fontSize);
      const centerX =
        outlineBounds.left - stageBounds.left + outlineBounds.width / 2;

      context.font = `800 ${fontSize}px Outfit, Arial, sans-serif`;
      context.textAlign = 'center';
      context.textBaseline = 'alphabetic';
      if ('letterSpacing' in context)
        context.letterSpacing = outlineStyle.letterSpacing;

      const metrics = context.measureText(FIRE_TEXT);
      const textHeight =
        metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
      const baseline =
        outlineBounds.top -
        stageBounds.top +
        (outlineBounds.height - textHeight) / 2 +
        metrics.actualBoundingBoxAscent;

      context.fillStyle = '#fff';
      context.fillText(FIRE_TEXT, centerX, baseline);
      context.restore();
    };

    const render = (timestamp) => {
      if (!active) return;

      if (timestamp - lastUpdate >= 96) {
        propagateFire();
        paintFire();
        lastUpdate = timestamp;
      }

      frameId = window.requestAnimationFrame(render);
    };

    const resize = () => {
      const bounds = stage.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = Math.max(1, Math.round(bounds.width));
      height = Math.max(1, Math.round(bounds.height));
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      columns = Math.max(120, Math.round(width / 5));
      rows = Math.max(52, Math.round(height / 4));
      fuelRow = Math.max(2, Math.floor(rows * 0.755));
      fireCanvas.width = columns;
      fireCanvas.height = rows;
      heat = new Uint8Array(columns * rows);

      for (let index = 0; index < rows * 4; index += 1) propagateFire();
      paintFire();
    };

    const start = () => {
      if (active || reducedMotion) return;
      active = true;
      frameId = window.requestAnimationFrame(render);
    };

    const stop = () => {
      active = false;
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      frameId = null;
    };

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { rootMargin: '15% 0px' },
    );

    document.fonts.ready.then(() => {
      if (!disposed) resize();
    });
    resizeObserver.observe(stage);
    intersectionObserver.observe(stage);

    return () => {
      disposed = true;
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <canvas className="footer-fire-canvas" ref={canvasRef} aria-hidden="true" />
  );
}
