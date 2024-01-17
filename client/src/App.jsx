import Home from "./pages/Home";
import Product from "./pages/Product";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import About from "./pages/About";
import Error from "./pages/404";
import BlogDetails from "./pages/BlogDetails";
import ProductDetails from "./pages/ProductDetails";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import AuthRoutes from "./routes/AuthRoutes";
import ProtectedRoutes from "./routes/ProtectedRoutes";
function App() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route element={<AuthRoutes />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="cart" element={<Cart quantity={quantity} setQuantity={setQuantity} />}/>
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
        <Route path="404" element={<Error />} />
        <Route path="blog/details" element={<BlogDetails />} />
        <Route
          path="product/:id"
          element={
            <ProductDetails quantity={quantity} setQuantity={setQuantity} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
