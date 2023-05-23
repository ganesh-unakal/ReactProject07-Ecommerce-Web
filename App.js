import Header from './component/Header/Header'
import './App.css';
import Products from './component/products/Products';
import { useContext, useState } from 'react';
import Cart from './component/Cart/cart';
// import CartProvider from './component/store/CartContextProvider';
import {Route, Switch, Redirect} from 'react-router-dom';
import About from './component/pages/About';
import Home from './component/pages/Home';
import Contact from './component/pages/Contact';
import Store from './component/products/Store';
import Login from './component/login/Login';
import AuthContext from './component/store/Auth-context';

function App() {
 const [showCart, setShowCart]=useState(false);

const authCntx = useContext(AuthContext)
const isLoggedIn = authCntx.isLoggedIn
 
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
    <>
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
            <Redirect to='/login' />
          </Route>

          <Route path="/home" exact>
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/store" exact>
            {!!authCntx.token &&
            <Store onClick={showCartHandler} />}
            {!!!authCntx.token && <Redirect to='/login' />}
          </Route>

          <Route path="/contact">
            <Contact />  
          </Route>

          {!!authCntx.token && <Route path="/store/:productId">
            <Products /> 
          </Route> }

          <Route path='/login'>
            <Login/>
          </Route>

        </Switch>
</main>

    </ >
)

}

export default App;
