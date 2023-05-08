import { Fragment, useContext } from "react";
import classes from './Header.module.css';
import CartContext from '../store/Cart-context';



const Header= (props) =>{
const crtCntx= useContext(CartContext)

const numberOfItems = crtCntx.items.reduce((curNumber,item)=>{
    return curNumber + item.quantity
},0);

return(
    <Fragment>
        <header className={classes.header}>       
           <div className={classes.space} >
            <span >HOME</span>
            <span >STORE</span>
            <span ><a href="https://prasadyash2411.github.io/ecom-website/about.html">ABOUT</a></span>
           
           
            <button className={classes.BUtton} onClick={props.onShowCart}>cart </button>
            <span className={classes.num}>{numberOfItems}</span>
           <h1 className={classes.h1}>The Generics</h1>
        
        </div>

       
        
        </header>
       </Fragment>
)
}
export default Header