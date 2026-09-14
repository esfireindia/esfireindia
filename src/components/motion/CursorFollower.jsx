import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function CursorFollower() {
  const dotRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)',
    ).matches;
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (!finePointer || reducedMotion || !dotRef.current) return undefined;

    const dot = dotRef.current;
    const dotX = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power3.out' });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power3.out' });

    gsap.set(dot, { xPercent: -13, yPercent: -10 });

    const moveCursor = (event) => {
      dotX(event.clientX);
      dotY(event.clientY);
      dot.classList.add('is-visible');

      const interactive = event.target.closest(
        'a, button, input, select, textarea, [role="button"]',
      );
      dot.classList.toggle('is-hovering', Boolean(interactive));
    };

    const hideCursor = () => {
      dot.classList.remove('is-visible');
    };

    const pressCursor = () => {
      dot.classList.add('is-pressed');
    };

    const releaseCursor = () => {
      dot.classList.remove('is-pressed');
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
    <span className="cursor-dot" ref={dotRef} aria-hidden="true">
      <svg viewBox="0 0 52 70" focusable="false">
        <defs>
          <linearGradient id="cursorFireFill" x1="0" y1="0" x2=".75" y2="1">
            <stop offset="0" stopColor="#ff351f" />
            <stop offset=".55" stopColor="#ff5b16" />
            <stop offset="1" stopColor="#ff9500" />
          </linearGradient>
          <linearGradient id="cursorFireHeat" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff38d" />
            <stop offset="1" stopColor="#ffb000" />
          </linearGradient>
        </defs>
        <path
          className="cursor-flame-body"
          d="M5.2 3.7c-1.8.8-2.5 2.8-2.2 5.4l4.7 42.1c.5 4.3 4.8 5.5 7.1 1.9l5-8.1c4.8 5 7.1 11.6 5.9 19.5 5.4-3.4 8.5-8.4 8.8-14.5 2.7 5.7 6.6 9.5 12.1 11.5-1.9-6.9-5.6-12.5-10.9-16.8 6.7.5 11.9 3.4 15.7 8.8.4-7-2.4-13.1-8.3-17.8l5.3-2.2c3.7-1.6 3.9-6.5.3-8.4L10.8 4c-2.1-1.1-4-1.2-5.6-.3Z"
        />
        <path
          className="cursor-flame-edge"
          d="M8.1 8.5 12.4 45l6.3-10.3c.8-1.3 2.7-1.5 3.8-.4l5.2 5.4c5.5.1 10.2 2 14 5.7-2.2-5.5-6.3-9.7-12.1-12.7l9.2-3.8L8.1 8.5Z"
        />
        <path
          className="cursor-flame-core"
          d="M27.1 42.5c-2.5 5.9-.7 10.3 3.2 14.5-.5-5.2 1-8.7 4.3-11.7-1.3 4.7.2 8.5 4.4 11.6-1.1-7.7-4.9-12.5-11.9-14.4Z"
        />
      </svg>
    </span>
  );
}
