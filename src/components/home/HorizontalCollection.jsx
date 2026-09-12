import { ArrowUpRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export function HorizontalCollection({ products }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return undefined;

    let frameId = null;

    const updatePosition = () => {
      const scrollDistance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const sectionTop = section.getBoundingClientRect().top;
      const progress = Math.min(1, Math.max(0, -sectionTop / scrollDistance));
      const horizontalDistance = Math.max(track.scrollWidth - window.innerWidth, 0);

      track.style.transform = `translate3d(${-progress * horizontalDistance}px, 0, 0)`;
      frameId = null;
    };

    const requestUpdate = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(updatePosition);
    };

    updatePosition();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
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
                A small, focused collection of fire products for inside, outside, and everywhere in
                between.
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
              <span className="collection-product-category">{product.category}</span>
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
