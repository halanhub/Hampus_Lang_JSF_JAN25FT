import { Link } from "react-router-dom";
import type { Product } from "../../types/product";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.discountedPrice < product.price;

  const discountPercentage = Math.round(
    ((product.price - product.discountedPrice) / product.price) * 100
  );

 return (
  <Link to={`/product/${product.id}`} className="product-card-link">
    <div className="product-card">
      <div className="product-image-container">
        {hasDiscount && (
          <span className="discount-badge">
            -{discountPercentage}%
          </span>
        )}

        <img
          src={product.image.url}
          alt={product.image.alt || product.title}
          className="product-image"
        />
      </div>

      <div className="product-info">
        <h2>{product.title}</h2>

        <p className="rating">
          Rating: {product.rating} / 5
        </p>

        <div className="price-container">
          {hasDiscount ? (
            <>
              <span className="old-price">
                {product.price.toFixed(2)} NOK
              </span>

              <span className="discounted-price">
                {product.discountedPrice.toFixed(2)} NOK
              </span>
            </>
          ) : (
            <span className="price">
              {product.price.toFixed(2)} NOK
            </span>
          )}
        </div>
      </div>
    </div>
  </Link>
);
}
export default ProductCard;