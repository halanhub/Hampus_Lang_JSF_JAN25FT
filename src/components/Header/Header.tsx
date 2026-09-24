import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Header.css";

function Header() {
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="header">
    <div className="header-content">
      <Link to="/" className="logo">
        Online Shop
      </Link>

      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>
    </div>
  </header>
  );
}

export default Header;