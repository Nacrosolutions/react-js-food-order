import { useState } from 'react';

import Header from './components/Layout/Header';
import CartProvider from './store/CartProvider';
import Meals from './components/Meals/Meals';

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
      {cartIsShown && <div>Card...</div>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
