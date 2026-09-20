import { useState } from 'react';
import { createWhatsAppUrl } from '../../data/products';
import { VideoShowcase } from '../product/VideoShowcase';
import { ArrowLink } from '../ui/ArrowLink';
import { BonfireEngineeringDiagram } from './BonfireEngineeringDiagram';
import { FireviewEngineeringDiagram } from './FireviewEngineeringDiagram';
import { RocketEngineeringDiagram } from './RocketEngineeringDiagram';

const diagramByProduct = {
  bonfire: BonfireEngineeringDiagram,
  rocket: RocketEngineeringDiagram,
  fireview: FireviewEngineeringDiagram,
};

const manufacturingSteps = [
  ['CUT', 'Ventilation openings, panel edges and locking details begin as deliberate cuts.'],
  ['FORM', 'Flat metal becomes the body, wall, chamber or structural panel the fire needs.'],
  ['JOIN', 'Tabs, joints, handles and formed parts establish the working geometry.'],
  ['FINISH', 'Surfaces are prepared for use while every opening and edge remains functional.'],
  ['FIRE', 'The physical object meets the airflow and heat path it was designed around.'],
];

function Anatomy({ craft }) {
  return (
    <section className="craft-section craft-anatomy" aria-labelledby={`${craft.id}-anatomy-title`}>
      <div className="shell">
        <div className="craft-section-heading">
          <span className="kicker">ANATOMY / {craft.number}</span>
          <h2 id={`${craft.id}-anatomy-title`}>Built around the burn.</h2>
          <p>Only the visible, functional parts of the real product are identified here.</p>
        </div>
        <div className="craft-anatomy-grid">
          <div className="craft-anatomy-visual">
            <img src={craft.anatomyImage} alt={`${craft.title} product anatomy`} loading="lazy" />
            {craft.anatomy.map(([number, label, x, y]) => (
              <span
                className="craft-anatomy-marker"
                style={{ left: `${x}%`, top: `${y}%` }}
                aria-label={`${number}: ${label}`}
                key={number}
              >
                {number}
              </span>
            ))}
          </div>
          <ol className="craft-anatomy-list">
            {craft.anatomy.map(([number, label]) => (
              <li key={number}>
                <span>{number}</span>
                <strong>{label}</strong>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function FireTimeline({ craft }) {
  const [activeStep, setActiveStep] = useState(0);
  const [label, copy] = craft.timeline[activeStep];

  return (
    <section className="craft-section craft-timeline-section" aria-labelledby={`${craft.id}-timeline-title`}>
      <div className="shell">
        <span className="kicker">FROM COLD START TO WORKING FIRE</span>
        <h2 id={`${craft.id}-timeline-title`}>The fire finds its path.</h2>
        <div className="craft-timeline" role="tablist" aria-label={`${craft.title} fire stages`}>
          {craft.timeline.map(([step], index) => (
            <button
              type="button"
              role="tab"
              aria-selected={activeStep === index}
              className={activeStep === index ? 'is-active' : ''}
              onClick={() => setActiveStep(index)}
              key={step}
            >
              <span>0{index + 1}</span>
              {step}
            </button>
          ))}
        </div>
        <div className="craft-timeline-detail" role="tabpanel" aria-live="polite">
          <span>0{activeStep + 1}</span>
          <div>
            <h3>{label}</h3>
            <p>{copy}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CraftProductExperience({ craft, layers }) {
  const [selectedLayer, setSelectedLayer] = useState(null);
  const [hoveredLayer, setHoveredLayer] = useState(null);
  const activeLayer = hoveredLayer || selectedLayer || 'all';
  const Diagram = diagramByProduct[craft.id];
  const whatsappUrl = createWhatsAppUrl(
    `Hi ESFIRE INDIA, I would like to understand more about the engineering and installation of the ${craft.product.name}.`,
  );

  return (
    <div className="craft-experience" key={craft.id}>
      <section className="craft-engineering" aria-labelledby={`${craft.id}-engineering-title`}>
        <div className="shell craft-engineering-grid">
          <div className="craft-engineering-copy">
            <span className="kicker">{craft.number} / {craft.eyebrow}</span>
            <h2 id={`${craft.id}-engineering-title`}>{craft.title}</h2>
            <p>{craft.intro}</p>
            <div className="craft-layer-controls" aria-label="Engineering illustration layers">
              {layers.map(([id, label]) => (
                <button
                  type="button"
                  aria-pressed={selectedLayer === id}
                  className={selectedLayer === id ? 'is-active' : ''}
                  onClick={() => setSelectedLayer(id)}
                  onPointerEnter={() => setHoveredLayer(id)}
                  onPointerLeave={() => setHoveredLayer(null)}
                  onFocus={() => setHoveredLayer(id)}
                  onBlur={() => setHoveredLayer(null)}
                  key={id}
                >
                  <span aria-hidden="true" />
                  {label}
                </button>
              ))}
            </div>
            <div className="craft-diagram-legend" aria-label="Diagram legend">
              <span><i className="is-air" />Air in</span>
              <span><i className="is-fire" />Combustion</span>
              <span><i className="is-gas" />Hot gas</span>
              <span><i className="is-heat" />Radiant heat</span>
            </div>
          </div>
          <div className="craft-diagram-panel">
            <div className="craft-diagram-grid" aria-hidden="true" />
            <Diagram focus={activeLayer} />
            <span className="craft-diagram-caption">ENGINEERING ILLUSTRATION • NOT TO SCALE</span>
          </div>
          <ul className="craft-mobile-diagram-labels" aria-label="Diagram annotations">
            {craft.mobileLabels.map((label) => <li key={label}>{label}</li>)}
          </ul>
        </div>
      </section>

      <section className="craft-section craft-mechanism" aria-labelledby={`${craft.id}-mechanism-title`}>
        <div className="shell">
          <div className="craft-mechanism-intro">
            <span className="kicker">HOW THE SYSTEM WORKS</span>
            <h2 id={`${craft.id}-mechanism-title`}>{craft.mechanismHeading}</h2>
            <p>{craft.mechanismCopy}</p>
          </div>
          <div className="craft-mechanism-steps">
            {craft.steps.map(([title, copy], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="craft-practical-note">
            <span>PRACTICAL NOTE</span>
            <p>{craft.note}</p>
          </div>
          <aside className="craft-engineering-callout">
            <span>{craft.callout.label}</span>
            <p>{craft.callout.copy}</p>
          </aside>
        </div>
      </section>

      <Anatomy craft={craft} />

      <section className="craft-section craft-geometry" aria-labelledby={`${craft.id}-geometry-title`}>
        <div className="shell craft-geometry-grid">
          <div className="craft-geometry-image">
            <img src={craft.geometryImage} alt={`${craft.title} geometry detail`} loading="lazy" />
          </div>
          <div className="craft-geometry-copy">
            <span className="kicker">WHY THE GEOMETRY MATTERS</span>
            <h2 id={`${craft.id}-geometry-title`}>The shape is part of the function.</h2>
            <p>{craft.geometryCopy}</p>
            <span className="craft-geometry-signoff">FORM / AIR / FIRE</span>
          </div>
        </div>
      </section>

      <FireTimeline craft={craft} />

      <VideoShowcase
        videos={craft.product.videos}
        eyebrow="REAL PRODUCT MEDIA"
        heading="See the principle in practice."
        className="craft-real-media"
      />

      <section className="craft-manufacturing" aria-labelledby={`${craft.id}-manufacturing-title`}>
        <div className="shell craft-manufacturing-heading">
          <span className="kicker">CRAFT / MANUFACTURING</span>
          <h2 id={`${craft.id}-manufacturing-title`}>Designed as airflow. <em>Built as metal.</em></h2>
          <p>
            Combustion engineering becomes physical through carefully cut openings, formed steel,
            joined components, functional hardware and a finish prepared for real fire.
          </p>
        </div>
        <div className="shell craft-manufacturing-grid">
          {manufacturingSteps.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="shell craft-workshop-proof">
          <video
            controls
            playsInline
            preload="none"
            poster="/videos/bonfire/posters/workshop.webp"
            aria-label="ESFIRE workshop fabrication footage"
          >
            <source src="/videos/bonfire/workshop.mp4" type="video/mp4" />
            <track kind="captions" srcLang="en" label="English" />
          </video>
          <div>
            <span className="kicker">REAL WORKSHOP FOOTAGE</span>
            <h3>The drawing only matters when the metal agrees.</h3>
            <p>
              Manufacturing decisions preserve the openings, paths and structural relationships
              that make each ESFIRE product work as intended.
            </p>
          </div>
        </div>
      </section>

      <section className="craft-section craft-safety" aria-labelledby={`${craft.id}-safety-title`}>
        <div className="shell craft-safety-grid">
          <div>
            <span className="kicker">OPERATING REALITY</span>
            <h2 id={`${craft.id}-safety-title`}>Real fire deserves clear thinking.</h2>
          </div>
          <ul>
            {craft.safety.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="craft-product-cta">
        <div className="shell craft-product-cta-inner">
          <div>
            <span className="kicker">NEXT / {craft.number}</span>
            <h2>See the engineering become an object.</h2>
          </div>
          <div className="button-row">
            <ArrowLink to={`/products/${craft.product.slug}`} light>Explore the product</ArrowLink>
            <ArrowLink to={whatsappUrl} light outline external>Talk to ESFIRE</ArrowLink>
          </div>
        </div>
      </section>
    </div>
  );
}
