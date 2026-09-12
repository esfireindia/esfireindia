import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageIntro } from '../components/ui/PageIntro';
import { applicationOptions } from '../data/products';

export function ApplicationsPage() {
  const [selected, setSelected] = useState(0);
  const current = applicationOptions[selected];

  return (
    <>
      <PageIntro
        label="APPLICATIONS"
        title="Where fire"
        accent="belongs."
        copy="The right fire product is less about a room and more about what you want the room to become."
      />
      <section className="shell applications-grid">
        <div className="application-buttons">
          {applicationOptions.map((item, index) => (
            <button
              type="button"
              className={selected === index ? 'active' : ''}
              onClick={() => setSelected(index)}
              key={item.label}
            >
              <span>0{index + 1}</span>
              <strong>{item.label}</strong>
              <small>{item.copy}</small>
            </button>
          ))}
        </div>
        <Link to={`/products/${current.slug}`} className="application-result">
          <img src={current.image} alt={`${current.label} fire application`} />
          <div>
            <span className="kicker">SELECTED / {current.label.toUpperCase()}</span>
            <h2>{current.copy}</h2>
          </div>
          <span className="result-arrow">
            <ArrowUpRight size={21} />
          </span>
        </Link>
      </section>
    </>
  );
}
