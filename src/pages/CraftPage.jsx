import { useEffect, useState } from 'react';
import { CraftProductExperience } from '../components/craft/CraftProductExperience';
import { craftLayers, craftProductOrder, craftProducts } from '../data/craftProducts';

function getHashProduct() {
  if (typeof window === 'undefined') return 'bonfire';
  const hash = window.location.hash.replace('#', '');
  return craftProducts[hash] ? hash : 'bonfire';
}

export function CraftPage() {
  const [selectedProduct, setSelectedProduct] = useState(getHashProduct);
  const craft = craftProducts[selectedProduct];

  useEffect(() => {
    const handleHashChange = () => setSelectedProduct(getHashProduct());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const selectProduct = (id) => {
    setSelectedProduct(id);
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#${id}`);
  };

  return (
    <main className="craft-page">
      <section className="craft-hero">
        <div className="craft-hero-grid" aria-hidden="true" />
        <div className="shell craft-hero-inner">
          <span className="kicker">OUR CRAFT</span>
          <h1>Fire, engineered <em>with purpose.</em></h1>
          <div className="craft-hero-support">
            <p>
              Every ESFIRE product begins with the same element — fire. What changes is how we
              guide the air around it, concentrate the combustion and put the resulting heat to work.
            </p>
            <div className="craft-equation" aria-label="Airflow to fuel to combustion to heat to exhaust">
              {['AIRFLOW', 'FUEL', 'COMBUSTION', 'HEAT', 'EXHAUST'].map((item, index) => (
                <span key={item}>{item}{index < 4 && <b aria-hidden="true">→</b>}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <nav className="craft-selector" aria-label="Select a product engineering study">
        <div className="shell craft-selector-scroll" role="tablist">
          {craftProductOrder.map((id, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={selectedProduct === id}
              aria-controls={`${id}-engineering-title`}
              className={selectedProduct === id ? 'is-active' : ''}
              onClick={() => selectProduct(id)}
              key={id}
            >
              <span>0{index + 1}</span>
              {craftProducts[id].tabLabel}
            </button>
          ))}
        </div>
      </nav>

      <CraftProductExperience craft={craft} layers={craftLayers} key={selectedProduct} />
    </main>
  );
}
