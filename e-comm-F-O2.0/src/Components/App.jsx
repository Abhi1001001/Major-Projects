import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./ProductComponents/Home";
import BestsellerPage from "./Bestseller/BestsellerPage";
import BestGadgets from "./BestGadgets/BestGadgets";
import SignUp from "./User/SignUp";
import Admin from "./User/Admin";
import Cart from "./ProductComponents/Cart";
import PrivateComponent from "./PrivateComponent";
import LogIn from "./User/LogIn";
import UpdateAdmin from "./User/UpdateAdmin";
import SearchProducts from "./ProductComponents/SearchProducts";
import Shop from "./ProductComponents/Shop";
import Offers from "./ProductComponents/Offers";
import Categories from "./ProductComponents/Categories";
import Brands from "./ProductComponents/Brands";
import NewArrivals from "./ProductComponents/NewArrivals";
import AboutUs from "./ProductComponents/AboutUs";
import Careers from "./Careers";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bestseller" element={<BestsellerPage />} />
        <Route path="/best-gadgets" element={<BestGadgets />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/search-products" element={<SearchProducts/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/offers" element={<Offers/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/brand" element={<Brands/>} />
        <Route path="/new-arrivals" element={<NewArrivals/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/careers" element={<Careers/>} />


        {/* routing with private component ------------>*/}
        <Route element={<PrivateComponent/>}>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/update-admin" element={<UpdateAdmin/>} />
        </Route>
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
