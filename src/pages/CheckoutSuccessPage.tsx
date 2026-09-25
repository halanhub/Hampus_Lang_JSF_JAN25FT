import { Link } from "react-router-dom";
import "./CheckoutSuccessPage.css";

export function CheckoutSuccessPage() {
  return (
    <main className="checkout-success-page">
      <h1>Order Successful!</h1>

      <p>Thank you for your order.</p>

      <Link to="/" className="continue-shopping-link">Continue Shopping</Link>
    </main>
  );
}