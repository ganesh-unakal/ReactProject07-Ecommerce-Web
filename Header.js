import { Fragment, useContext } from "react";
import classes from "./Header.module.css";
import CartContext from "../store/Cart-context";
import { NavLink } from "react-router-dom";



const Header = (props) => {
  const crtCntx = useContext(CartContext);

  const numberOfItems = crtCntx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.space}>
            
          <button className={classes.btn}>
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

          <button className={classes.BUtton} onClick={props.onShowCart}>
            cart
          </button>
          
          <span className={classes.num}>{numberOfItems}</span>
        </div>
        
        <h1 className={classes.h1}>The Generics</h1>
     
      </header>


    </Fragment>
          
  );
};
export default Header;
