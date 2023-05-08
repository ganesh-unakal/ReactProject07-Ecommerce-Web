import classes from "./Cart.module.css";
import React,{useContext} from "react";
import CartContext from '../store/Cart-context';

// const cartElements = [
//   {
//     title: "Colors",
//     price: 100,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//     quantity: 2,
//   },
//   {
//     title: "Black and white Colors",
//     price: 50,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//     quantity: 3,
//   },
//   {
//     title: "Yellow and Black Colors",
//     price: 70,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//     quantity: 1,
//   },
// ];

const Cart = (props) => {
const crtCntx = useContext(CartContext)
const totalAmount=  `$${crtCntx.totalAmount}`


  return (
    <div className={classes.style1}>
      <h1 className={classes.style2}>Cart</h1>

      <button className={classes.style3} onClick={props.onClose}>
        X
      </button>

      <div className={classes.style4}>
        <span className={classes.style5}>ITEM</span>

        <span className={classes.style6}>PRICE</span>

        <span className={classes.style7}>QUANTITY</span>
      </div>

      <div>
        {crtCntx.items.map((prod) => (
            
          <div key={prod.id} className={classes.style8}>
            <div className={classes.style9}>
              <span className={classes.style10}>
                <img
                  className={classes.style11}
                  src={prod.imageUrl}
                  alt={prod.title}
                />
                {prod.title}
              </span>

              <span className={classes.style12}>{prod.price}</span>

              <span className={classes.style13}>
                <span className={classes.style14}>{prod.quantity}</span>

                <button className={classes.style15}>REMOVE</button>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className={classes.style16}>
        <h1 className={classes.style17}>Total</h1>
        <span style={{ marginTop: "20px" }}>{totalAmount}</span>
      </div>

      <div>
        <button className={classes.style18}>PURCHASE</button>
      </div>
    </div>
  );
};

export default Cart;
