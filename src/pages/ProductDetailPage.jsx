import { ArrowLeft, Check, ChevronDown, MessageCircle, ShieldCheck, Star } from 'lucide-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductCard } from '../components/product/ProductCard';
import { ArrowLink } from '../components/ui/ArrowLink';
import { createWhatsAppUrl, products } from '../data/products';
import { NotFoundPage } from './NotFoundPage';

function getProductFaqs(product) {
  return [
    [
      `Is the ${product.name} ready to order?`,
      'This product is part of the current ESFIRE catalogue. Contact us to confirm the available configuration, lead time and delivery options for your location before placing an order.',
    ],
    [
      'Can the size or finish be customised?',
      'Tell us where and how you plan to use it, along with any size, finish or installation preferences. We will review the requirement and confirm what can be built for your project.',
    ],
    [
      'What fuel and installation setup does it need?',
      'The final fuel configuration, clearances, ventilation and installation requirements depend on the confirmed model. These details will be shared with your quotation before purchase.',
    ],
    [
      'Do you deliver outside Jalandhar?',
      'Share your city and postcode on WhatsApp. The ESFIRE team will confirm delivery availability, estimated timing and any transport charges with your quotation.',
    ],
    [
      'How should the product be maintained?',
      'Care depends on the selected material and finish. Use only the cleaning and maintenance guidance supplied with the confirmed product, and allow the unit to cool fully before handling.',
    ],
  ];
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
  const [rating, setRating] = useState(0);

  const images = [product.image, product.alternateImage];
  const productIndex = products.findIndex((item) => item.slug === product.slug);
  const relatedProducts = [...products.slice(productIndex + 1), ...products.slice(0, productIndex)]
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);
  const faqs = getProductFaqs(product);
  const whatsApp = createWhatsAppUrl(
    `Hi ES Fire India, I'm interested in ${product.name}. Please share more details.`,
  );
  const reviewWhatsApp = createWhatsAppUrl(
    `Hi ES Fire India, I'd like to share a ${rating}-star review for ${product.name}.`,
  );

  return (
    <>
      <section className="shell product-detail">
        <Link className="back-link" to="/products">
          <ArrowLeft size={15} /> BACK TO COLLECTION
        </Link>
        <div className="product-gallery">
          <div className="gallery-main">
            <img src={images[selectedImage]} alt={`${product.name} product view`} />
            <span>0{selectedImage + 1} / 02</span>
          </div>
          <div className="gallery-thumbs">
            {images.map((image, index) => (
              <button
                type="button"
                className={selectedImage === index ? 'active' : ''}
                onClick={() => setSelectedImage(index)}
                key={image}
              >
                <img src={image} alt={`${product.name} thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>
        <div className="product-summary">
          <span className="kicker">
            {product.number} / {product.eyebrow} &nbsp;/&nbsp; {product.category.toUpperCase()}
          </span>
          <h1>{product.name}</h1>
          <a className="product-rating-link" href="#reviews">
            <span aria-hidden="true">
              {[1, 2, 3, 4, 5].map((value) => (
                <Star key={value} size={15} />
              ))}
            </span>
            BE THE FIRST TO REVIEW
          </a>
          <p>{product.description}</p>
          <div className="button-row">
            <ArrowLink to={whatsApp} external>
              ENQUIRE ON WHATSAPP
            </ArrowLink>
            <ArrowLink to="/contact" outline>
              GET A QUOTE
            </ArrowLink>
          </div>
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
        </div>
      </section>
      <section className="spec-section">
        <div className="shell spec-inner">
          <div>
            <span className="kicker">SPECIFICATIONS / STATIC CATALOGUE</span>
            <h2>Details are where the fire becomes a product.</h2>
            <p>
              Confirmed dimensions, finishes and fuel configurations will be added as the product
              catalogue is finalised.
            </p>
          </div>
          <div className="spec-grid">
            {product.specs.map(([key, value]) => (
              <div key={key}>
                <span>{key}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="shell fine-print">
          STATIC FRONTEND CATALOGUE / &nbsp; INFORMATION SUBJECT TO CONFIRMATION
        </div>
      </section>

      <section className="shell review-section" id="reviews">
        <div className="review-heading">
          <span className="section-index">03</span>
          <div>
            <span className="kicker">RATINGS &amp; REVIEWS</span>
            <h2>
              Experience the product.
              <br />
              <em>Then tell it honestly.</em>
            </h2>
          </div>
          <p>
            Reviews are published only after the customer and product experience are confirmed.
            No paid or unverified ratings are displayed.
          </p>
        </div>

        <div className="review-grid">
          <div className="review-score-card">
            <span className="kicker">VERIFIED RATING</span>
            <div className="review-score">
              <strong>—</strong>
              <span>/ 5</span>
            </div>
            <div className="review-score-stars" aria-label="No verified rating yet">
              {[1, 2, 3, 4, 5].map((value) => (
                <Star key={value} size={23} />
              ))}
            </div>
            <p>No verified reviews yet.</p>
          </div>

          <div className="review-invite">
            <MessageCircle size={28} />
            <span className="kicker">USED THIS PRODUCT?</span>
            <h3>Share your ESFIRE experience.</h3>
            <p>
              Choose a rating and send your feedback directly to our team. Your selection is not
              submitted until you continue on WhatsApp.
            </p>
            <fieldset className="rating-picker" aria-label={`Rate ${product.name}`}>
              <legend>Choose a star rating</legend>
              {[1, 2, 3, 4, 5].map((value) => (
                <label
                  className={value <= rating ? 'is-active' : ''}
                  key={value}
                >
                  <input
                    type="radio"
                    name={`${product.slug}-rating`}
                    value={value}
                    checked={rating === value}
                    onChange={() => setRating(value)}
                    aria-label={`${value} star${value === 1 ? '' : 's'}`}
                  />
                  <Star size={30} />
                </label>
              ))}
            </fieldset>
            <div className="review-action">
              <span>{rating ? `${rating} / 5 SELECTED` : 'SELECT A STAR RATING'}</span>
              {rating > 0 && (
                <ArrowLink to={reviewWhatsApp} external>
                  SEND REVIEW
                </ArrowLink>
              )}
            </div>
            <div className="review-trust-note">
              <ShieldCheck size={17} /> Feedback is checked before it is published.
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="shell faq-layout">
          <div className="faq-heading">
            <span className="section-index">04</span>
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

              return (
                <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >
                    <span>0{index + 1}</span>
                    <strong>{question}</strong>
                    <ChevronDown size={20} />
                  </button>
                  <div className="faq-answer" id={answerId} hidden={!isOpen}>
                    <div>
                      <p>{answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="shell related-section">
        <div className="related-heading">
          <div>
            <span className="kicker">05 / RELATED PRODUCTS</span>
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
    </>
  );
}
