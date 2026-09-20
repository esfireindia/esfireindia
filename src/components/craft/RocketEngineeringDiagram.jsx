export function RocketEngineeringDiagram({ focus = 'airflow' }) {
  return (
    <svg
      className="craft-engineering-svg"
      data-focus={focus}
      viewBox="0 0 920 650"
      aria-labelledby="rocket-diagram-title rocket-diagram-desc"
    >
      <title id="rocket-diagram-title">ESFIRE Flatpack Rocket Stove combustion path diagram</title>
      <desc id="rocket-diagram-desc">
        Sectional illustration showing fuel entering an angled feed chamber, combustion at the lower
        junction and hot gases rising through a rectangular riser toward cookware.
      </desc>
      <defs>
        <linearGradient id="rocket-fire" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#d94500" /><stop offset=".6" stopColor="#ff7818" /><stop offset="1" stopColor="#ffd078" />
        </linearGradient>
        <marker id="rocket-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 10 5 0 10Z" fill="currentColor" />
        </marker>
      </defs>

      <g className="craft-diagram-structure" fill="#222220" stroke="#b6b0a5" strokeWidth="4" strokeLinejoin="round">
        <path d="M398 181h236v351H398V380L205 501l-93-145 286-176Z" />
        <path d="M398 380 220 489l-82-126 260-160Z" fill="#151514" />
        <path d="M435 214h160v266H435V365L266 466l-54-85 223-136Z" fill="#090909" stroke="#6f6b64" />
        <path d="M390 181 300 91h-62l112 138M642 181l91-90h62L681 229" fill="#282725" />
        <path d="M464 181 438 58h42l36 123M570 181l29-123h42l-21 123" fill="#282725" />
        <path d="M435 535v38h62l18-41M595 532l18 41h58v-41" fill="#53504b" />
        <path d="M398 532h236v41H398Z" fill="#1c1b1a" />
        <path d="M453 572q64-65 128 0" fill="#080808" stroke="#090909" />
        <path d="M456 281h-31M456 346h-31M456 426h-31M634 263h30M634 334h30M634 410h30M634 480h30" stroke="#aba59a" strokeWidth="10" />
        <g fill="#726e66" stroke="#c2bbb0" strokeWidth="2">
          <path d="M421 553c-15-18 12-25 5-43 25 20 17 49-5 43Z" />
          <path d="M617 553c-15-18 12-25 5-43 25 20 17 49-5 43Z" />
        </g>
        <path d="M308 367 188 434" stroke="#7f5c45" strokeWidth="17" strokeLinecap="round" />
        <path d="M336 391 221 457" stroke="#72513d" strokeWidth="15" strokeLinecap="round" />
        <path d="M311 78h400c34 0 55-20 55-42H262c0 22 18 42 49 42Z" fill="none" stroke="#bdb6aa" strokeWidth="7" />
        <path d="M340 37v-18h348v18" fill="none" />
      </g>

      <g className="craft-energy-layer craft-energy-layer--combustion">
        <path className="craft-flame" d="M407 438c-28-55 24-76 22-129 31 31 27 61 42 83 3-38 34-53 27-92 48 55 40 108 17 143-24 35-80 45-108 15-16-17-19-44-8-69 1 25 2 37 8 49Z" fill="url(#rocket-fire)" />
        <path className="craft-leader" d="M434 411H710v34" />
        <text className="craft-diagram-label" x="701" y="463">COMBUSTION ZONE</text>
      </g>

      <g className="craft-energy-layer craft-energy-layer--airflow">
        <g className="craft-flow-lines" fill="none" stroke="#efb17c" strokeWidth="4" markerEnd="url(#rocket-arrow)">
          <path d="M67 451c80 0 139-18 212-61" />
          <path d="M283 542c45-28 90-58 130-97" />
        </g>
        <path className="craft-leader" d="M267 392H82v-29" />
        <text className="craft-diagram-label" x="52" y="349">PRIMARY AIR</text>
        <path className="craft-leader" d="M260 435H76v44" />
        <text className="craft-diagram-label" x="52" y="499">FUEL FEED</text>
      </g>

      <g className="craft-energy-layer craft-energy-layer--heat">
        <g className="craft-heat-lines" fill="none" stroke="#e5570b" strokeWidth="4" strokeLinecap="round">
          <path d="M467 169c-21-24-23-42-13-61" />
          <path d="M516 164c-18-27-16-46-5-67" />
          <path d="M569 165c-10-27-5-47 8-65" />
        </g>
        <path className="craft-leader" d="M518 125H770v-25" />
        <text className="craft-diagram-label" x="645" y="86">CONCENTRATED COOKING HEAT</text>
      </g>

      <g className="craft-energy-layer craft-energy-layer--exhaust">
        <g className="craft-flow-lines" fill="none" stroke="#dc6c31" strokeWidth="5" strokeDasharray="10 9" markerEnd="url(#rocket-arrow)">
          <path d="M487 407c-10-95-10-154 0-221" />
          <path d="M548 410c10-94 10-154 0-224" />
          <path d="M465 176c-27-30-56-43-89-55" />
          <path d="M571 176c32-29 62-40 95-52" />
        </g>
        <text className="craft-diagram-label craft-diagram-label--accent" x="662" y="279">VERTICAL DRAFT ↑</text>
        <path className="craft-leader" d="M629 135h169" />
        <text className="craft-diagram-label" x="704" y="119">HOT GAS EXIT</text>
      </g>
    </svg>
  );
}
