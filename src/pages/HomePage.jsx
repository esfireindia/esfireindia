import { EngineeringDiagram } from '../components/home/EngineeringDiagram';
import { FireFinder } from '../components/home/FireFinder';
import { HorizontalCollection } from '../components/home/HorizontalCollection';
import { CallToAction } from '../components/sections/CallToAction';
import { ArrowLink } from '../components/ui/ArrowLink';
import { Preloader } from '../components/ui/Preloader';
import { products, whatsappBase } from '../data/products';

export function HomePage() {
  const featured = products.slice(0, 3);
  const reasons = [
    ['Cook', 'Traditional cooking. Modern engineering.', '/assets/fireview-01.png'],
    ['Warm', 'Comfort for colder evenings.', '/assets/fireview-05.png'],
    ['Gather', 'Designed around shared moments.', '/assets/bonfire-03.webp'],
    ['Explore', 'Built for outdoor experiences.', '/assets/rocket-stove-05.webp'],
  ];

  return (
    <>
      <Preloader />
      <section className="hero">
        <div className="hero-visual" aria-hidden="true">
          <img src="/assets/fireview.avif" alt="" />
        </div>
        <div className="hero-shade" />
        <div className="hero-copy shell">
          <span className="kicker">ESFIRE INDIA / 001 — EST. FOR FIRE</span>
          <h1>
            Where <em>fire</em> meets engineering.
          </h1>
          <p>
            Premium tandoors, fire stoves, smokeless fire pits and outdoor fire solutions —
            engineered for warmth, cooking and unforgettable gatherings.
          </p>
          <div className="button-row">
            <ArrowLink to="/products" light>
              EXPLORE PRODUCTS
            </ArrowLink>
            <ArrowLink to={whatsappBase} external light outline>
              TALK TO US
            </ArrowLink>
          </div>
        </div>
        <div className="hero-foot shell" aria-hidden="true">
          <span className="hero-edge-label hero-edge-label--left">
            <span>FIREVIEW / GLASS-FRONT &nbsp; 01 — 03</span>
          </span>
          <span className="hero-scroll-label">SCROLL TO EXPLORE</span>
          <span className="hero-edge-label hero-edge-label--right">
            <span>JALANDHAR / PUNJAB / INDIA</span>
          </span>
        </div>
      </section>

      <section className="reason-section shell">
        <div className="section-heading split-heading">
          <div>
            <span className="section-index">02</span>
            <span className="kicker">THE REASON WE MAKE</span>
            <h2>
              Fire is more
              <br />
              <em>than heat.</em>
            </h2>
          </div>
          <p>
            It cooks. It gathers. It gives a room a pulse. ESFIRE products are made for the moments
            that happen around a considered flame.
          </p>
        </div>
        <div className="reason-grid">
          {reasons.map(([title, copy, image]) => (
            <article key={title} className="reason-card">
              <img src={image} alt={`${title} fire experience`} />
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <HorizontalCollection products={featured} />

      <EngineeringDiagram />

      <section className="outdoor-feature">
        <img src="/assets/bonfire-03.webp" alt="Smokeless Bonfire Pit glowing at dusk" />
        <div className="outdoor-overlay shell">
          <span className="kicker">OUTDOOR / 02</span>
          <h2>
            Gather around fire.
            <br />
            <em>Not smoke.</em>
          </h2>
          <p>
            Cozy up with friends and family around our smokeless fire pit, designed for chilly
            nights and outdoor gatherings.
          </p>
          <ArrowLink to="/products/smokeless-bonfire-18" light>
            EXPLORE SMOKELESS BONFIRE
          </ArrowLink>
        </div>
      </section>

      <FireFinder />
      <CallToAction />
    </>
  );
}
