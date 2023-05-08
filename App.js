import Header from './component/Header/Header'
import './App.css';
import Products from './component/products/Products';
import { useState } from 'react';
import Cart from './component/Cart/Cart';
import CartProvider from './component/store/CartContextProvider';

function App() {
 const [showCart, setShowCart]=useState(false);

 const showCartHandler =()=>{
  setShowCart(true);
 }

 const hideCartHandler = () =>{
  setShowCart(false)
 }


  return (
    <CartProvider>
     {showCart && < Cart onClose={hideCartHandler} />}
    <Header onShowCart={showCartHandler} />
   <Products />
    </CartProvider >
  )

}

export default App;
