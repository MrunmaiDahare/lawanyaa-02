import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/home";
import Footer from "./components/footer";
import Product from "./pages/Product/product";
import ScrollToTop from "./components/scroll";
import ProductDetails from "./pages/ProductDetail/productDetail";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
