import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function CursorFollower() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const emberRefs = useRef([]);

  useEffect(() => {
    const finePointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)',
    ).matches;
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (!finePointer || reducedMotion || !dotRef.current || !ringRef.current)
      return undefined;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const embers = emberRefs.current.filter(Boolean);
    const dotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3.out' });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3.out' });
    const ringX = gsap.quickTo(ring, 'x', {
      duration: 0.42,
      ease: 'power3.out',
    });
    const ringY = gsap.quickTo(ring, 'y', {
      duration: 0.42,
      ease: 'power3.out',
    });
    const emberMotion = embers.map((ember, index) => ({
      x: gsap.quickTo(ember, 'x', {
        duration: 0.19 + index * 0.08,
        ease: 'power3.out',
      }),
      y: gsap.quickTo(ember, 'y', {
        duration: 0.19 + index * 0.08,
        ease: 'power3.out',
      }),
    }));

    gsap.set([dot, ring, ...embers], { xPercent: -50, yPercent: -50 });

    const moveCursor = (event) => {
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);
      emberMotion.forEach((motion) => {
        motion.x(event.clientX);
        motion.y(event.clientY);
      });
      dot.classList.add('is-visible');
      ring.classList.add('is-visible');
      embers.forEach((ember) => ember.classList.add('is-visible'));

      const interactive = event.target.closest(
        'a, button, input, select, textarea, [role="button"]',
      );
      dot.classList.toggle('is-hovering', Boolean(interactive));
      ring.classList.toggle('is-hovering', Boolean(interactive));
      embers.forEach((ember) =>
        ember.classList.toggle('is-hovering', Boolean(interactive)),
      );
    };

    const hideCursor = () => {
      dot.classList.remove('is-visible');
      ring.classList.remove('is-visible');
      embers.forEach((ember) => ember.classList.remove('is-visible'));
    };

    const pressCursor = () => {
      dot.classList.add('is-pressed');
      ring.classList.add('is-pressed');
    };

    const releaseCursor = () => {
      dot.classList.remove('is-pressed');
      ring.classList.remove('is-pressed');
    };

    window.addEventListener('pointermove', moveCursor, { passive: true });
    window.addEventListener('pointerdown', pressCursor, { passive: true });
    window.addEventListener('pointerup', releaseCursor, { passive: true });
    window.addEventListener('blur', hideCursor);
    document.documentElement.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('pointermove', moveCursor);
      window.removeEventListener('pointerdown', pressCursor);
      window.removeEventListener('pointerup', releaseCursor);
      window.removeEventListener('blur', hideCursor);
      document.documentElement.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  return (
    <>
      <span className="cursor-dot" ref={dotRef} aria-hidden="true" />
      {[0, 1, 2].map((index) => (
        <span
          className={`cursor-ember cursor-ember--${index + 1}`}
          ref={(element) => {
            emberRefs.current[index] = element;
          }}
          aria-hidden="true"
          key={index}
        />
      ))}
      <span className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
