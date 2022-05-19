import React, { useState } from "react";
// import "./Components/Counter.css"


let Counter = () => {
  const [count, setcount] = React.useState(0);

  const incrementcount = () => {
    console.log("pre", count);
    setcount(count + 1);
    console.log(count);
  };

  const decrementcount = () => {
    console.log("pre", count);
    setcount(count - 1);
    console.log(count);
  };

  // const decrementcount = () => {
  //   count--;
  // };
  return (
    <>
  <h1 style={count%2===0  ?{color:'green'} :{color:'red'}}>Counter: {count}</h1>
      <button onClick={incrementcount}>Increment</button>
      <button onClick={decrementcount}>Decrement</button>
      <br />
      <button
        onClick={() => {
          setcount(count * 2);
        }}
      >
        Double
      </button>
    </>
  );
};

export default Counter;
