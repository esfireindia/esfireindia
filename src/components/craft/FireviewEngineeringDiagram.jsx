export function FireviewEngineeringDiagram({ focus = 'airflow' }) {
  return (
    <svg
      className="craft-engineering-svg"
      data-focus={focus}
      viewBox="0 0 920 650"
      aria-labelledby="fireview-diagram-title fireview-diagram-desc"
    >
      <title id="fireview-diagram-title">ESFIRE Fireview Tandoor heat and chimney draft diagram</title>
      <desc id="fireview-diagram-desc">
        Front sectional illustration showing air entering an enclosed glass-front firebox, heat
        leaving the body and combustion gases rising into the chimney flue.
      </desc>
      <defs>
        <linearGradient id="fireview-body" x1="0" x2="1">
          <stop offset="0" stopColor="#242321" /><stop offset=".5" stopColor="#4a4844" /><stop offset="1" stopColor="#1c1b1a" />
        </linearGradient>
        <linearGradient id="fireview-fire" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#d94500" /><stop offset=".58" stopColor="#ff7818" /><stop offset="1" stopColor="#ffd078" />
        </linearGradient>
        <marker id="fireview-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 10 5 0 10Z" fill="currentColor" />
        </marker>
      </defs>

      <g className="craft-diagram-structure">
        <path d="M407 120V35h148v85" fill="#2c2b29" stroke="#b4aea3" strokeWidth="4" />
        <path d="M385 134v-25h192v25" fill="#252422" stroke="#bbb4a8" strokeWidth="4" />
        <path d="M250 129h462l25 22v385H224V151Z" fill="url(#fireview-body)" stroke="#c1baae" strokeWidth="5" />
        <path d="M205 151h551" stroke="#d1cabd" strokeWidth="14" />
        <path d="M268 209h426v267H268Z" fill="#10100f" stroke="#b1aaa0" strokeWidth="7" />
        <path d="M293 235h376v216H293Z" fill="#201712" stroke="#c49a77" strokeWidth="5" />
        <path d="M328 425h308" stroke="#75675d" strokeWidth="15" />
        <path d="M223 294h-38v114h38" fill="none" stroke="#aaa399" strokeWidth="14" />
        <path d="M153 312v80" stroke="#c5beb2" strokeWidth="17" strokeLinecap="round" />
        {Array.from({ length: 14 }, (_, index) => (
          <circle key={index} cx={293 + index * 28} cy="183" r="6" fill="#070707" stroke="#77736c" />
        ))}
        <path d="M263 536v60h75l13-60M612 536l13 60h75v-60" fill="#363431" stroke="#aaa399" strokeWidth="4" />
        <path d="M312 514h338v35H312Z" fill="#242321" stroke="#8e897f" strokeWidth="4" />
        <g stroke="#73503b" strokeWidth="17" strokeLinecap="round">
          <path d="m367 416 99-86" /><path d="m435 419 103-86" /><path d="m370 354 151 64" />
        </g>
      </g>

      <g className="craft-energy-layer craft-energy-layer--combustion">
        <path className="craft-flame" d="M410 407c-30-59 30-84 19-143 42 37 30 71 50 91 5-45 42-60 28-104 59 61 50 133 18 171-33 39-99 39-130 5-19-21-19-58-4-83 1 32 6 52 19 63Z" fill="url(#fireview-fire)" />
        <path className="craft-leader" d="M327 330H84v-34" />
        <text className="craft-diagram-label" x="52" y="282">ENCLOSED COMBUSTION CHAMBER</text>
        <path className="craft-leader" d="M295 360H111v90" />
        <text className="craft-diagram-label" x="52" y="470">FIRE-VIEW WINDOW</text>
      </g>

      <g className="craft-energy-layer craft-energy-layer--airflow">
        <g className="craft-flow-lines" fill="none" stroke="#efb17c" strokeWidth="4" markerEnd="url(#fireview-arrow)">
          <path d="M86 185h188" />
          <path d="M120 496c86 0 139-24 201-71" />
        </g>
        <path className="craft-leader" d="M274 183H74v-25" />
        <text className="craft-diagram-label" x="52" y="145">COMBUSTION AIR</text>
      </g>

      <g className="craft-energy-layer craft-energy-layer--heat">
        <g className="craft-heat-lines" fill="none" stroke="#e5570b" strokeWidth="4" strokeLinecap="round">
          <path d="M229 246c-50 13-78 39-94 74" /><path d="M215 207c-65 10-103 41-126 89" />
          <path d="M728 248c53 12 79 39 96 72" /><path d="M742 207c65 10 104 40 127 88" />
        </g>
        <g className="craft-flow-lines" fill="none" stroke="#c98155" strokeWidth="3" markerEnd="url(#fireview-arrow)">
          <path d="M764 487c67-58 77-138 49-204" /><path d="M183 484c-60-54-71-128-48-187" />
        </g>
        <text className="craft-diagram-label" x="746" y="357">RADIANT HEAT</text>
        <text className="craft-diagram-label" x="737" y="389">NATURAL CONVECTION</text>
      </g>

      <g className="craft-energy-layer craft-energy-layer--exhaust">
        <g className="craft-flow-lines" fill="none" stroke="#dc6c31" strokeWidth="5" strokeDasharray="10 9" markerEnd="url(#fireview-arrow)">
          <path d="M453 315c-2-89 12-130 5-196" /><path d="M517 316c12-85 7-133 3-197" /><path d="M481 114V28" />
        </g>
        <text className="craft-diagram-label craft-diagram-label--accent" x="591" y="84">NATURAL CHIMNEY DRAFT ↑</text>
        <path className="craft-leader" d="M515 231h288" />
        <text className="craft-diagram-label" x="705" y="216">HOT FLUE GASES</text>
        <text className="craft-diagram-label" x="420" y="18">FLUE EXHAUST</text>
      </g>
    </svg>
  );
}
