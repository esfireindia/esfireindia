import { products } from './data/products';

export const siteOrigin = 'https://www.esfireindia.com';
export const brandName = 'Esfire India';

const pages = {
  '/': {
    title: 'Fire Stove & Fire Pit Manufacturer in Jalandhar | Esfire India',
    description: 'Explore fire stoves, smokeless bonfire pits and portable rocket stoves from Esfire India, a fire-product manufacturer in Jalandhar, Punjab. Enquire across India.',
    image: products[0].collectionImage,
  },
  '/products': {
    title: 'Fire Stoves, Bonfire Pits & Rocket Stoves | Esfire India',
    description: 'Explore the Esfire India collection: Fireview Tandoor, Smokeless Bonfire Pit and Flatpack Rocket Stove. Fire products from Jalandhar, Punjab, with enquiries across India.',
    image: products[0].cardImage,
  },
  '/craft': {
    title: 'Our Craft & Fire Product Engineering | Esfire India',
    description: 'See how Esfire India approaches airflow, combustion and fabrication across its fire stove, bonfire pit and rocket stove products.',
    image: products[1].collectionImage,
  },
  '/applications': {
    title: 'Fire Products for Homes & Outdoors | Esfire India',
    description: 'Find an Esfire India fire product for indoor warmth, outdoor gathering, camping or cooking. Explore applications and enquire from Jalandhar, Punjab.',
    image: products[1].collectionImage,
  },
  '/about': {
    title: 'About Esfire India | Fire Product Manufacturer in Jalandhar',
    description: 'Meet Esfire India, a fire-product manufacturer in Jalandhar, Punjab focused on thoughtful design and fabrication for cooking, warmth and outdoor gathering.',
    image: products[0].collectionImage,
  },
  '/contact': {
    title: 'Contact Esfire India | Product Enquiries in Jalandhar',
    description: 'Contact Esfire India in Jalandhar, Punjab about a fire stove, smokeless bonfire pit or rocket stove. Ask for product details, availability and delivery.',
    image: products[0].cardImage,
  },
  '/terms-and-conditions': {
    title: 'Terms & Conditions | Esfire India',
    description: 'Read the terms and conditions for browsing the Esfire India website and enquiring about fire products.',
    image: products[0].cardImage,
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Esfire India',
    description: 'Read how Esfire India handles website enquiries and personal information shared through the site.',
    image: products[0].cardImage,
  },
};

for (const product of products) {
  pages[`/products/${product.slug}`] = {
    title: product.seo.title,
    description: product.seo.description,
    image: product.gallery[0].src,
    product,
  };
}

export const seoPaths = Object.keys(pages);

export function getSeo(pathname) {
  const path = pathname.replace(/\/$/, '') || '/';
  const page = pages[path];
  if (!page) return { title: 'Page not found | Esfire India', description: 'This page could not be found.', noindex: true, url: `${siteOrigin}${path}` };
  return { ...page, url: `${siteOrigin}${path === '/' ? '/' : path}` };
}

export function getStructuredData(pathname) {
  const seo = getSeo(pathname);
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteOrigin}/#organization`,
    name: brandName,
    url: `${siteOrigin}/`,
    logo: `${siteOrigin}/favicon.svg`,
    email: 'contact@esfire.in',
    telephone: '+91-8360935461',
    address: { '@type': 'PostalAddress', addressLocality: 'Jalandhar', addressRegion: 'Punjab', addressCountry: 'IN' },
    sameAs: ['https://www.instagram.com/esfireindia'],
  };
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteOrigin}/#website`,
    name: brandName,
    url: `${siteOrigin}/`,
    publisher: { '@id': organization['@id'] },
  };
  if (!seo.product) return [organization, website];
  const product = seo.product;
  return [organization, website, {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${seo.url}#product`,
    name: product.name,
    description: seo.description,
    image: product.gallery.map(({ src }) => src),
    brand: { '@type': 'Brand', name: brandName },
    manufacturer: { '@id': organization['@id'] },
    category: product.category,
    url: seo.url,
  }, {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteOrigin}/` },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${siteOrigin}/products` },
      { '@type': 'ListItem', position: 3, name: product.name, item: seo.url },
    ],
  }];
}
