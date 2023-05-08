import React,{useContext} from "react";
import classes from "./Products.module.css";
import CartContext from '../store/Cart-context';


import BottomCartButton from "../Header/BottomCartButton";

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Products = (props) => {

const crtCntx=useContext(CartContext)

  const addItemHandler = item => {
     crtCntx.addItem({...item, quantity: 1})
    
   
  }
  console.log('add item', addItemHandler)

  const product = productsArr.map((prod) => (

    <div key={prod.id} className={classes.style1}>
      <div className={classes.style2}>
        <h2>{prod.title}</h2>
        <div style={{ padding: "20px 30px" }}>
          <img
            src={prod.imageUrl}
            alt={prod.title}
            style={{ width: "250px" }}
          />
        </div>

        <div className={classes.style4}>
          <span>Price: ${prod.price}</span>
          <button className={classes.style5} onClick={()=>addItemHandler(prod)} >Add to Cart</button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <main style={{ marginTop: "30px", textAlign: "center" }}>
        <h2>Music</h2>
        <div>{product}</div>

        <BottomCartButton />
      </main>
      <div className={classes.style7}>The Generics</div>
    </div>
  );
};
export default Products;
