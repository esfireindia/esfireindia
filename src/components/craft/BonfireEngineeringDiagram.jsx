export function BonfireEngineeringDiagram({ focus = 'airflow' }) {
  return (
    <svg
      className="craft-engineering-svg"
      data-focus={focus}
      viewBox="0 0 920 650"
      aria-labelledby="bonfire-diagram-title bonfire-diagram-desc"
    >
      <title id="bonfire-diagram-title">ESFIRE Smokeless Bonfire airflow diagram</title>
      <desc id="bonfire-diagram-desc">
        Cross-sectional illustration showing fresh air entering through lower vents, rising through
        the double-wall channel and returning through upper secondary air openings.
      </desc>
      <defs>
        <linearGradient id="bonfire-metal" x1="0" x2="1">
          <stop offset="0" stopColor="#55534f" />
          <stop offset=".48" stopColor="#aca69b" />
          <stop offset="1" stopColor="#4a4844" />
        </linearGradient>
        <linearGradient id="bonfire-fire" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#d94500" />
          <stop offset=".58" stopColor="#ff7a19" />
          <stop offset="1" stopColor="#ffd077" />
        </linearGradient>
        <marker id="bonfire-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 10 5 0 10Z" fill="currentColor" />
        </marker>
      </defs>

      <g className="craft-diagram-structure">
        <ellipse cx="470" cy="154" rx="230" ry="58" fill="#151514" stroke="#d0c9bc" strokeWidth="8" />
        <path d="M240 154v316c0 45 103 81 230 81s230-36 230-81V154" fill="url(#bonfire-metal)" stroke="#c7c0b3" strokeWidth="4" />
        <path d="M283 164v278c0 32 84 57 187 57s187-25 187-57V164" fill="#1a1917" stroke="#817c73" strokeWidth="4" />
        <ellipse cx="470" cy="164" rx="187" ry="43" fill="#0d0d0c" stroke="#8e897f" strokeWidth="3" />
        <path d="M657 165v277c0 24-39 42-84 50V177c34-4 62-8 84-12Z" fill="#292825" stroke="#aaa399" strokeWidth="3" />
        <path d="M584 182v288" stroke="#777269" strokeWidth="2" strokeDasharray="7 7" />
        {Array.from({ length: 9 }, (_, index) => (
          <ellipse key={index} cx={328 + index * 36} cy="204" rx="7" ry="5" fill="#050505" stroke="#99938a" />
        ))}
        {Array.from({ length: 11 }, (_, index) => (
          <rect key={index} x={292 + index * 32} y="444" width="12" height="49" rx="6" fill="#090909" stroke="#aaa399" />
        ))}
        <path d="M240 296h-47l-23 25v89l23 25h47" fill="none" stroke="#aaa399" strokeWidth="10" />
        <path d="M170 322h-43v84h43" fill="none" stroke="#c7c0b3" strokeWidth="10" />
        <path d="M292 530v40h56v-28M592 542v28h56v-40" fill="#77736c" stroke="#bbb4a8" strokeWidth="3" />
        <g stroke="#6a5143" strokeWidth="15" strokeLinecap="round">
          <path d="m382 412 111-96" />
          <path d="m447 420 112-94" />
          <path d="m370 347 143 73" />
        </g>
      </g>

      <g className="craft-energy-layer craft-energy-layer--combustion">
        <path className="craft-flame" d="M405 390c-35-62 37-88 25-151 46 39 32 69 52 91 5-48 44-55 28-103 63 62 54 135 22 174-39 48-105 45-139 6-20-23-22-64-2-89 0 34 3 53 14 72Z" fill="url(#bonfire-fire)" opacity=".9" />
        <path className="craft-flame craft-flame--secondary" d="M315 239c17-25 31-15 37-43 15 25 8 42-4 55M420 217c14-27 34-18 38-49 20 29 9 49-4 62M538 222c13-24 30-17 34-43 19 26 10 44-4 57M614 242c10-20 25-14 28-36 15 21 8 37-4 47" fill="none" stroke="#ff7a19" strokeWidth="7" strokeLinecap="round" />
        <path className="craft-leader" d="M332 333H132v-41" />
        <text className="craft-diagram-label" x="58" y="278">PRIMARY COMBUSTION</text>
        <path className="craft-leader" d="M583 235h96v-88h91" />
        <text className="craft-diagram-label" x="642" y="132">SECONDARY COMBUSTION ZONE</text>
      </g>

      <g className="craft-energy-layer craft-energy-layer--airflow">
        <g className="craft-flow-lines" fill="none" stroke="#f1b27c" strokeWidth="3" markerEnd="url(#bonfire-arrow)">
          <path d="M96 472h184" />
          <path d="M844 472H672" />
          <path d="M653 454c23-58 28-122 18-203" />
          <path d="M594 447c19-68 19-139 5-226" />
          <path d="M649 225c-45-5-67-10-89-22" />
          <path d="M590 221c-28-8-51-12-75-13" />
          <path d="M305 456c23-38 55-53 88-57" />
        </g>
        <path className="craft-leader" d="M238 472H91v-24" />
        <text className="craft-diagram-label" x="56" y="435">LOWER AIR INTAKE</text>
        <path className="craft-leader" d="M631 340h164" />
        <text className="craft-diagram-label" x="708" y="326">DOUBLE-WALL</text>
        <text className="craft-diagram-label" x="708" y="344">AIR CHANNEL</text>
        <text className="craft-diagram-label craft-diagram-label--accent" x="704" y="384">PREHEATED AIR ↑</text>
        <path className="craft-leader" d="M603 202h194" />
        <text className="craft-diagram-label" x="699" y="223">SECONDARY AIR PORTS</text>
      </g>

      <g className="craft-energy-layer craft-energy-layer--heat">
        <g className="craft-heat-lines" fill="none" stroke="#e5570b" strokeWidth="3" strokeLinecap="round">
          <path d="M242 266c-50 13-75 35-93 66" />
          <path d="M233 230c-64 9-102 35-126 75" />
          <path d="M699 263c52 13 79 38 96 67" />
          <path d="M708 225c68 10 104 37 128 79" />
        </g>
        <text className="craft-diagram-label" x="700" y="360">RADIANT HEAT</text>
      </g>

      <g className="craft-energy-layer craft-energy-layer--exhaust">
        <g className="craft-flow-lines" fill="none" stroke="#d97238" strokeWidth="3" strokeDasharray="8 10" markerEnd="url(#bonfire-arrow)">
          <path d="M440 188c-20-50-14-89-1-122" />
          <path d="M497 188c22-46 24-84 18-122" />
        </g>
        <text className="craft-diagram-label" x="375" y="48">HOT GAS / REDUCED VISIBLE SMOKE</text>
      </g>
    </svg>
  );
}
