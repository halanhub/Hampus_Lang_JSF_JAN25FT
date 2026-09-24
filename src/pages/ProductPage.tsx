import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/api";
import type { Product } from "../types/product";
import "./ProductPage.css";
import { useCart } from "../context/CartContext";

export function ProductPage() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProduct() {
      if (!id) {
        setError("Product not found.");
        setLoading(false);
        return;
      }

      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        setError("Something went wrong while loading the product.");
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) {
    return <p>Loading product...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  const hasDiscount = product.discountedPrice < product.price;

  return (
   <main className="product-page">
  <div className="product-details">
    <img
      src={product.image.url}
      alt={product.image.alt || product.title}
      className="product-details-image"
    />

    <div className="product-details-info">
      <h1>{product.title}</h1>

      <p className="product-details-rating">
        Rating: {product.rating} / 5
      </p>

      <p className="product-description">
        {product.description}
      </p>

      <div className="product-details-price">
        {hasDiscount ? (
          <>
            <span className="product-details-old-price">
              {product.price.toFixed(2)} NOK
            </span>

            <span className="product-details-current-price">
              {product.discountedPrice.toFixed(2)} NOK
            </span>
          </>
        ) : (
          <span className="product-details-current-price">
            {product.price.toFixed(2)} NOK
          </span>
        )}
      </div>

      {product.tags.length > 0 && (
        <div className="product-tags">
          {product.tags.map((tag) => (
            <span className="product-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      <button className="add-to-cart-button" className="add-to-cart-button"
  onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  </div>

  <section className="product-reviews">
    <h2>Reviews</h2>

    {product.reviews.length > 0 ? (
      product.reviews.map((review) => (
        <div className="review" key={review.id}>
          <h3>{review.username}</h3>
          <p>Rating: {review.rating} / 5</p>
          <p>{review.description}</p>
        </div>
      ))
    ) : (
      <p>No reviews yet.</p>
    )}
  </section>
</main>
  );
}