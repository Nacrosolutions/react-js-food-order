import { useState } from 'react';

import Header from './components/Layout/Header';
import CartProvider from './store/CartProvider';
<<<<<<< HEAD
import Meals from './components/Meals/Meals';
=======
import Cart from './components/Cart/Cart';
>>>>>>> feat/cart

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);


  function showCartHandler() {
    setCartIsShown(true);
  }

  function hideCartHandker() {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandker} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
