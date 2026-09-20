import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProductCard({ product, compact = false }) {
  const cardImage = product.cardImage || product.image;

  return (
    <Link
      to={`/products/${product.slug}`}
      className={`product-card${compact ? ' product-card--compact' : ''}${product.cardHoverImage ? ' product-card--has-hover-image' : ''}`}
    >
      <div className="product-image-wrap">
        <img
          className="product-card-image product-card-image--primary"
          src={cardImage}
          alt={`${product.name} by ESFIRE INDIA`}
        />
        {product.cardHoverImage && (
          <img
            className="product-card-image product-card-image--hover"
            src={product.cardHoverImage}
            alt=""
            aria-hidden="true"
          />
        )}
        <span className="product-category">{product.category}</span>
        <span className="view-product">
          View product <ArrowUpRight size={15} />
        </span>
      </div>
      <div className="product-card-meta">
        <span>
          {product.number} / {product.eyebrow}
        </span>
        <h3>{product.name}</h3>
        <p>{product.cardCopy}</p>
      </div>
    </Link>
  );
}
