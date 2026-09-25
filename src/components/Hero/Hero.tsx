import "./Hero.css";

function Hero() {
  function scrollToProducts() {
    const products = document.getElementById("products");

    if (products) {
      products.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-small-text">Welcome to Online Shop</p>

        <h1>Find something you'll love</h1>

        <p className="hero-description">
          Browse our collection and discover products at great prices.
        </p>

        <button className="hero-button" onClick={scrollToProducts}>
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Hero;