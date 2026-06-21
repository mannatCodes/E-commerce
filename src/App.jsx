import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./components/Footer/Footer";
import women_banner from "./assets/women_banner.jpg"
import men_banner from "./assets/men_banner.jpg"
import kids_banner from "./assets/kids_banner.jpg"
import ScrollToTop from "./Pages/ScrollToTop.jsx"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Shop />} />

        <Route path="/men" element={<ShopCategory category="men" image={men_banner}/>} />
        <Route path="/womens" element={<ShopCategory category="women" image={women_banner}/>} />
        <Route path="/kids" element={<ShopCategory category="kids" image={kids_banner}/>} />

        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<Product />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;