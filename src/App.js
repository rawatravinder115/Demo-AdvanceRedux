import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart =useSelector(state => state.Cart);

  // side effect logic in the component.

  useEffect(() =>{
    fetch("https://fir-project-b3903-default-rtdb.firebaseio.com/cart.json",{
      method: 'PUT', // sending put request overide the existing data with the incoming data. 
      body: JSON.stringify(cart),
    });
  },[cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
