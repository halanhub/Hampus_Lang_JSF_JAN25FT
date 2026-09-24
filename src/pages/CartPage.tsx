import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./CartPage.css";

export function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.product.discountedPrice * item.quantity,
    0
  );

  return (
    <main className="cart-page">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.product.id}>
              <img
                src={item.product.image.url}
                alt={item.product.image.alt || item.product.title}
                width="100"
              />

              <h2>{item.product.title}</h2>

              <p>
                Price: {item.product.discountedPrice.toFixed(2)} NOK
              </p>

              <div>
                <button
                  onClick={() => decreaseQuantity(item.product.id)}
                >
                  -
                </button>

                <span> Quantity: {item.quantity} </span>

                <button
                  onClick={() => increaseQuantity(item.product.id)}
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.product.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <h2 className="cart-total">Total: {totalPrice.toFixed(2)} NOK</h2>
          <Link to="/checkout-success"onClick={clearCart}>
          <button className="checkout-button" onClick={clearCart}>Checkout</button>
          </Link>
        </div>
      )}
    </main>
  );
}