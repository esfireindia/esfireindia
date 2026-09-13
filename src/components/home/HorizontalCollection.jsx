import { ArrowUpRight } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function HorizontalCollection({ products }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return undefined;

    const context = gsap.context(() => {
      const panels = gsap.utils.toArray('.collection-panel');
      const horizontalTween = gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      });

      gsap.from('.collection-intro-title > *, .collection-intro-copy > *', {
        y: 52,
        autoAlpha: 0,
        duration: 0.95,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 76%',
          once: true,
        },
      });

      panels.slice(1).forEach((panel) => {
        const content = panel.querySelector('.collection-product-content');
        const image = panel.querySelector('img');

        if (content) {
          gsap.from(content.children, {
            y: 58,
            autoAlpha: 0,
            duration: 0.85,
            stagger: 0.09,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalTween,
              start: 'left 78%',
              toggleActions: 'play none none reverse',
            },
          });
        }

        if (image) {
          gsap.fromTo(
            image,
            { scale: 1.1 },
            {
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: panel,
                containerAnimation: horizontalTween,
                start: 'left right',
                end: 'right left',
                scrub: true,
              },
            },
          );
        }
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      className="horizontal-collection"
      ref={sectionRef}
      style={{ height: `${(products.length + 1) * 100}svh` }}
      aria-label="Featured products"
    >
      <div className="collection-sticky">
        <div className="collection-track" ref={trackRef}>
          <section className="collection-panel collection-intro-panel">
            <div className="collection-intro-title">
              <div>
                <span className="section-index">03</span>
                <span className="kicker">THE COLLECTION</span>
              </div>
              <h2>
                Purpose-built products.
                <br />
                Raw fire. <em>Refined engineering.</em>
              </h2>
            </div>
            <div className="collection-intro-copy">
              <span className="kicker">SCROLL / EXPLORE</span>
              <p>
                A small, focused collection of fire products for inside,
                outside, and everywhere in between.
              </p>
              <span className="collection-progress" aria-hidden="true">
                01 — 04
              </span>
            </div>
          </section>

          {products.map((product, index) => (
            <Link
              className="collection-panel collection-product-panel"
              to={`/products/${product.slug}`}
              key={product.slug}
              aria-label={`View ${product.name}`}
            >
              <img src={product.image} alt={product.name} />
              <span className="collection-product-shade" aria-hidden="true" />
              <span className="collection-product-category">
                {product.category}
              </span>
              <span className="collection-product-counter">
                {String(index + 2).padStart(2, '0')} — 04
              </span>
              <div className="collection-product-content">
                <span className="kicker">
                  {product.number} / {product.eyebrow}
                </span>
                <h3>{product.name}</h3>
                <p>{product.cardCopy}</p>
                <span className="collection-product-link">
                  VIEW PRODUCT <ArrowUpRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
