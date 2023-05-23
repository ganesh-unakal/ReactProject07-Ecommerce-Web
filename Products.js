import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AuthContext from "../store/Auth-context";
import classes from "./Products.module.css";

const productArr = [
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

const Products = () => {
  const params = useParams();
  console.log("nbgn", params.productId);

  const authCtx = useContext(AuthContext);

  const addItemToCart = (product) => {
    authCtx.addToCart(product);
  };

  const product = productArr.find((prod) => prod.id === +params.productId);
  return (
    <Container style={{ marginTop: "30px", textAlign: "center" }}>
      <div>
        <h1>{product.title}</h1>
        <img src={product.imageUrl} alt={product.title}></img>
      </div>
      <div className={classes.style1}>
        <span >Price: ${product.price}</span>
        <button 
         
          onClick={() => addItemToCart(product)}
        >
          Add to Cart
        </button>
      </div>
      <div>This is a bueatiful multicolours</div>
    </Container>
  );
};
export default Products;
