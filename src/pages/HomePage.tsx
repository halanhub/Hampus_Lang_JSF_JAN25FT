import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import type { Product } from "../types/product";
import ProductCard from "../components/ProductCard/ProductCard";
import SearchBar from "../components/SearchBar/SearchBar";
import "./HomePage.css";

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortOption, setSortOption] = useState("");
  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError("Something went wrong while loading products.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);
    const sortedProducts = [...products];

  if (sortOption === "price-low") {
    sortedProducts.sort(
      (a, b) => a.discountedPrice - b.discountedPrice
    );
  }

  if (sortOption === "price-high") {
    sortedProducts.sort(
      (a, b) => b.discountedPrice - a.discountedPrice
    );
  }

  if (sortOption === "rating") {
    sortedProducts.sort(
      (a, b) => b.rating - a.rating
    );
  }

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="home-page">
      <h1>Online Shop</h1>
      <SearchBar products={products} />
    

    <select
      value={sortOption}
      onChange={(event) => setSortOption(event.target.value)}>
      <option value="">Sort products</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
      <option value="rating">Rating</option>
    </select>

  <div className="product-grid"></div>

      <div className="product-grid">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
}

export default HomePage;