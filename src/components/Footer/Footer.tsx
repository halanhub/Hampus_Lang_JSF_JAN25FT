import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Online Shop</h2>
          <p>
            A simple online store where you can browse products,
            find great prices and shop easily.
          </p>
        </div>

        <div className="footer-section">
          <h3>Shop</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-section">
          <h3>Information</h3>
          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Online Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;