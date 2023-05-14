import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import BottomCartButton from "../Header/BottomCartButton";
import CartContext from "../store/Cart-context";
import { Link } from "react-router-dom";
import  classes from './Store.module.css'

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 1,
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 1,
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
  },
];

const Store = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
    console.log(item);
  };

  const product = productsArr.map((prod) => (
    <div key={prod.id} className={classes.style1}>
      <div className={classes.style2}>
        <h2>{prod.title}</h2>
        <div style={{ padding:"20px 30px" }}>
          <img src={prod.imageUrl} alt={prod.title} />
        </div>

        <div className={classes.style4}>
          <span>Price: ${prod.price}</span>
          <button className={classes.style5} onClick={() => addItemHandler(prod)}>
            Add To Cart
          </button>
        </div>

        <Link
          style={{
            margin: "20px",
            alignItems: "center",
            justifyContent: "space-between",
            background: "black",

            borderRadius: "10%",
            marginRight: "1.5rem",
            paddingBottom: "5px",
            marginTop: "10px",
            padding: "0.3rem",
          }}
          to={`/store/${prod.id}`}
        >
          Open Product
        </Link>
      </div>
    </div>
  ));

  return (
    <Container>
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <h1>MUSIC</h1>
        <div> {product} </div>
        <BottomCartButton onClick={props.onClick} />
      </div>
    </Container>
  );
};
export default Store;
