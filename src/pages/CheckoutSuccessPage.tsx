import { Link } from "react-router-dom";

export function CheckoutSuccessPage() {
  return (
    <main>
      <h1>Order Successful!</h1>

      <p>Thank you for your order.</p>

      <Link to="/">Continue Shopping</Link>
    </main>
  );
}