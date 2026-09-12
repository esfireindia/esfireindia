import { ArrowLeft, Check } from 'lucide-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLink } from '../components/ui/ArrowLink';
import { createWhatsAppUrl, products } from '../data/products';
import { NotFoundPage } from './NotFoundPage';

export function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) return <NotFoundPage />;

  const images = [product.image, product.alternateImage];
  const whatsApp = createWhatsAppUrl(
    `Hi ES Fire India, I'm interested in ${product.name}. Please share more details.`,
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
    </>
  );
}
