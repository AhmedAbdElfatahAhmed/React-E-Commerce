import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import ProductList from "./components/ProductsList";
import ShoppingCart from "./components/ShoppingCart";
import LogIn from "./components/LogIn";
import SignUp from "./components/signUp";
import ProductDetails from "./components/ProductDetails";
import CounterContainer from "./components/labOne/CounterContainer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/counter" element={<CounterContainer />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
