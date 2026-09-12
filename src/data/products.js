export const products = [
  {
    slug: 'fireview-tandoor',
    number: '01',
    eyebrow: 'GLASS-FRONT',
    category: 'Fire Stove',
    name: 'Fireview Tandoor',
    cardCopy: 'A view into the fire, designed for cooking and warmth.',
    description:
      'A glass-front fire experience that makes the flame part of the room. Fireview brings a considered silhouette, direct heat and a clear connection to the cooking fire.',
    image: '/assets/fireview.avif',
    alternateImage: '/assets/compact-fire.avif',
    applications: ['Indoor living', 'Cooking', 'Hospitality'],
    specs: [
      ['Material', 'Blackened steel / glass'],
      ['Fuel', 'To be confirmed'],
      ['Finish', 'To be confirmed'],
      ['Dimensions', 'To be confirmed'],
    ],
  },
  {
    slug: 'classic-home-tandoor',
    number: '02',
    eyebrow: 'CLASSIC FORM',
    category: 'Tandoor',
    name: 'Classic Home Tandoor',
    cardCopy: 'A familiar cooking ritual, resolved in a modern steel body.',
    description:
      'A purpose-built indoor tandoor for cooking and heating. Classic Home Tandoor keeps the language simple: a solid presence, a direct relationship with heat, and a form made to live with.',
    image: '/assets/classic-tandoor.avif',
    alternateImage: '/assets/compact-fire.avif',
    applications: ['Indoor living', 'Cooking', 'Restaurants'],
    specs: [
      ['Material', 'Steel body'],
      ['Fuel', 'To be confirmed'],
      ['Finish', 'To be confirmed'],
      ['Dimensions', 'To be confirmed'],
    ],
  },
  {
    slug: 'smokeless-bonfire-18',
    number: '03',
    eyebrow: 'OUTDOOR GATHERING',
    category: 'Bonfire',
    name: 'Smokeless 18 Inch Bonfire Pit',
    cardCopy: 'Gather closer to the fire, with less smoke in the moment.',
    description:
      'Cozy up with friends and family around a fire pit made for chilly nights and outdoor gatherings. A focused outdoor object for long evenings, shared plates and the pull of a real flame.',
    image: '/assets/bonfire.avif',
    alternateImage: '/assets/bonfire-alt.avif',
    applications: ['Backyard', 'Outdoors', 'Hospitality'],
    specs: [
      ['Diameter', '18 inch'],
      ['Material', 'To be confirmed'],
      ['Finish', 'To be confirmed'],
      ['Fuel', 'To be confirmed'],
    ],
  },
  {
    slug: 'flatpack-rocket-stove',
    number: '04',
    eyebrow: 'PACKABLE SYSTEM',
    category: 'Rocket Stove',
    name: 'Flatpack Rocket Stove',
    cardCopy: 'A compact, considered fire solution that travels flat.',
    description:
      'A space-saving flat-pack fire and stove solution for people who want a capable flame without the footprint. Built to assemble simply and move when the next fire is somewhere else.',
    image: '/assets/rocket-stove.avif',
    alternateImage: '/assets/bonfire-alt.avif',
    applications: ['Camping', 'Travel', 'Outdoors'],
    specs: [
      ['Format', 'Flat-pack'],
      ['Material', 'To be confirmed'],
      ['Finish', 'To be confirmed'],
      ['Dimensions', 'To be confirmed'],
    ],
  },
  {
    slug: 'new-model-10x13-glass',
    number: '05',
    eyebrow: 'COMPACT FIRE',
    category: 'Fire Stove',
    name: 'New Model 10×13 Glass',
    cardCopy: 'A smaller glass-front format for rooms that still want a fire.',
    description:
      'A compact glass-front fire stove concept for close quarters. The proportions are deliberately quiet, keeping the focus on the flame and the object’s honest material character.',
    image: '/assets/compact-fire.avif',
    alternateImage: '/assets/fireview.avif',
    applications: ['Indoor living', 'Cooking', 'Apartments'],
    specs: [
      ['Format', '10 × 13 inch glass'],
      ['Material', 'To be confirmed'],
      ['Finish', 'To be confirmed'],
      ['Fuel', 'To be confirmed'],
    ],
  },
];

export const whatsappBase =
  "https://wa.me/919876543210?text=Hi%20ES%20Fire%20India%2C%20I'm%20interested%20in%20your%20fire%20products.%20Please%20share%20more%20details.";

export const applicationOptions = [
  {
    label: 'Home',
    copy: 'A room with a pulse.',
    image: '/assets/fireview.avif',
    slug: 'fireview-tandoor',
  },
  {
    label: 'Backyard',
    copy: 'The evening starts here.',
    image: '/assets/bonfire.avif',
    slug: 'smokeless-bonfire-18',
  },
  {
    label: 'Outdoors',
    copy: 'Take the warmth with you.',
    image: '/assets/bonfire-alt.avif',
    slug: 'smokeless-bonfire-18',
  },
  {
    label: 'Cooking',
    copy: 'Heat becomes ritual.',
    image: '/assets/classic-tandoor.avif',
    slug: 'classic-home-tandoor',
  },
  {
    label: 'Camping',
    copy: 'Pack light. Burn bright.',
    image: '/assets/rocket-stove.avif',
    slug: 'flatpack-rocket-stove',
  },
  {
    label: 'Hospitality',
    copy: 'Give people a reason to stay.',
    image: '/assets/compact-fire.avif',
    slug: 'new-model-10x13-glass',
  },
];

export const finderOptions = [
  {
    label: 'I want to cook',
    copy: 'Bring ritual and heat to the table.',
    slug: 'classic-home-tandoor',
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
