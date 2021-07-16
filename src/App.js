import { useState } from "react";
import Cart from "./Component/Cart/Cart";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart = {hideCartHandler} />}
      <Header onShowCart = {showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
