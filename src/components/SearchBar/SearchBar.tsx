import { useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../types/product";
import "./SearchBar.css";

interface SearchBarProps {
  products: Product[];
}

function SearchBar({ products }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
        className="search-input"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      {searchTerm && (
        <div className="search-results">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="search-result"
            >
              {product.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;