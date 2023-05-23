import { Fragment, useContext, useEffect } from "react";
import classes from "./Header.module.css";
// import CartContext from "../store/Cart-context";
import { NavLink, useHistory } from "react-router-dom";
import AuthContext from '../store/Auth-context'



const Header = (props) => {
  //const crtCntx = useContext(CartContext);
const authCntx = useContext(AuthContext)
const history = useHistory()

const isLoggedIn = !!authCntx.token



  const numberOfItems = authCntx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

  const logoutHandler = () =>{
    authCntx.logout()
    history.replace('/login')
  }

  let userEmail 
  if(!!authCntx.token){
    userEmail = authCntx.email.replace(/[@.]/g, "");
  }
 
   async function getItems() {
     const response = await fetch(
       `https://crudcrud.com/api/aa3239307b934db388aeb04e042b17de/cart${userEmail}`
     );
     const data = await response.json();
     data.map((item) => {
       return authCntx.addToCart({ ...item });
     });
   }
 
   useEffect(() => {
     getItems();
   }, [userEmail]);





  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.space}>
            
          <button className={classes.btn} >
            <NavLink to="/home" style={{textDecoration: "none", color: "white" }}>HOME </NavLink>
          </button>

            <button className={classes.btn}>
            <NavLink to="/store" style={{textDecoration: "none", color: "white" }} >STORE </NavLink>
          </button>
        
          <button className={classes.btn}>       
            <NavLink to="/about" style={{textDecoration: "none", color: "white" }} >ABOUT </NavLink>
          </button>
        
          <button className={classes.btn}>
          <NavLink to= '/contact' style={{textDecoration: 'none', color:'white'}}>Contact US</NavLink>
          </button>

          {!isLoggedIn && <button className={classes.btn}>
            <NavLink to='/login' style={{textDecoration: 'none', color:'white'}}>Login</NavLink>
          </button>}

          {isLoggedIn && <button className={classes.btn} onClick={logoutHandler}>
          Logout
          </button>}
          </div>
         
         
         
         <div className={classes.BUtton}>
          <button  onClick={props.onShowCart}>
            cart
          </button>

           <span style={{color: 'white'}}>{numberOfItems}</span>
          
         
        </div>
        
        <h1 className={classes.h1}>The Generics</h1>
     
      </header>


    </Fragment>
          
  );
};
export default Header;
