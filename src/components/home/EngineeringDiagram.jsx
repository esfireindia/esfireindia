export function EngineeringDiagram() {
  const steps = [
    ['01', 'AIR', 'Fuelled by a considered path'],
    ['02', 'COMBUSTION', 'Where the burn begins'],
    ['03', 'HEAT', 'The warmth you feel'],
    ['04', 'EXHAUST', 'A cleaner visual story'],
  ];

  return (
    <div className="engineering-grid shell">
      <div className="engineering-copy">
        <div className="section-index">04</div>
        <span className="kicker">FIRE, UNDERSTOOD</span>
        <h2>
          Control the fire.
          <br />
          <em>Don’t just burn it.</em>
        </h2>
        <p>
          A visual language for the relationship between fuel, air, combustion and warmth. Exact
          configurations are confirmed model by model.
        </p>
      </div>
      <div className="diagram-card">
        <span className="kicker">CONCEPT / AIRFLOW RELATIONSHIP</span>
        <svg viewBox="0 0 560 300">
          <title>Illustrative airflow diagram</title>
          <defs>
            <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path
                d="M 28 0 L 0 0 0 28"
                fill="none"
                stroke="currentColor"
                strokeWidth=".45"
                opacity=".14"
              />
            </pattern>
          </defs>
          <rect width="560" height="300" fill="url(#grid)" />
          <path
            d="M82 238h396M132 238V135h296v103M185 238V102h190v136M235 238V153h90v85M265 153V118h30v35"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity=".55"
          />
          <path
            d="M256 214c-25-22-4-38 5-54 8 22 36 33 30 64-4 21-18 32-36 31-25-1-38-20-30-42 6 10 15 14 31 1Z"
            fill="none"
            stroke="#e5590b"
            strokeWidth="3"
          />
          <path
            d="M58 185h84M418 185h84M280 72V116"
            stroke="#e5590b"
            strokeWidth="2"
            strokeDasharray="4 6"
          />
          <text x="28" y="180">AIR</text>
          <text x="475" y="180">HEAT</text>
          <text x="245" y="54">EXHAUST</text>
        </svg>
        <div className="diagram-steps">
          {steps.map(([number, title, copy]) => (
            <div key={number}>
              <span>{number}</span>
              <strong>{title}</strong>
              <small>{copy}</small>
            </div>
          ))}
        </div>
        <p className="fine-print">
          ILLUSTRATIVE FIRE-ENGINEERING LANGUAGE. PRODUCT CONFIGURATIONS AND TECHNICAL PERFORMANCE
          SHOULD BE CONFIRMED FOR EACH MODEL.
        </p>
      </div>
    </div>
  );
}
