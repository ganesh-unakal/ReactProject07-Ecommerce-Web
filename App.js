import Header from './component/Header/Header'
import './App.css';
import Products from './component/products/Products';
import { Fragment, useState } from 'react';
import Cart from './component/Cart/Cart';

function App() {
 const [showCart, setShowCart]=useState(false);

 const showCartHandler =()=>{
  setShowCart(true);
 }

 const hideCartHandler = () =>{
  setShowCart(false)
 }


  return (
    <Fragment>
     {showCart && < Cart onClose={hideCartHandler} />}
    <Header onShowCart={showCartHandler} />
   <Products />
    </Fragment >
  )

}

export default App;
