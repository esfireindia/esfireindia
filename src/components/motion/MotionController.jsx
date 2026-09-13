import { useLayoutEffect, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

const headingSelector = [
  '.reason-section h2',
  '.engineering-copy h2',
  '.outdoor-overlay h2',
  '.finder-heading h2',
  '.cta-inner h2',
  '.products-hero h1',
  '.page-intro h1',
  '.sequence-heading h2',
  '.product-summary h1',
  '.spec-inner h2',
  '.about-statement h2',
  '.about-ending h2',
  '.contact-panel h2',
  '.not-found h1',
].join(',');

const cardSelector = [
  '.reason-card',
  '.product-card',
  '.sequence-grid article',
  '.about-tiles article',
  '.application-buttons button',
  '.finder-options button',
  '.spec-grid > div',
].join(',');

const imageSelector = [
  '.reason-card img',
  '.product-image-wrap img',
  '.gallery-main img',
  '.craft-study img',
  '.about-grid img',
].join(',');

export function MotionController() {
  const location = useLocation();

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reducedMotion) {
      document.body.classList.add('motion-reduced');
      return undefined;
    }

    const lenis = new Lenis({
      lerp: 0.075,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.05,
      syncTouch: false,
    });

    const updateLenis = (time) => lenis.raf(time * 1000);
    const updateTriggers = () => ScrollTrigger.update();

    document.body.classList.add('motion-ready');
    window.__esfireLenis = lenis;
    lenis.on('scroll', updateTriggers);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off('scroll', updateTriggers);
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
      delete window.__esfireLenis;
      document.body.classList.remove('motion-ready');
    };
  }, []);

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reducedMotion) {
      ScrollTrigger.refresh();
      return undefined;
    }

    const context = gsap.context(() => {
      const pageTransition = document.querySelector('.page-transition');

      if (pageTransition) {
        gsap.set(pageTransition, { clipPath: 'inset(0 0 0% 0)' });
        gsap.to(pageTransition, {
          clipPath: 'inset(0 0 100% 0)',
          duration: 0.82,
          delay: 0.06,
          ease: 'power4.inOut',
        });
      }

      const hero = document.querySelector('.hero');

      if (hero) {
        const heroTimeline = gsap.timeline({
          delay: 0.55,
          defaults: { ease: 'power3.out' },
        });

        heroTimeline
          .from('.hero-visual img', {
            scale: 1.16,
            duration: 1.85,
            ease: 'power2.out',
          })
          .from(
            '.hero-copy .kicker',
            { y: 22, autoAlpha: 0, duration: 0.7 },
            0.15,
          )
          .from(
            '.hero h1',
            {
              yPercent: 38,
              autoAlpha: 0,
              clipPath: 'inset(0 0 100% 0)',
              duration: 1.05,
            },
            0.24,
          )
          .from('.hero-copy > p', { y: 28, autoAlpha: 0, duration: 0.78 }, 0.52)
          .from(
            '.hero-copy .button-row > *',
            { y: 24, autoAlpha: 0, stagger: 0.1, duration: 0.68 },
            0.68,
          )
          .from(
            ['.hero-edge-label', '.hero-scroll-label'],
            { autoAlpha: 0, duration: 0.8, stagger: 0.08 },
            0.86,
          );

        gsap.to('.hero-visual img', {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.8,
          },
        });

        gsap.to('.hero-copy', {
          yPercent: 16,
          autoAlpha: 0.15,
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: '22% top',
            end: 'bottom top',
            scrub: 0.7,
          },
        });
      }

      gsap.utils.toArray(headingSelector).forEach((heading) => {
        gsap.from(heading, {
          y: 70,
          autoAlpha: 0,
          clipPath: 'inset(0 0 100% 0)',
          duration: 1.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 88%',
            once: true,
          },
        });
      });

      const cards = gsap.utils.toArray(cardSelector);
      if (cards.length) {
        ScrollTrigger.batch(cards, {
          start: 'top 90%',
          once: true,
          onEnter: (batch) =>
            gsap.from(batch, {
              y: 58,
              autoAlpha: 0,
              duration: 0.92,
              stagger: 0.08,
              ease: 'power3.out',
              overwrite: true,
            }),
        });
      }

      gsap.utils.toArray(imageSelector).forEach((image) => {
        gsap.from(image, {
          scale: 1.1,
          clipPath: 'inset(8% 0 8% 0)',
          duration: 1.35,
          ease: 'power3.out',
          clearProps: 'clipPath,transform',
          scrollTrigger: {
            trigger: image,
            start: 'top 91%',
            once: true,
          },
        });
      });

      const outdoorImage = document.querySelector('.outdoor-feature > img');
      if (outdoorImage) {
        gsap.fromTo(
          outdoorImage,
          { scale: 1.13, yPercent: -4 },
          {
            scale: 1.13,
            yPercent: 5,
            ease: 'none',
            scrollTrigger: {
              trigger: outdoorImage.parentElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.9,
            },
          },
        );
      }

      const diagramPaths = gsap.utils.toArray('.diagram-card > svg > path');
      if (diagramPaths.length) {
        diagramPaths.forEach((path) => {
          const length = path.getTotalLength();
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        });

        gsap.to(diagramPaths, {
          strokeDashoffset: 0,
          duration: 1.45,
          stagger: 0.16,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.diagram-card',
            start: 'top 76%',
            once: true,
          },
        });

        gsap.from('.diagram-steps > div', {
          y: 28,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.diagram-steps',
            start: 'top 86%',
            once: true,
          },
        });
      }

      gsap.utils
        .toArray('.section-heading > p, .page-intro > p, .finder-heading > p')
        .forEach((copy) => {
          gsap.from(copy, {
            y: 34,
            autoAlpha: 0,
            duration: 0.85,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: copy,
              start: 'top 91%',
              once: true,
            },
          });
        });

      const ctaCopy = document.querySelector('.cta-inner > div:last-child');
      if (ctaCopy) {
        gsap.from(ctaCopy, {
          x: 55,
          autoAlpha: 0,
          duration: 0.95,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 78%',
            once: true,
          },
        });
      }

      const footer = document.querySelector('.site-footer');
      if (footer) {
        ScrollTrigger.create({
          trigger: footer,
          start: 'top bottom',
          end: 'bottom top',
          toggleClass: { targets: footer, className: 'is-in-view' },
        });

        gsap.from('.footer-main > *', {
          y: 45,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footer,
            start: 'top 88%',
            once: true,
          },
        });

        gsap.from('.footer-fire-art', {
          y: 65,
          scale: 0.94,
          autoAlpha: 0,
          duration: 1.25,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.footer-fire-stage',
            start: 'top 88%',
            once: true,
          },
        });
      }

      window.requestAnimationFrame(() => ScrollTrigger.refresh());
    });

    return () => context.revert();
  }, [location.pathname]);

  return null;
}
