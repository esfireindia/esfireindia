import { useEffect, useRef } from 'react';

const FIRE_TEXT = 'ESFIRE';

function createPalette() {
  return Array.from({ length: 256 }, (_, index) => {
    const heat = index / 255;

    if (heat < 0.16) {
      return [88, 8, 0, Math.round((heat / 0.16) * 105)];
    }

    if (heat < 0.42) {
      const mix = (heat - 0.16) / 0.26;
      return [Math.round(118 + 125 * mix), Math.round(13 + 35 * mix), 0, 190];
    }

    if (heat < 0.72) {
      const mix = (heat - 0.42) / 0.3;
      return [255, Math.round(58 + 105 * mix), Math.round(4 + 10 * mix), 235];
    }

    const mix = (heat - 0.72) / 0.28;
    return [255, Math.round(165 + 82 * mix), Math.round(26 + 176 * mix), 255];
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
    let width = 1;
    let height = 1;
    let frameId = null;
    let active = false;
    let disposed = false;

    if (!context || !fireContext) return undefined;

    const seedBase = () => {
      const bottomRow = (rows - 1) * columns;
      const rowAbove = Math.max(0, rows - 2) * columns;

      for (let x = 0; x < columns; x += 1) {
        const pulse = Math.sin(x * 0.17 + performance.now() * 0.004) * 22;
        const sparkGap = Math.random() > 0.965;
        const value = sparkGap ? 95 : 218 + pulse + Math.random() * 37;
        heat[bottomRow + x] = Math.max(0, Math.min(255, value));
        heat[rowAbove + x] = Math.max(
          0,
          heat[bottomRow + x] - Math.random() * 22,
        );
      }
    };

    const propagateFire = () => {
      seedBase();

      for (let y = 1; y < rows; y += 1) {
        for (let x = 0; x < columns; x += 1) {
          const source = y * columns + x;
          const drift = Math.floor(Math.random() * 3) - 1;
          const destinationX = (x + drift + columns) % columns;
          const destination = (y - 1) * columns + destinationX;
          const cooling = Math.floor(Math.random() * 5);
          heat[destination] = Math.max(0, heat[source] - cooling);
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

    const render = () => {
      if (!active) return;
      propagateFire();
      propagateFire();
      paintFire();
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
      fireCanvas.width = columns;
      fireCanvas.height = rows;
      heat = new Uint8Array(columns * rows);

      for (let index = 0; index < rows * 1.4; index += 1) propagateFire();
      paintFire();
    };

    const start = () => {
      if (active || reducedMotion) return;
      active = true;
      render();
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
