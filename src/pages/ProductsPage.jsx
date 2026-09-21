import { useState } from 'react';
import { ProductCard } from '../components/product/ProductCard';
import { ArrowLink } from '../components/ui/ArrowLink';
import { products } from '../data/products';

const filters = ['All', 'Fire Stove', 'Bonfire', 'Rocket Stove'];

export function ProductsPage() {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? products : products.filter((product) => product.category === filter);

  return (
    <>
      <section className="shell products-hero">
        <span className="kicker">COLLECTION / 03 PRODUCTS</span>
        <div>
          <h1>
            The ESFIRE
            <br />
            <em>collection.</em>
          </h1>
          <p>
            Purpose-built fire stoves, bonfire pits and cooking stoves from Esfire India in
            Jalandhar, Punjab. Explore the complete collection for cooking, warmth and the outdoors.
          </p>
        </div>
      </section>
      <section className="shell product-catalogue">
        <div className="filter-row" aria-label="Product categories">
          {filters.map((item) => (
            <button
              type="button"
              className={filter === item ? 'active' : ''}
              onClick={() => setFilter(item)}
              key={item}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="catalogue-grid">
          {visible.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="catalogue-cta">
          <div>
            <span className="kicker">NEED A SPECIFIC BUILD?</span>
            <p>Talk to us about your application, space or custom requirement.</p>
          </div>
          <ArrowLink to="/contact">START A CONVERSATION</ArrowLink>
        </div>
      </section>
    </>
  );
}
