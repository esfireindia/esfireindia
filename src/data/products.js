import { resolveMediaPaths } from '../utils/media';

export const products = resolveMediaPaths([
  {
    slug: 'fireview-tandoor',
    number: '01',
    eyebrow: 'GLASS-FRONT',
    category: 'Fire Stove',
    name: 'Fireview Tandoor',
    cardCopy: 'A view into the fire, designed for cooking and warmth.',
    description:
      'A smokeless, glass-front wood stove in cast iron. Watch the flame, feel the heat, and bring real fire into your room.',
    image: '/assets/fireview-01.png',
    cardImage: '/assets/fireview-05.png',
    cardHoverImage: '/assets/fireview-01.png',
    collectionImage: '/assets/collection-fireview.webp',
    alternateImage: '/assets/fireview-02.png',
    gallery: [
      {
        src: '/assets/fireview-01.png',
        alt: 'Fireview Tandoor glass-front wood stove, front view',
      },
      {
        src: '/assets/fireview-02.png',
        alt: 'Fireview Tandoor glass-front wood stove, angled view',
      },
      {
        src: '/assets/fireview-03.png',
        alt: 'Fireview Tandoor exploded view showing the cast-iron body and glass door',
      },
      {
        src: '/assets/fireview-04.png',
        alt: 'Fireview Tandoor installed in a warm modern living room',
      },
      {
        src: '/assets/fireview-05.png',
        alt: 'Fireview Tandoor burning in a mountain home at dusk',
      },
      {
        src: '/assets/fireview-06.png',
        alt: 'Fireview Tandoor installed beside large windows in a bright living room',
      },
    ],
    variants: [
      {
        id: 'size-01',
        label: 'Size 01',
        size: '1',
        height: '21 in',
        heightCm: '53 cm',
        width: '22 in',
        widthCm: '56 cm',
        length: '17.5 in',
        lengthCm: '44 cm',
        weight: '70 kg',
      },
      {
        id: 'size-02',
        label: 'Size 02',
        size: '2',
        height: '22 in',
        heightCm: '56 cm',
        width: '16 in',
        widthCm: '41 cm',
        length: '17 in',
        lengthCm: '43 cm',
        weight: '65 kg',
      },
    ],
    price_line: '',
    warranty_line: '',
    delivery_time_line: '',
    installation_support_line: '',
    chimney_pipe_line: '',
    heating_area_line: '',
    trustLine: ['Ready to order', 'Delivery all over India', 'Easy to install'],
    applications: ['Indoor living', 'Cooking', 'Hospitality'],
    highlights: [
      {
        icon: 'wind',
        title: 'Smokeless burn',
        copy: 'Smoke goes out through the chimney, not into your room.',
      },
      {
        icon: 'shield',
        title: 'Cast iron + glass',
        copy: 'Built to last and holds heat.',
      },
      {
        icon: 'flame',
        title: 'Runs on wood',
        copy: 'No gas, no electricity.',
      },
      {
        icon: 'eye',
        title: 'Full glass door',
        copy: 'Watch the fire from your seat.',
      },
      {
        icon: 'wrench',
        title: 'Easy to install',
        copy: 'Connects to a standard chimney pipe.',
      },
      {
        icon: 'truck',
        title: 'All-India delivery',
        copy: 'Ready to order.',
      },
    ],
    about: {
      label: 'ABOUT',
      heading: 'Real fire, on display.',
      paragraphs: [
        'The Fireview Tandoor is a freestanding wood-burning stove made for people who want the real thing: a live flame you can see, real wood heat, and a clean, smokeless burn. The large glass door puts the fire on display, while the heavy cast-iron body holds heat and keeps warming the room even after the flames settle.',
        'Built in cast iron and glass, it suits living rooms, farmhouses, hill homes, cafes and resort lounges. It is ready to order, with delivery all over India.',
      ],
    },
    specComparison: [
      ['Width', '22 in (56 cm)', '16 in (41 cm)'],
      ['Length', '17.5 in (44 cm)', '17 in (43 cm)'],
      ['Height', '21 in (53 cm)', '22 in (56 cm)'],
      ['Weight', '70 kg', '65 kg'],
      ['Material', 'Cast iron body, glass door', 'Cast iron body, glass door'],
      ['Fuel', 'Firewood', 'Firewood'],
      ['Finish', 'Black', 'Black'],
    ],
    videos: [
      {
        id: 'customer-review',
        label: 'Customer live review',
        src: '/videos/customer-review.mp4',
        poster: '/videos/posters/customer-review.webp',
      },
      {
        id: 'installation',
        label: 'Installation',
        src: '/videos/installation.mp4',
        poster: '/videos/posters/installation.webp',
      },
      {
        id: 'flame-closeup',
        label: 'The flame up close',
        src: '/videos/flame-closeup.mp4',
        poster: '/videos/posters/flame-closeup.webp',
      },
      {
        id: 'how-to-use',
        label: 'How to use it',
        src: '/videos/how-to-use.mp4',
        poster: '/videos/posters/how-to-use.webp',
      },
    ],
    reviewPrompt: {
      copy: 'Used this product? Share your experience on WhatsApp.',
      message: 'Hi, I would like to share my experience with the Fireview Tandoor.',
    },
    howItWorks: {
      label: 'HOW IT WORKS',
      heading: 'Simple by design.',
      steps: [
        ['Load the wood.', 'Open the glass door and add dry, split firewood.'],
        [
          'Control the air.',
          'The air vents and the slider on top let you control how hot and how fast it burns.',
        ],
        [
          'Smoke goes out, heat stays in.',
          'Smoke leaves through the chimney pipe, while the cast-iron body and glass radiate warmth into the room.',
        ],
      ],
    },
    howToUse: {
      label: 'HOW TO USE',
      heading: 'From first flame to last ember.',
      steps: [
        'Place the stove on a level, non-combustible base and keep curtains, sofas and other flammable items well away from it.',
        'Connect the chimney pipe and check that every joint is secure.',
        'Light kindling and small dry wood. Keep the slider open and the door closed until the flame is steady.',
        'Once it is burning well, reduce the air with the slider to hold a steady fire.',
        'Let the stove cool completely before emptying the ash pan.',
      ],
      safetyNote:
        'Never use petrol, kerosene or any liquid fuel. Never leave children unattended near the stove. Always keep the room ventilated.',
    },
    faqs: [
      [
        'Is the Fireview Tandoor ready to order?',
        'Yes. Both sizes are ready to order and we deliver all over India. Message us on WhatsApp with your size and pin code.',
      ],
      [
        'Which size should I choose?',
        'Size 1 is wider (22 in) and weighs 70 kg. Size 2 is narrower (16 in) and lighter at 65 kg, which suits tighter spaces. Measure your spot and check the dimensions above.',
      ],
      [
        'Is it really smokeless?',
        'It is designed for a clean, controlled burn, with smoke going out through the chimney and not into the room. For the best result use dry, seasoned wood and a properly fitted chimney.',
      ],
      ['What fuel does it use?', 'Firewood only. No gas or electricity is needed.'],
      [
        'Is it easy to install?',
        'Yes. It needs a level base and a chimney pipe to the outside.',
      ],
      [
        'Can I use it indoors?',
        'Yes, with a properly fitted chimney and a ventilated room.',
      ],
      [
        'How do I maintain it?',
        'Empty the ash pan regularly once the stove is cool, wipe the glass when it is cool, and check the chimney pipe from time to time.',
      ],
      ['Do you deliver outside Jalandhar?', 'Yes, we deliver all over India.'],
    ],
    reviews: [],
    seo: {
      title: 'Fireview Tandoor | Smokeless Glass-Front Wood Stove | ESFIRE INDIA',
      description:
        'Cast iron and glass smokeless wood stove in two sizes. Watch the flame, feel the heat. Ready to order with delivery all over India.',
    },
    mobileActions: true,
  },
  {
    slug: 'smokeless-bonfire-18',
    number: '02',
    eyebrow: 'OUTDOOR GATHERING',
    category: 'Bonfire',
    name: 'Smokeless Bonfire Pit',
    cardCopy: 'A cleaner-burning outdoor fire made for gathering closer.',
    description:
      "Enjoy the warmth of a real wood-burning fire without the smoke in your eyes or the campfire smell that follows you home. A portable double-wall fire pit built for backyard s'mores, evenings on the lawn and beachside nights.",
    image: '/assets/bonfire-08.webp',
    cardImage: '/assets/bonfire-04.webp',
    cardHoverImage: '/assets/bonfire-08.webp',
    collectionImage: '/assets/collection-bonfire.webp',
    alternateImage: '/assets/bonfire-07.webp',
    gallery: [
      {
        src: '/assets/bonfire-08.webp',
        alt: 'Smokeless Bonfire Pit studio product view with side handle',
      },
      {
        src: '/assets/bonfire-07.webp',
        alt: 'Smokeless Bonfire Pit loaded with split firewood',
      },
      {
        src: '/assets/bonfire-04.webp',
        alt: 'Smokeless Bonfire Pit lit beside beach seating at sunset',
      },
      {
        src: '/assets/bonfire-06.webp',
        alt: 'Close-up of the lower air-intake slots on the Smokeless Bonfire Pit',
      },
      {
        src: '/assets/bonfire-01.webp',
        alt: 'Smokeless Bonfire Pit airflow diagram showing its double-wall burn system',
      },
      {
        src: '/assets/bonfire-03.webp',
        alt: 'Smokeless Bonfire Pit burning in a mountain backyard at dusk',
      },
      {
        src: '/assets/bonfire-02.webp',
        alt: 'Smokeless Bonfire Pit lit at night on a city terrace',
      },
      {
        src: '/assets/bonfire-05.webp',
        alt: 'Smokeless Bonfire Pit used for roasting marshmallows outdoors',
      },
    ],
    material_line: 'Stainless steel',
    finish_line: '',
    weight: '',
    handle_count_line: '',
    price_line: '',
    warranty_line: '',
    delivery_time_line: '',
    trustLine: ['360 degree airflow', 'Almost zero smoke', 'Easy cleanup'],
    applications: ['Backyard', 'Outdoors', 'Hospitality'],
    highlights: [
      {
        icon: 'wind',
        title: '360 degree airflow',
        copy: 'Air is drawn in around the whole base and fed to the fire from all sides.',
      },
      {
        icon: 'flame',
        title: 'Almost zero smoke',
        copy: 'The double-wall airflow burns off most of the smoke once the fire is going.',
      },
      {
        icon: 'shield',
        title: 'Double-wall build',
        copy: 'Two steel sheets with an air channel between them.',
      },
      {
        icon: 'wrench',
        title: 'Easy cleanup',
        copy: 'Once cool, just empty the ash and wipe it down.',
      },
      {
        icon: 'truck',
        title: 'Portable',
        copy: '18 inches across, with side handles for carrying.',
      },
      {
        icon: 'shield',
        title: 'Durable steel build',
        copy: 'Made for outdoor use.',
      },
    ],
    about: {
      label: 'ABOUT',
      heading: 'Real fire. Almost no smoke.',
      paragraphs: [
        'The Smokeless Bonfire Pit brings the pull of a real wood fire to your backyard, lawn or terrace, without the smoke in your eyes. Its double-wall design draws air in through slots at the bottom of the outer wall, warms it as it rises between the two walls, and releases it through the holes at the top of the inner wall, back into the fire. The wood burns hotter and cleaner, and far less smoke escapes.',
        "At 18 inches across and 15 inches high, it is compact enough to carry with its side handles and set up wherever you like, whether that is backyard s'mores, an evening on the lawn or a night by the beach. It is made for outdoor gatherings at home, farmhouses, resorts and cafes.",
      ],
    },
    specs: [
      ['Type', 'Portable smokeless wood fire pit'],
      ['Outer diameter', '18 in (46 cm)'],
      ['Height', '15 in (38 cm)'],
      ['Construction', 'Double wall (outer and inner steel sheets)'],
      ['Material', 'Stainless steel'],
      ['Fuel', 'Firewood'],
      [
        'Airflow',
        '360 degree; air-intake slots along the bottom of the outer wall, air-release holes along the top of the inner wall',
      ],
      ['Handles', 'Side carry handles'],
    ],
    videos: [
      {
        id: 'bonfire-night-burn',
        label: 'Lit up at night',
        src: '/videos/bonfire/night-burn.mp4',
        poster: '/videos/bonfire/posters/night-burn.webp',
      },
      {
        id: 'bonfire-airflow',
        label: '360 degree airflow',
        src: '/videos/bonfire/airflow.mp4',
        poster: '/videos/bonfire/posters/airflow.webp',
      },
      {
        id: 'bonfire-smoke-test',
        label: 'The smoke test',
        src: '/videos/bonfire/smoke-test.mp4',
        poster: '/videos/bonfire/posters/smoke-test.webp',
      },
      {
        id: 'bonfire-workshop',
        label: 'Made in our workshop',
        src: '/videos/bonfire/workshop.mp4',
        poster: '/videos/bonfire/posters/workshop.webp',
      },
    ],
    howItWorks: {
      label: 'HOW IT WORKS',
      heading: 'Smoke, burned twice.',
      steps: [
        [
          'Air comes in.',
          'Slots along the bottom of the outer wall draw fresh air in from all around.',
        ],
        [
          'Air heats up.',
          'The air rises through the gap between the outer and inner walls and heats up on the way.',
        ],
        [
          'Smoke gets burned.',
          'Hot air rushes out of the holes at the top of the inner wall and back into the fire, burning off much of the smoke before it escapes.',
        ],
      ],
    },
    howToUse: {
      label: 'HOW TO USE',
      heading: 'From first spark to last ember.',
      steps: [
        'Place the pit on a flat, non-combustible surface such as stone, concrete or gravel. Keep it away from dry grass, wooden decks, tents and overhanging branches.',
        'Stack small, dry pieces of firewood loosely inside, keeping the pile below the row of holes near the top of the inner wall.',
        'Light kindling or a fire starter at the bottom. The airflow takes a few minutes to build, and the smoke drops once the fire is going.',
        'Add dry wood as needed and use gloves near the pit.',
        'When you are done, let the fire burn down on its own and let the pit cool completely before touching or moving it.',
        'Empty the cold ash and wipe the pit dry before storing it.',
      ],
      safetyNote:
        'Use outdoors only, in an open area. The outer wall gets very hot, so keep children, pets and furniture away and never leave the fire unattended. Use firewood only. Never use petrol, kerosene or any liquid fuel.',
    },
    faqs: [
      ['What is the size of the pit?', 'It is 18 in (46 cm) across and 15 in (38 cm) high.'],
      [
        'Is it really smokeless?',
        'Almost. The double-wall design feeds hot air back into the fire to burn off most of the smoke. You may still see some smoke while lighting, when the fire is small, or if the wood is damp. Dry, seasoned wood and a well-established fire give the cleanest burn.',
      ],
      [
        'How does the double wall work?',
        'Slots at the bottom of the outer wall draw air in. The air heats up as it rises between the two walls and comes out through the holes at the top of the inner wall, feeding the fire and burning off smoke.',
      ],
      ['What fuel does it use?', 'Dry firewood. Small split pieces burn best.'],
      [
        'Can I use it on a wooden deck or on grass?',
        'Place it on a non-combustible surface such as stone, concrete or gravel. The steel gets hot enough to scorch a wooden deck or dry grass.',
      ],
      [
        'Is it portable?',
        'Yes. It has side handles for carrying. Always let it cool completely before you move it.',
      ],
      [
        'How do I clean it?',
        'Let it cool completely, empty the ash and wipe the pit dry with a cloth.',
      ],
      [
        'Can I use it at a cafe, resort or party?',
        'Yes, it suits backyards, lawns, farmhouses and hospitality spaces. For bulk or hospitality orders, message us on WhatsApp.',
      ],
      [
        'How do I order, and do you deliver to my city?',
        'Message us on WhatsApp with your pin code and we will confirm price, availability and delivery for your city.',
      ],
    ],
    reviews: [],
    seo: {
      title: 'Smokeless Bonfire Pit | Portable Wood Fire Pit | ESFIRE INDIA',
      description:
        'Portable double-wall smokeless wood fire pit, 18 inch across, with 360 degree airflow, almost zero smoke and easy cleanup. Ideal for backyards, lawns and outdoor gatherings.',
    },
    mobileActions: true,
  },
  {
    slug: 'flatpack-rocket-stove',
    number: '03',
    eyebrow: 'PACKABLE SYSTEM',
    category: 'Rocket Stove',
    name: 'Flatpack Rocket Stove',
    cardCopy: 'A compact, considered fire solution that travels flat.',
    description:
      'A portable wood-burning rocket stove that dismantles flat and packs into a carry bag. Boil, cook and gather around real fire, wherever the road takes you.',
    image: '/assets/rocket-stove-02.webp',
    cardImage: '/assets/rocket-stove-05.webp',
    cardHoverImage: '/assets/rocket-stove-02.webp',
    collectionImage: '/assets/collection-rocket.webp',
    alternateImage: '/assets/rocket-stove-03.webp',
    gallery: [
      {
        src: '/assets/rocket-stove-02.webp',
        alt: 'Flatpack Rocket Stove assembled, side view',
      },
      {
        src: '/assets/rocket-stove-03.webp',
        alt: 'Flatpack Rocket Stove assembled beside its packed carry bag',
      },
      {
        src: '/assets/rocket-stove-04.webp',
        alt: 'Flatpack Rocket Stove stepped pot supports holding a cooking pot',
      },
      {
        src: '/assets/rocket-stove-05.webp',
        alt: 'Flatpack Rocket Stove boiling a kettle beside its carry bag outdoors',
      },
      {
        src: '/assets/rocket-stove-01.webp',
        alt: 'Flatpack Rocket Stove boiling a kettle at a campsite gathering',
      },
    ],
    price_line: '',
    warranty_line: '',
    delivery_time_line: '',
    assembled_size: '',
    packed_size: '',
    weight: '',
    material_thickness: '',
    max_pot_size_line: '',
    bag_included_line: 'Carry bag included',
    trustLine: ['Packs flat in a carry bag', 'No tools needed', 'Ready to order'],
    applications: ['Camping', 'Road trips', 'Outdoor cooking'],
    highlights: [
      {
        icon: 'truck',
        title: 'Packs flat',
        copy: 'Dismantles into flat parts in seconds.',
      },
      {
        icon: 'shield',
        title: 'Carry bag included',
        copy: 'Fits in the bag with a buckle strap, easy to carry anywhere.',
      },
      {
        icon: 'flame',
        title: 'Rocket stove burn',
        copy: 'A focused, hot flame from small pieces of wood, with a feed gate to add more.',
      },
      {
        icon: 'eye',
        title: 'Stepped pot supports',
        copy: 'Hold kettles and pots on top.',
      },
      {
        icon: 'wrench',
        title: 'No tools needed',
        copy: 'Panels slot together with tab-and-slot joints.',
      },
      {
        icon: 'shield',
        title: 'Built in black steel',
        copy: 'Sturdy, with a clean matte finish.',
      },
    ],
    about: {
      label: 'ABOUT',
      heading: 'Real fire, packed flat.',
      paragraphs: [
        'The Flatpack Rocket Stove is a compact wood-burning stove made for people who travel light. Its precision-cut black steel panels slot together without any tools and come apart just as easily, so the whole stove packs flat into the carry bag that comes with it and fits easily in a car boot, a backpack or a camping kit.',
        'Once it is set up, the angled feed chamber and the tall chimney channel air and flame upward for a focused, hot fire right under your pot or kettle, using only small pieces of wood. The feed gate opens to add wood and closes when you are done. It is made for road trips, camping, treks, picnics, farmhouses and outdoor gatherings.',
      ],
    },
    specs: [
      ['Type', 'Portable rocket stove (flat-pack)'],
      ['Material', 'Black steel'],
      ['Finish', 'Black'],
      ['Fuel', 'Small firewood, sticks and twigs'],
      ['Feed gate', 'Opens to add wood, closes when done'],
      ['Assembly', 'No tools needed'],
      ['Carry bag', 'Included'],
      ['Assembled size', ''],
      ['Packed size', ''],
      ['Weight', ''],
      ['Material thickness', ''],
      ['Pot support', 'Stepped supports on top'],
    ],
    videos: [
      {
        id: 'rocket-assemble',
        label: 'Ready in seconds',
        src: '/videos/rocket/assemble.mp4',
        poster: '/videos/rocket/posters/assemble.webp',
      },
      {
        id: 'rocket-pack',
        label: 'Packs into the bag',
        src: '/videos/rocket/pack.mp4',
        poster: '/videos/rocket/posters/pack.webp',
      },
      {
        id: 'rocket-daylight',
        label: 'Daylight cooking',
        src: '/videos/rocket/boil.mp4',
        poster: '/videos/rocket/posters/boil.webp',
      },
      {
        id: 'rocket-night',
        label: 'Night cooking',
        src: '/videos/rocket/flame.mp4',
        poster: '/videos/rocket/posters/flame.webp',
      },
    ],
    howItWorks: {
      label: 'HOW IT WORKS',
      heading: 'Small wood. Big flame.',
      steps: [
        [
          'Feed the fuel.',
          'Open the feed gate, place small dry sticks in the angled chamber, then close the gate.',
        ],
        [
          'Air rushes in.',
          'Air is drawn in from below, and the tall chimney pulls the flame upward.',
        ],
        [
          'Cook on top.',
          'The hot flame rises straight up to your pot or kettle, resting on the stepped supports.',
        ],
      ],
    },
    howToUse: {
      label: 'SET UP AND PACK AWAY',
      heading: 'Out of the bag, onto the fire.',
      steps: [
        'Take the panels out of the bag and slot them together, following the tabs and slots. No tools are needed.',
        'Fit the stepped pot supports on top.',
        'Place the stove on level, bare ground or a non-combustible surface, well away from dry grass, tents and vehicles.',
        'Open the feed gate, light kindling in the chamber, then add small dry sticks. Close the gate when you are done adding wood.',
        'Rest your kettle or pot on the supports and cook. To add more wood, open the feed gate carefully with a glove, since it will be hot, then close it again.',
        'When you are done, let the fire burn out and the stove cool down completely.',
        'Brush off the ash, slide the panels apart, stack them flat, and pack them into the bag.',
      ],
      safetyNote:
        'Use outdoors only, never inside a tent, vehicle or room. The metal gets very hot, so use gloves and keep children and pets away. Never leave a lit stove unattended. Never use petrol, kerosene or any liquid fuel.',
    },
    faqs: [
      [
        'Is the Flatpack Rocket Stove ready to order?',
        'Yes. Message us on WhatsApp with your pin code and we will share price and delivery details.',
      ],
      [
        'How does it pack away?',
        'The stove dismantles into flat panels that stack together and fit into the carry bag that comes with it, secured by a buckle strap. It is easy to carry in a car, a backpack or a camping kit.',
      ],
      [
        'Is it difficult to assemble?',
        'No. The panels slot together with tab-and-slot joints and no tools are needed. It comes apart the same way.',
      ],
      ['What fuel does it use?', 'Small pieces of dry firewood, such as sticks and twigs.'],
      [
        'What can I cook on it?',
        'Boil water for tea or coffee, cook in pots and heat food. Your cookware rests on the stepped pot supports on top.',
      ],
      [
        'How do I add more wood while it is burning?',
        'Open the feed gate on the angled chamber, add small dry sticks, then close the gate again. Use a glove, because the gate gets hot.',
      ],
      [
        'The inside of the stove turned white or grey after use. Is that normal?',
        'Yes. The white or grey layer is ash that settles on the inner plates during use. Let the stove cool completely and brush it off before packing.',
      ],
      [
        'Can I use it in a tent or indoors?',
        'No. It is for outdoor use only, in an open, well-ventilated area, away from tents, dry grass and vehicles.',
      ],
      [
        'How do I clean and store it?',
        'Let it cool completely, brush off the ash, wipe the panels dry, then stack them flat and store them in the bag.',
      ],
      ['Do you deliver outside Jalandhar?', 'Yes, we deliver all over India.'],
    ],
    reviews: [],
    seo: {
      title: 'Flatpack Rocket Stove | Portable Wood Stove for Camping | ESFIRE INDIA',
      description:
        'A portable black steel wood-burning rocket stove that dismantles flat and packs into the carry bag included. No tools needed. Built for road trips and camping. Delivery all over India.',
    },
    mobileActions: true,
  },
]);

export const whatsappNumber = '918360935461';

export function createWhatsAppUrl(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappBase = createWhatsAppUrl(
  "Hi ES Fire India, I'm interested in your fire products. Please share more details.",
);

export const applicationOptions = resolveMediaPaths([
  {
    label: 'Home',
    copy: 'A room with a pulse.',
    image: '/assets/fireview-04.png',
    slug: 'fireview-tandoor',
  },
  {
    label: 'Backyard',
    copy: 'The evening starts here.',
    image: '/assets/bonfire-03.webp',
    slug: 'smokeless-bonfire-18',
  },
  {
    label: 'Outdoors',
    copy: 'Take the warmth with you.',
    image: '/assets/bonfire-04.webp',
    slug: 'smokeless-bonfire-18',
  },
  {
    label: 'Cooking',
    copy: 'Heat becomes ritual.',
    image: '/assets/fireview-01.png',
    slug: 'fireview-tandoor',
  },
  {
    label: 'Camping',
    copy: 'Pack light. Burn bright.',
    image: '/assets/rocket-stove-05.webp',
    slug: 'flatpack-rocket-stove',
  },
  {
    label: 'Hospitality',
    copy: 'Give people a reason to stay.',
    image: '/assets/bonfire-02.webp',
    slug: 'smokeless-bonfire-18',
  },
]);

export const finderOptions = [
  {
    label: 'I want to cook',
    copy: 'Bring ritual and heat to the table.',
    slug: 'fireview-tandoor',
  },
  {
    label: 'I want to heat',
    copy: 'A considered flame for indoor spaces.',
    slug: 'fireview-tandoor',
  },
  {
    label: 'I want to gather',
    copy: 'Make the fire the meeting point.',
    slug: 'smokeless-bonfire-18',
  },
  {
    label: 'I want to travel',
    copy: 'Fire that moves with your plans.',
    slug: 'flatpack-rocket-stove',
  },
  {
    label: 'I want an outdoor fire',
    copy: 'Long evenings, open air, real flame.',
    slug: 'smokeless-bonfire-18',
  },
];
