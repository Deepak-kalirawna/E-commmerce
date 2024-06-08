import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignUp";
import Footer from "./Components/Footer/Footer";
import MENBANNER from "./Components/Assets/banner_mens.png";
import WOMENBANNER from "./Components/Assets/banner_women.png";
import KIDSBANNER from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={MENBANNER} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={WOMENBANNER} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={KIDSBANNER} category="kid" />}
          />
          <Route path="/products" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
