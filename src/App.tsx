import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import Header from "./components/Header/Header";
import { CartPage } from "./pages/CartPage";
import { CheckoutSuccessPage } from "./pages/CheckoutSuccessPage";
import { ContactPage } from "./pages/ContactPage";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/checkout-success" element={<CheckoutSuccessPage />}/>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;