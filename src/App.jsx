import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/home";
import Footer from "./components/footer";
import Product from "./pages/Product/product";
import ScrollToTop from "./components/scroll";
import ProductDetails from "./pages/ProductDetail/productDetail";
import AboutUs from "./pages/aboutus/aboutus";
import ContactUs from "./pages/contactus/contactus";
import { Login } from "./pages/Login/login";
import { Cart } from "./pages/cart/cart";
import Catalogue from "./pages/catalogue/catalogue";
import PaymentPolicy from "./pages/payment-policy/payment-policy";
import TermsAndConditions from "./pages/terms-coditions/terms-conditions";
import DeliveryPolicy from "./pages/delivery-tracking/delivery-tracking";
import FAQPage from "./pages/faq/faq";
import AdminPanel from "./utils/admin-pannel/admin-pannel";
// import Slider from "./components/slider";

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HomePage />
                <Footer />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <Navbar />
                <Product />
                <Footer />
              </>
            }
          />
          <Route
            path="/productdetails"
            element={
              <>
                <Navbar />
                <ProductDetails/>
                <Footer />
              </>
            }
          />
           <Route
            path="/about-us"
            element={
              <>
                <Navbar />
                <AboutUs/>
                <Footer />
              </>
            }
          />
          <Route
            path="/contactus"
            element={
              <>
                <Navbar />
                <ContactUs/>
                <Footer />
              </>
            }
          />
           <Route
            path="/login"
            element={
              <>
                <Navbar />
                <Login/>
                <Footer />
              </>
            }
          />
          <Route
            path="/catalogue"
            element={
              <>
                <Navbar />
                <Catalogue/>
                <Footer />
              </>
            }
          />
          <Route
            path="/terms-and-conditions"
            element={
              <>
                <Navbar />
                <TermsAndConditions/>
                <Footer />
              </>
            }
          />
          <Route
            path="/faq"
            element={
              <>
                <Navbar />
                <FAQPage/>
                <Footer />
              </>
            }
          />
          <Route
            path="/delivery-tracking-policy"
            element={
              <>
                <Navbar />
                <DeliveryPolicy/>
                <Footer />
              </>
            }
          />
          <Route
            path="/payment-policy"
            element={
              <>
                <Navbar />
                <PaymentPolicy/>
                <Footer />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Navbar />
                <Cart/>
                <Footer />
              </>
            }
          />
          <Route
            path="/admin-pannel"
            element={
              <>
                <AdminPanel/>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
