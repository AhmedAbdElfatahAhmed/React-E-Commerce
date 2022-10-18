import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/NavBar";
import ProductList from "./components/ProductsList";
import ShoppingCart from "./components/ShoppingCart";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductDetails from "./components/ProductDetails";
import CounterContainer from "./components/labOne/CounterContainer";
function App() {
  let [counter, setCounter] = useState(0);
  const handelcartCounter = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <BrowserRouter>
      <Navbar productsInCart={counter} />
      <Routes>
        <Route
          path="/"
          element={<ProductList handelcartCounter={handelcartCounter} />}
        />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/counter" element={<CounterContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
