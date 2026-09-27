import "./InfoPage.css";

export function PrivacyPage() {
  return (
    <main className="info-page">
      <h1>Privacy Policy</h1>

      <p>
        This privacy policy explains how information may be handled
        when using Online Shop.
      </p>

      <h2>Information You Provide</h2>

      <p>
        The contact form asks for your name, email address, subject and
        message so that you can submit a message through the website.
      </p>

      <h2>Shopping Cart</h2>

      <p>
        The website uses application state to manage products added to
        the shopping cart while using the store.
      </p>

      <h2>Product Data</h2>

      <p>
        Product information displayed on Online Shop is retrieved from
        an external API.
      </p>

      <h2>Contact</h2>

      <p>
        If you have questions about this privacy policy, you can use
        the contact page to get in touch.
      </p>
    </main>
  );
}