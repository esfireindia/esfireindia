import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProductCard({ product, compact = false }) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className={`product-card${compact ? ' product-card--compact' : ''}`}
    >
      <div className="product-image-wrap">
        <img src={product.image} alt={`${product.name} by ESFIRE INDIA`} />
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
