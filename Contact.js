import { Fragment, useRef } from "react";
import classes from "./Contact.module.css";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

const Contact = () => {
  const namInputeRef = useRef("");
  const emailInputRef = useRef("");
  const numberinputRef = useRef("");

  const sumbitHandler = async (event) => {
    event.preventDefault();

    const enteredNmae = namInputeRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredNumber = numberinputRef.current.value;

    const userDetails = {
      name: enteredNmae,
      email: enteredEmail,
      number: enteredNumber,
    };

    const response = await fetch(
      "https://react-http-fb949-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(userDetails),
      }
    );
    console.log("response", response);
    console.log("user", userDetails);
    namInputeRef.current.value=""
    emailInputRef.current.value=""
    numberinputRef.current.value=""
  };

  return (
    <form onSubmit={sumbitHandler}>
      <div className={classes.contact}>
        <label htmlFor="name" style={{ display: "block" }}>Name:</label>
        <input type="text" ref={namInputeRef} />

        <label htmlFor="email" style={{ display: "block" }}>Email:</label>
        <input type="email" ref={emailInputRef} />

        <label htmlFor="number" style={{ display: "block" }}>phone number:</label>
        <input type="phone number" ref={numberinputRef} />

        <button>Submit</button>
      </div>
    </form>
  );
};

export default Contact;
