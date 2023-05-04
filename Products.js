import React from "react";

import { Container } from "react-bootstrap";

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

const Products = () => {
  const product = productsArr.map((prod) => (
    <div
      key={prod.id}
      style={{
        margin: "0 auto",
        padding: "20px 30px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            display: "block",
            width: "100%",
            textAlign: "center",
            fontSize: "24px",
            marginBottom: "15px",
          }}
        >
          {prod.title}
        </h2>
        <div
          style={{ maxWidth: "900 px", margin: "0 auto", padding: "20px 30px" }}
        >
          <img
            src={prod.imageUrl}
            alt={prod.title}
            style={{
              transformOrigin: "center center",
              objectFit: "cover",
              padding: "0px",
              margin: "0px",
              transition: "ease-in 0.5s",
              filter: "brightness(100%)",
              height: "250px",
              width: "250px",
            }}
          />
        </div>

        <div
          style={{
            margin: "30px",
            alignItems: "center",
            justifyContent: "space-between",
            background: "white",
            width: "80%",
            display: "flex",
          }}
        >
          <span>Price: ${prod.price}</span>
          <button
            style={{
              cursor: "pointer",
              padding: "8px",
              color: "white",
              border: "none",
              fontSize: "15px",
              fontWeight: "bold",
              borderRadius: "4%",
              background: "#56CCF2",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <main style={{ marginTop: "30px", textAlign: "center" }}>
        <h2
          style={{
            display: "fixed",
            fontFamily: "metal mania",
            textAlign: "center",
            padding: "20px",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Music
        </h2>
        <div>{product}</div>
        <button
          style={{
            background: "#777",
          
            color: "#56CCF2",
            padding: "0.3rem",
            borderRadius: "5px",
            fontWeight: "700",
            border:"none",
            fontSize:"16px",
            
          }}
        >
          See the cart
        </button>
      </main>
      <div
        style={{
          display: "flex",
          height: "8rem",
          backgroundColor: "#56CCF2",
          width: "100%",
          textAlign: " center",
          padding: "20px",
          color: "white",
          fontSize: "50px",
          fontWeight: "blod",
          fontFamily: "Times New Roman",
          marginTop: "40px",
          margin: "0 auto",
          
        }}
      >
        The Generics
      </div>
    </div>
  );
};
export default Products;
