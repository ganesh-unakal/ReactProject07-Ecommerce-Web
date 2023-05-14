import Header from './component/Header/Header'
import './App.css';
import Products from './component/products/Products';
import { useState } from 'react';
import Cart from './component/Cart/cart';
import CartProvider from './component/store/CartContextProvider';
import {Route, Switch, Redirect} from 'react-router-dom';
import About from './component/pages/About';
import Home from './component/pages/Home';
import Contact from './component/pages/Contact';
import Store from './component/products/Store';

function App() {
 const [showCart, setShowCart]=useState(false);

 const showCartHandler =()=>{
  setShowCart(true);
 }

 const hideCartHandler = () =>{
  setShowCart(false)
 }

// const router =createBrowserRouter([
//   {
//     path: '/ABOUT', element:<About />
//   }
// ])


  return (
    <CartProvider>
     {showCart && < Cart onClose={hideCartHandler} />}
    <Header onShowCart={showCartHandler} />
   {/*<Products />*/}
{/* 
    <Routes>
      <Route path= '/'  element={<Home />} />
      <Route path='/ABOUT' element={<About />} />
      <Route path= '/STORE' element={<Products />} />
      <Route path= '/Contact' element={<Contact />} />
    </Routes> */}
  
<main>
<Switch>
          <Route path='/' exact>
            <Redirect to='/store' />
          </Route>

          <Route path="/home" exact>
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/store" exact>
            <Store onClick={showCartHandler} />
          </Route>

          <Route path="/contact">
            <Contact />
            
          </Route>
          <Route path="/store/:productId">
            <Products />
          </Route>

        </Switch>
</main>

    </CartProvider >
)

}

export default App;
