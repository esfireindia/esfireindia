import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeo, getStructuredData } from '../seo';

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    const [name, key] = selector.includes('property=') ? ['property', selector.match(/property="([^"]+)/)?.[1]] : ['name', selector.match(/name="([^"]+)/)?.[1]];
    element.setAttribute(name, key);
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

export function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeo(pathname);
    document.title = seo.title;
    setMeta('meta[name="description"]', 'content', seo.description);
    setMeta('meta[property="og:title"]', 'content', seo.title);
    setMeta('meta[property="og:description"]', 'content', seo.description);
    setMeta('meta[property="og:url"]', 'content', seo.url);
    setMeta('meta[property="og:image"]', 'content', seo.image || '');
    setMeta('meta[name="twitter:title"]', 'content', seo.title);
    setMeta('meta[name="twitter:description"]', 'content', seo.description);
    setMeta('meta[name="twitter:image"]', 'content', seo.image || '');
    setMeta('meta[name="robots"]', 'content', seo.noindex ? 'noindex,follow' : 'index,follow');

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = seo.url;

    let schema = document.head.querySelector('#page-structured-data');
    if (!schema) {
      schema = document.createElement('script');
      schema.id = 'page-structured-data';
      schema.type = 'application/ld+json';
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify(getStructuredData(pathname));
  }, [pathname]);

  return null;
}
