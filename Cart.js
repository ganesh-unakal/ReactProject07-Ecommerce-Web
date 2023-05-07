const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = (props) => {
  return (
    <div
      style={{
        margin: "0px",
        maxWidth: "800px",
        position: "fixed",
        top: "50px",
        height: "95%",
        right: "0",
        backgroundColor: "white",
        border: "1px solid rgb(177, 103, 103)",
        minHeight: "50vh",
      }}
    >
      <h1
        style={{
          fontFamily: "Metal Mania",
          textAlign: "center",
          padding: "20px",
          fontSize: "30px",
        }}
      >
        Cart
      </h1>

      <button
        style={{
          position: "absolute",
          cursor: "pointer",
          color: "rgb(121, 117, 117)",
          top: "0",
          right: "0",
          margin: "20px",
          background: "none",
          fontSize: "16px",
          fontWeight: "700",
          border: "1px solid rgb(121, 117, 117)",
          bordeRadius: "7px",
          padding: "5px",
        }}
        onClick={props.onClose}
      >
        X
      </button>

      <div
        style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
      >
        <span
          style={{
            alignItems: "center",
            borderBottom: "1px solid black",
            marginRight: "1.5rem",
            paddingBottom: "10px",
            marginTop: "10px",
            width: "45%",
            marginLeft: "20px",
          }}
        >
          ITEM
        </span>

        <span
          style={{
            alignItems: "center",
            borderBottom: "1px solid black",
            marginLeft: "1.5rem",
            paddingBottom: "10px",
            marginTop: "10px",
            width: "20%",
          }}
        >
          PRICE
        </span>

        <span
          style={{
            marginRight: "20px",
            alignItems: "center",
            borderBottom: "1px solid black",
            marginLeft: "2.5rem",
            paddingBottom: "10px",
          }}
        >
          QUANTITY
        </span>
      </div>
      <div>
        {cartElements.map((prod) => (
          <div
            style={{
              display: "flex",
              class: "raw",
              boxSizing: "border-box",
              margin: "0",
              padding: "0",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                display: "flex",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid black",
                  marginRight: "1.5em",
                  paddingBottom: "10px",
                  marginTop: "10px",
                }}
              >
                <img
                  style={{
                    width: "80px",
                    borderRadius: "20%",
                    marginRight: "20px",
                    padding: "10px",
                  }}
                  src={prod.imageUrl}
                  alt={prod.title}
                />
                {prod.title}
              </span>

              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid black",
                  marginRight: "1.5em",
                  paddingBottom: "10px",
                  marginTop: "10px",
                  width: "20%",
                }}
              >
                {prod.price}
              </span>

              <span
                style={{
                  alignItems: "center",
                  borderBottom: "1px solid black",
                  marginRight: "1.5rem",
                  paddingBottom: "10px",
                  marginTop: "10px",
                  display: "flex",
                }}
              >
                <span
                  style={{
                    alignItems: "center",
                    borderBottom: "1px solid black",
                    marginRight: "1.5rem",
                    paddingBottom: "10px",
                    marginTop: "10px",
                  }}
                >
                  {prod.quantity}
                </span>

                <button
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    background: "rgb(231, 76, 76)",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "8%",
                    height: "30px",
                    outline: "none",
                    padding: "0px 7px",
                  }}
                >
                  REMOVE
                </button>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          fontSize: "1.2rem",
        }}
      >
        <h1
          style={{
            marginRight: "10px",
            display: "flex",
            flexDirection: "row-reverse",
            fontSize: "1.5rem",
            margin: "20px",
            marginLeft: "15rem",
            fontWeight: "bold",
          }}
        >
          Total
        </h1>
        <span
          style={{
            marginTop: "20px",
          }}
        >
          $.150
        </span>
      </div>

      <div>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            marginTop: "50px",
            background: "#56CCF2",
            color: "white",
            fontSize: "1.2rem",
            fontWeight: "bold",
            border: "none",
            borderRadius: "8%",
            padding: "12px",
            cursor: "pointer",
          }}
        >
          PURCHASE
        </button>
      </div>
    </div>
  );
};

export default Cart;
