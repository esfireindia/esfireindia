import { products } from './products';

const productBySlug = Object.fromEntries(products.map((product) => [product.slug, product]));

export const craftProductOrder = ['bonfire', 'rocket', 'fireview'];

export const craftProducts = {
  bonfire: {
    id: 'bonfire',
    tabLabel: 'SMOKELESS BONFIRE 18"',
    number: '01',
    eyebrow: 'DOUBLE-WALL COMBUSTION',
    title: 'Smokeless Bonfire 18"',
    diagramTitle: 'ESFIRE Smokeless Bonfire airflow diagram',
    intro:
      'A continuous route carries fresh air from the lower vents into the fire and through the double-wall cavity, where it gains heat before returning near the upper combustion zone.',
    mechanismHeading: 'Two combustion zones. One continuous airflow.',
    mechanismCopy:
      'The Smokeless Bonfire uses its geometry to keep fresh air moving through the fire. Air entering close to the base supports the primary burn, while a second stream travels through the double-wall cavity and gains heat. Near the upper rim, that preheated air is introduced back into the combustion zone, encouraging a secondary burn of hot gases above the wood.',
    steps: [
      ['AIR ENTERS', 'Fresh air enters through the rounded lower ventilation slots.'],
      ['AIR PREHEATS', 'A second stream rises and gains heat inside the double-wall channel.'],
      ['SECONDARY BURN', 'Preheated oxygen returns through upper ports near the hot gases.'],
      ['HEAT RADIATES', 'Combustion warms the open flame and surrounding metal body.'],
    ],
    note:
      'For the secondary burn to develop properly, the fire needs to come up to temperature. Dry seasoned wood and unobstructed airflow give the system its best operating conditions.',
    callout: {
      label: 'LOW-SMOKE COMBUSTION',
      copy: 'Visible smoke can be reduced once the fire is established; startup, damp fuel and wind still affect the burn.',
    },
    anatomyImage: '/assets/bonfire-08.webp',
    geometryImage: '/assets/bonfire-01.webp',
    anatomy: [
      ['01', 'Top rim', 64, 17],
      ['02', 'Inner combustion wall', 68, 35],
      ['03', 'Secondary air ports', 58, 27],
      ['04', 'Outer wall', 78, 52],
      ['05', 'Lower intake vents', 67, 80],
      ['06', 'Carry handle', 22, 53],
      ['07', 'Base / feet', 58, 91],
    ],
    geometryCopy:
      'The space between the two walls creates a defined route for incoming air to rise and gain heat before returning to the upper combustion zone.',
    timeline: [
      ['IGNITION', 'Kindling establishes the first flame and begins drawing air through the lower openings.'],
      ['PRIMARY BURN', 'Fresh oxygen supports the wood fire in the central chamber.'],
      ['WALLS HEAT', 'Air moving inside the double wall gains heat as the metal warms.'],
      ['SECONDARY BURN', 'Preheated air returns through the upper ports and meets hot combustible gases.'],
      ['STEADY FIRE', 'A continuous airflow supports a hotter, lower-smoke working fire.'],
    ],
    mobileLabels: [
      'Lower air intake',
      'Primary combustion',
      'Double-wall air channel',
      'Preheated air',
      'Secondary air ports',
      'Secondary combustion zone',
      'Radiant heat',
    ],
    safety: [
      'Use outdoors in a suitable open-air location on a stable, non-combustible surface.',
      'Use dry, suitable wood and keep every lower intake and upper air opening unobstructed.',
      'Keep combustible materials away from the exposed flame and hot metal surfaces.',
      'Let the body and ash cool completely before moving, emptying or cleaning the pit.',
    ],
    product: productBySlug['smokeless-bonfire-18'],
  },
  rocket: {
    id: 'rocket',
    tabLabel: 'ROCKET STOVE',
    number: '02',
    eyebrow: 'NATURAL VERTICAL DRAFT',
    title: 'Flatpack Rocket Stove',
    diagramTitle: 'ESFIRE Flatpack Rocket Stove combustion path diagram',
    intro:
      'An angled fuel feed meets a tall, rectangular riser to create a direct L-shaped route from small wood to concentrated cooking heat.',
    mechanismHeading: 'A short path for fuel. A strong path for heat.',
    mechanismCopy:
      'The Rocket Stove places the fire at the base of a vertical combustion path. As the fire heats the rising gases, the vertical chamber develops natural draft, drawing fresh air toward the burning fuel. The resulting flame and hot gases move directly toward the cookware positioned above the riser.',
    steps: [
      ['FEED FUEL', 'Small dry sticks enter through the real angled fuel chamber.'],
      ['DRAW AIR', 'Air reaches the fuel through the available feed and base openings.'],
      ['BUILD DRAFT', 'Rising hot gases sustain an upward pull through the vertical riser.'],
      ['TRANSFER HEAT', 'Flame and hot gas are directed toward cookware above the outlet.'],
    ],
    note:
      'Keep the feed path open enough for air to reach the flame. Small, dry fuel establishes draft more readily than oversized or damp wood.',
    callout: {
      label: 'FLAT-PACK CONSTRUCTION',
      copy: 'Interlocking laser-cut steel panels form the stove body without changing the fundamental airflow path, while the stepped top supports accommodate cookware above the combustion outlet.',
    },
    anatomyImage: '/assets/rocket-stove-02.webp',
    geometryImage: '/assets/rocket-stove-04.webp',
    anatomy: [
      ['01', 'Stepped pot supports', 59, 12],
      ['02', 'Vertical combustion riser', 58, 36],
      ['03', 'Panel locking tabs', 67, 51],
      ['04', 'Fuel feed chamber', 29, 48],
      ['05', 'Combustion zone', 47, 63],
      ['06', 'Base air opening', 47, 84],
      ['07', 'Flat-pack feet', 64, 91],
    ],
    geometryCopy:
      'The angled feed and vertical riser create a continuous path from fuel entry to concentrated upward heat.',
    timeline: [
      ['LOAD', 'Small dry wood is placed through the angled feed chamber.'],
      ['IGNITE', 'The first flame develops where the feed meets the vertical chamber.'],
      ['DRAFT BUILDS', 'Warming gases rise and begin drawing replacement air toward the fire.'],
      ['FLAME RISES', 'The tall chamber keeps the working flame moving toward the top outlet.'],
      ['COOK', 'Hot gas reaches the cookware and exits through the space around its base.'],
    ],
    mobileLabels: [
      'Fuel feed',
      'Primary air',
      'Combustion zone',
      'Vertical draft',
      'Concentrated cooking heat',
      'Hot gas exit',
    ],
    safety: [
      'Use outdoors only, in an open and well-ventilated location on a stable, non-combustible surface.',
      'Keep the fuel feed and base air opening clear, and use small pieces of dry wood.',
      'Keep the hot stove away from tents, vehicles, dry grass and other combustible material.',
      'Allow every steel panel and all ash to cool fully before dismantling or packing the stove.',
    ],
    product: productBySlug['flatpack-rocket-stove'],
  },
  fireview: {
    id: 'fireview',
    tabLabel: 'FIREVIEW TANDOOR',
    number: '03',
    eyebrow: 'ENCLOSED FIRE / FLUE DRAFT',
    title: 'Fireview Tandoor',
    diagramTitle: 'ESFIRE Fireview Tandoor heat and chimney draft diagram',
    intro:
      'A glass-front metal firebox contains the wood fire, transfers warmth through its surfaces and gives combustion gases a defined route into the installed flue.',
    mechanismHeading: 'Contain the fire. Guide the exhaust. Keep the view.',
    mechanismCopy:
      'The Fireview system places the wood fire inside a closed metal chamber. Combustion air supports the flame while the hot body transfers warmth to the surrounding space. Rising combustion gases are guided toward the upper flue connection, where chimney draft carries them through the installed flue system.',
    steps: [
      ['AIR ENTERS', 'Replacement air reaches the enclosed fire through the visible vent region.'],
      ['WOOD BURNS', 'Combustion remains contained behind the heat-resistant viewing glass.'],
      ['HEAT TRANSFERS', 'The hot body radiates warmth and heats the surrounding air.'],
      ['EXHAUST RISES', 'Hot flue gases move upward through the chimney connection.'],
    ],
    note:
      'The flue is part of the complete working system. Correct chimney routing, installation and room ventilation are essential to guide exhaust outdoors.',
    callout: {
      label: 'VISIBLE FIRE / ENCLOSED CHAMBER',
      copy: 'The heat-resistant front glass keeps the flame visible while combustion remains contained inside the metal firebox.',
    },
    anatomyImage: '/assets/fireview-01.png',
    geometryImage: '/assets/fireview-03.png',
    anatomy: [
      ['01', 'Flue collar', 54, 15],
      ['02', 'Flat top plate', 57, 28],
      ['03', 'Enclosed firebox', 55, 52],
      ['04', 'Viewing glass', 57, 57],
      ['05', 'Door / handle', 24, 56],
      ['06', 'Ventilation region', 55, 37],
      ['07', 'Raised legs', 66, 90],
    ],
    geometryCopy:
      'The enclosed chamber contains the combustion while the upper flue creates a defined route for exhaust gases.',
    timeline: [
      ['LOAD', 'Dry split wood is placed inside the enclosed firebox.'],
      ['IGNITE', 'Kindling establishes the flame while the flue begins to warm.'],
      ['FIREBOX HEATS', 'Combustion warms the metal body and front viewing glass.'],
      ['DRAFT STABILISES', 'Rising flue gases sustain a natural pull through the installed chimney.'],
      ['HEAT RADIATES', 'Warmth transfers through the body and into the surrounding room air.'],
    ],
    mobileLabels: [
      'Combustion air',
      'Enclosed combustion chamber',
      'Radiant heat',
      'Natural convection',
      'Fire-view window',
      'Hot flue gases',
      'Natural chimney draft',
      'Flue exhaust',
    ],
    safety: [
      'Use only with a correctly installed flue system that carries combustion gases outdoors.',
      'Follow product installation guidance for ventilation, floor protection and safe placement.',
      'Use dry, suitable wood and keep the visible air openings and flue route unobstructed.',
      'Keep combustible material away from the hot body, and let the stove and ash cool before cleaning.',
    ],
    product: productBySlug['fireview-tandoor'],
  },
};

export const craftLayers = [
  ['airflow', 'AIRFLOW'],
  ['combustion', 'COMBUSTION'],
  ['heat', 'HEAT'],
  ['exhaust', 'EXHAUST'],
];
