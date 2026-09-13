import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function CursorFollower() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

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

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    const moveCursor = (event) => {
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);
      dot.classList.add('is-visible');
      ring.classList.add('is-visible');

      const interactive = event.target.closest(
        'a, button, input, select, textarea, [role="button"]',
      );
      ring.classList.toggle('is-hovering', Boolean(interactive));
    };

    const hideCursor = () => {
      dot.classList.remove('is-visible');
      ring.classList.remove('is-visible');
    };

    window.addEventListener('pointermove', moveCursor, { passive: true });
    document.documentElement.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('pointermove', moveCursor);
      document.documentElement.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  return (
    <>
      <span className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <span className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
