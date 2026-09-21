import {
  ArrowLeft,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  Flame,
  Phone,
  ShieldCheck,
  Star,
  Truck,
  Wind,
  Wrench,
} from 'lucide-react';
import { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductCard } from '../components/product/ProductCard';
import { VideoShowcase } from '../components/product/VideoShowcase';
import { ArrowLink } from '../components/ui/ArrowLink';
import { createWhatsAppUrl, products, whatsappNumber } from '../data/products';
import { track } from '../utils/analytics';
import { NotFoundPage } from './NotFoundPage';

const highlightIcons = {
  eye: Eye,
  flame: Flame,
  shield: ShieldCheck,
  truck: Truck,
  wind: Wind,
  wrench: Wrench,
};

const optionalLineKeys = [
  'installation_support_line',
  'chimney_pipe_line',
  'heating_area_line',
];

const aboutLineKeys = ['price_line', 'warranty_line', 'delivery_time_line', 'bag_included_line'];

const specConfigKeyByLabel = {
  'Assembled size': 'assembled_size',
  'Packed size': 'packed_size',
  Weight: 'weight',
  'Material thickness': 'material_thickness',
};

function getProductFaqs(product) {
  return [
    [
      `Is the ${product.name} ready to order?`,
      'Contact the ESFIRE team for current availability, lead time and delivery options.',
    ],
    [
      'Can the size or finish be customised?',
      'Share the intended location, use, size and finish preferences with the ESFIRE team for guidance.',
    ],
    [
      'What installation setup does it need?',
      'Installation requirements depend on the selected product and location. Ask the ESFIRE team before ordering.',
    ],
  ];
}

function hasRealValue(value) {
  if (!value) return false;
  const normalized = String(value).trim().toLowerCase();
  return !['to be confirmed', 'tbc', 'static frontend catalogue'].includes(normalized);
}

function HighlightsStrip({ highlights }) {
  if (!highlights?.length) return null;

  return (
    <section className="product-highlights" aria-label="Product highlights">
      <div className="shell product-highlights-grid">
        {highlights.map((highlight) => {
          const Icon = highlightIcons[highlight.icon] || Flame;
          return (
            <article key={highlight.title}>
              <Icon size={23} strokeWidth={1.5} aria-hidden="true" />
              <strong>{highlight.title}</strong>
              <p>{highlight.copy}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function AboutProduct({ about, details = [] }) {
  if (!about?.heading || !about?.paragraphs?.length) return null;

  return (
    <section className="shell product-about">
      <div>
        <span className="kicker">{about.label}</span>
        <h2>{about.heading}</h2>
      </div>
      <div className="product-about-copy">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {details.length > 0 && (
          <div className="product-about-details">
            {details.map((detail) => (
              <span key={detail}>{detail}</span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProductSpecifications({ product, selectedVariantId, onSelectVariant }) {
  const realSpecs = (product.specs || [])
    .map(([label, value]) => {
      const configuredValue = value || product[specConfigKeyByLabel[label]];
      const displayValue =
        label === 'Pot support' && product.max_pot_size_line
          ? `${configuredValue} ${product.max_pot_size_line}`
          : configuredValue;
      return [label, displayValue];
    })
    .filter(([, value]) => hasRealValue(value));
  if (!product.specComparison?.length && !realSpecs.length) return null;

  return (
    <section className="spec-section">
      <div className="shell spec-inner">
        <div>
          <span className="kicker">SPECIFICATIONS</span>
          <h2>Details are where the fire becomes a product.</h2>
        </div>
        {product.specComparison?.length ? (
          <div className="spec-comparison-wrap">
            <table className="spec-comparison">
              <thead>
                <tr>
                  <th scope="col">DETAIL</th>
                  {product.variants.map((variant) => (
                    <th
                      className={selectedVariantId === variant.id ? 'is-selected' : ''}
                      scope="col"
                      key={variant.id}
                    >
                      <button type="button" onClick={() => onSelectVariant(variant.id)}>
                        {variant.label}
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {product.specComparison.map(([label, ...values]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    {values.map((value, index) => (
                      <td
                        className={
                          selectedVariantId === product.variants[index]?.id ? 'is-selected' : ''
                        }
                        key={`${label}-${product.variants[index]?.id}`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="spec-grid">
            {realSpecs.map(([key, value]) => (
              <div key={key}>
                <span>{key}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProcessSection({ content, variant = 'light' }) {
  if (!content?.heading || !content?.steps?.length) return null;

  return (
    <section className={`product-process product-process--${variant}`}>
      <div className="shell product-process-heading">
        <span className="kicker">{content.label}</span>
        <h2>{content.heading}</h2>
      </div>
      <div className="shell product-process-grid">
        {content.steps.map((step, index) => {
          const [title, copy] = Array.isArray(step) ? step : [`Step ${index + 1}`, step];
          return (
            <article key={`${title}-${index}`}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          );
        })}
      </div>
      {content.safetyNote && (
        <div className="shell safety-note">
          <strong>SAFETY NOTE</strong>
          <p>{content.safetyNote}</p>
        </div>
      )}
    </section>
  );
}

function VerifiedReviews({ reviews }) {
  if (!reviews?.length) return null;

  const average = reviews.reduce((total, review) => total + review.rating, 0) / reviews.length;
  return (
    <section className="shell verified-reviews" id="reviews">
      <span className="kicker">VERIFIED REVIEWS</span>
      <h2>{average.toFixed(1)} out of 5</h2>
      <div className="verified-review-list">
        {reviews.map((review) => (
          <article key={review.id}>
            <div aria-label={`${review.rating} out of 5 stars`}>
              {Array.from({ length: review.rating }, (_, index) => (
                <Star size={16} fill="currentColor" key={index} />
              ))}
            </div>
            <p>{review.copy}</p>
            <strong>{review.name}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  if (!product) return <NotFoundPage />;

  return <ProductDetails product={product} key={product.slug} />;
}

function ProductDetails({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants?.[0]?.id ?? null);
  const touchStartX = useRef(null);
  const suppressGalleryClick = useRef(false);

  const images = (product.gallery?.length
    ? product.gallery
    : [product.image, product.alternateImage].filter(Boolean)
  ).map((item, index) =>
    typeof item === 'string'
      ? { src: item, alt: `${product.name} product view ${index + 1}` }
      : item,
  );
  const thumbnailStart = Math.min(
    Math.max(selectedImage - 1, 0),
    Math.max(images.length - 3, 0),
  );
  const visibleThumbnails = images.slice(thumbnailStart, thumbnailStart + 3);
  const selectedVariant = product.variants?.find((variant) => variant.id === selectedVariantId);
  const selectedVariantIndex = product.variants?.findIndex(
    (variant) => variant.id === selectedVariantId,
  );
  const productIndex = products.findIndex((item) => item.slug === product.slug);
  const relatedProducts = [...products.slice(productIndex + 1), ...products.slice(0, productIndex)]
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);
  const faqs = product.faqs?.length ? product.faqs : getProductFaqs(product);
  const optionalLines = optionalLineKeys.map((key) => product[key]).filter(Boolean);
  const aboutLines = aboutLineKeys.map((key) => product[key]).filter(Boolean);
  const sizeNumber = selectedVariant?.size || '';
  const sizeMessage = selectedVariant
    ? `, Size ${sizeNumber} (W ${selectedVariant.width.replace(' in', '')} x L ${selectedVariant.length.replace(' in', '')} x H ${selectedVariant.height.replace(' in', '')} in, ${selectedVariant.weight})`
    : '';
  const whatsApp = createWhatsAppUrl(
    `Hi, I want to order the ${product.name}${sizeMessage}. Please share price and delivery details.`,
  );
  const sizeHelpWhatsApp = createWhatsAppUrl(
    `Hi, I need help choosing the right size of the ${product.name}.`,
  );
  const quoteUrl = selectedVariant
    ? `/contact?product=${encodeURIComponent(product.slug)}&size=${encodeURIComponent(sizeNumber)}`
    : `/contact?product=${encodeURIComponent(product.slug)}`;

  const selectVariant = (variantId) => {
    const variant = product.variants?.find((item) => item.id === variantId);
    setSelectedVariantId(variantId);
    if (variant) track('size_selected', { size: variant.size });
  };

  const handleVariantKeyDown = (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 1;
    const nextIndex =
      (selectedVariantIndex + direction + product.variants.length) % product.variants.length;
    const nextVariant = product.variants[nextIndex];
    selectVariant(nextVariant.id);
    window.requestAnimationFrame(() => {
      document.getElementById(`${product.slug}-${nextVariant.id}`)?.focus();
    });
  };

  const showPreviousImage = () => {
    setSelectedImage((current) => (current - 1 + images.length) % images.length);
  };
  const showNextImage = () => {
    setSelectedImage((current) => (current + 1) % images.length);
  };
  const handleGalleryKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showPreviousImage();
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showNextImage();
    }
  };
  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    suppressGalleryClick.current = false;
  };
  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = touchEndX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) < 45) return;
    suppressGalleryClick.current = true;
    if (distance < 0) showNextImage();
    else showPreviousImage();
  };
  const handleGalleryClick = () => {
    if (suppressGalleryClick.current) {
      suppressGalleryClick.current = false;
      return;
    }
    showNextImage();
  };
  const handleFaqToggle = (index, question) => {
    const isOpen = openFaq === index;
    setOpenFaq(isOpen ? -1 : index);
    if (!isOpen) track('faq_open', { question });
  };

  return (
    <div className="product-page">
      <section className="shell product-detail">
        <Link className="back-link" to="/products">
          <ArrowLeft size={15} /> BACK TO COLLECTION
        </Link>
        <div className="product-gallery">
          <div className="gallery-main">
            <img
              key={images[selectedImage].src}
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              draggable="false"
            />
            {images.length > 1 && (
              <button
                type="button"
                className="gallery-swipe-surface"
                onClick={handleGalleryClick}
                onKeyDown={handleGalleryKeyDown}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                aria-label={`${product.name} image ${selectedImage + 1} of ${images.length}. Click or swipe for the next image; use the arrow keys to browse.`}
              />
            )}
            {images.length > 1 && (
              <div className="gallery-arrows">
                <button
                  type="button"
                  onClick={showPreviousImage}
                  aria-label={`Show previous ${product.name} image`}
                >
                  <ChevronLeft size={22} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={showNextImage}
                  aria-label={`Show next ${product.name} image`}
                >
                  <ChevronRight size={22} aria-hidden="true" />
                </button>
              </div>
            )}
            <span>
              {String(selectedImage + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
          </div>
          <div
            className="gallery-thumbs"
            style={{ '--thumb-count': Math.min(visibleThumbnails.length, 3) }}
          >
            {visibleThumbnails.map((image, offset) => {
              const index = thumbnailStart + offset;
              return (
                <button
                  type="button"
                  className={selectedImage === index ? 'active' : ''}
                  onClick={() => setSelectedImage(index)}
                  key={image.src}
                  aria-label={`Show ${product.name} image ${index + 1}`}
                  aria-current={selectedImage === index ? 'true' : undefined}
                >
                  <img src={image.src} alt="" loading="lazy" draggable="false" />
                </button>
              );
            })}
          </div>
        </div>

        <div className="product-summary">
          <span className="kicker">
            {product.number} / {product.eyebrow} &nbsp;/&nbsp; {product.category.toUpperCase()}
          </span>
          <h1>{product.name}</h1>
          {product.reviews?.length > 0 && (
            <a className="product-rating-link" href="#reviews">
              <span aria-hidden="true">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} size={15} />
                ))}
              </span>
              {product.reviews.length} VERIFIED REVIEWS
            </a>
          )}
          <p>{product.description}</p>
          {optionalLines.length > 0 && (
            <div className="optional-product-lines">
              {optionalLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
          )}

          {product.variants?.length > 0 && (
            <fieldset className="variant-selector">
              <legend>
                <span className="kicker">AVAILABLE SIZES</span>
                <strong>Choose your size</strong>
              </legend>
              <div
                className="variant-options"
                role="radiogroup"
                aria-label={`Choose a ${product.name} size`}
                tabIndex={-1}
                onKeyDown={handleVariantKeyDown}
              >
                {product.variants.map((variant) => {
                  const isSelected = variant.id === selectedVariantId;
                  return (
                    <label
                      className={`variant-option${isSelected ? ' is-selected' : ''}`}
                      key={variant.id}
                    >
                      <input
                        id={`${product.slug}-${variant.id}`}
                        type="radio"
                        name={`${product.slug}-size`}
                        value={variant.id}
                        checked={isSelected}
                        aria-checked={isSelected}
                        onChange={() => selectVariant(variant.id)}
                      />
                      <span className="variant-option-heading">
                        <span>{variant.label}</span>
                        <span className="variant-check" aria-hidden="true">
                          <Check size={13} />
                        </span>
                      </span>
                      <strong>
                        {variant.width} W × {variant.length} L × {variant.height} H
                      </strong>
                      <small>WEIGHT / {variant.weight}</small>
                    </label>
                  );
                })}
              </div>
              <p className="variant-selection-note" aria-live="polite">
                SELECTED / {selectedVariant?.label.toUpperCase()} — {selectedVariant?.weight}
              </p>
              <a
                className="size-help-link"
                href={sizeHelpWhatsApp}
                target="_blank"
                rel="noreferrer"
              >
                Not sure which size? Ask on WhatsApp
              </a>
            </fieldset>
          )}

          <div className="button-row">
            <ArrowLink
              to={whatsApp}
              external
              onClick={() => track('whatsapp_click', { size: sizeNumber, location: 'hero' })}
            >
              ENQUIRE ON WHATSAPP
            </ArrowLink>
            <ArrowLink
              to={quoteUrl}
              outline
              onClick={() => track('quote_click', { size: sizeNumber })}
            >
              GET A QUOTE
            </ArrowLink>
          </div>
          {product.trustLine?.length > 0 && (
            <p className="product-trust-line">{product.trustLine.join(' | ')}</p>
          )}
          {product.applications?.length > 0 && (
            <div className="application-list">
              <span className="kicker">APPLICATIONS</span>
              <div>
                {product.applications.map((application) => (
                  <span key={application}>
                    <Check size={15} /> {application}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <HighlightsStrip highlights={product.highlights} />
      <AboutProduct about={product.about} details={aboutLines} />
      <ProductSpecifications
        product={product}
        selectedVariantId={selectedVariantId}
        onSelectVariant={selectVariant}
      />
      {product.videos?.length > 0 && (
        <VideoShowcase videos={product.videos} reviewPrompt={product.reviewPrompt} />
      )}
      <VerifiedReviews reviews={product.reviews} />
      <ProcessSection content={product.howItWorks} />
      <ProcessSection content={product.howToUse} variant="dark" />

      {faqs.length > 0 && (
        <section className="faq-section">
          <div className="shell faq-layout">
            <div className="faq-heading">
              <span className="kicker">COMMON QUESTIONS</span>
              <h2>
                Before the
                <br />
                <em>first flame.</em>
              </h2>
              <p>Need a detail that is not covered here? Send the product name with your question.</p>
              <ArrowLink to={whatsApp} external outline>
                ASK ON WHATSAPP
              </ArrowLink>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer], index) => {
                const isOpen = openFaq === index;
                const answerId = `${product.slug}-faq-${index}`;
                const installationCopy =
                  index === 4 && product.installation_support_line
                    ? `${answer} ${product.installation_support_line}`
                    : answer;
                const answerCopy =
                  index === 0
                    ? [installationCopy, product.delivery_time_line, product.warranty_line]
                        .filter(Boolean)
                        .join(' ')
                    : installationCopy;
                return (
                  <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={question}>
                    <button
                      type="button"
                      onClick={() => handleFaqToggle(index, question)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                    >
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <strong>{question}</strong>
                      <ChevronDown size={20} aria-hidden="true" />
                    </button>
                    <div className="faq-answer" id={answerId} hidden={!isOpen}>
                      <div>
                        <p>{answerCopy}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="shell related-section">
        <div className="related-heading">
          <div>
            <span className="kicker">RELATED PRODUCTS</span>
            <h2>
              Keep exploring
              <br />
              <em>the collection.</em>
            </h2>
          </div>
          <ArrowLink to="/products" outline>
            VIEW ALL PRODUCTS
          </ArrowLink>
        </div>
        <div className="related-grid">
          {relatedProducts.map((item) => (
            <ProductCard product={item} compact key={item.slug} />
          ))}
        </div>
      </section>

      {product.mobileActions && (
        <nav className="mobile-action-bar" aria-label={`${product.name} actions`}>
          <a
            href={whatsApp}
            target="_blank"
            rel="noreferrer"
            onClick={() => track('whatsapp_click', { size: sizeNumber, location: 'sticky' })}
          >
            WHATSAPP
          </a>
          {whatsappNumber && (
            <a href={`tel:+${whatsappNumber}`}>
              <Phone size={16} aria-hidden="true" /> CALL
            </a>
          )}
        </nav>
      )}
    </div>
  );
}
