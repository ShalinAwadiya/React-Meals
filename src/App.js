import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [displayCart, setDisplayCart] = useState(false);
  const showCart = () => {
    setDisplayCart(true);
  };
  const hideCart = () => {
    setDisplayCart(false);
  };
  return (
    <CartProvider>
      {displayCart ? <Cart onClick={hideCart} /> : ""}
      <Header onClick={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
