import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { finderOptions, products } from '../../data/products';

export function FireFinder() {
  const [selected, setSelected] = useState(2);
  const recommended = products.find((product) => product.slug === finderOptions[selected].slug);

  return (
    <section className="finder shell">
      <div className="finder-heading">
        <span className="kicker">FIND YOUR FIRE / 05</span>
        <h2>What kind of fire are you looking for?</h2>
        <p>
          A starting point, not a specification sheet. Choose a feeling and we’ll point you towards
          a model.
        </p>
      </div>
      <div className="finder-grid">
        <div className="finder-options">
          {finderOptions.map((option, index) => (
            <button
              type="button"
              key={option.label}
              className={selected === index ? 'active' : ''}
              onClick={() => setSelected(index)}
            >
              <span>0{index + 1}</span>
              <strong>{option.label}</strong>
              <small>{option.copy}</small>
              <ArrowRight size={19} />
            </button>
          ))}
        </div>
        <Link to={`/products/${recommended.slug}`} className="finder-result">
          <img src={recommended.image} alt={recommended.name} />
          <span className="kicker">YOUR DIRECTION / {recommended.category.toUpperCase()}</span>
          <h3>{recommended.name}</h3>
          <span className="result-arrow">
            <ArrowUpRight size={20} />
          </span>
        </Link>
      </div>
    </section>
  );
}
