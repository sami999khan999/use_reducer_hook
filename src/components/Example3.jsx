import React, { useReducer } from "react";

const initialState = 20;

const reducer = (state, action) => {
  switch (action.type) {
    case "Buy":
      return state - action.payload;
    case "Restock":
      if (state < initialState) return initialState;
      return state + action.payload;

    case "Reset":
      return (state = action.payload);
  }
};

const Example3 = () => {
  const [numOfBurder, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Total Burder {numOfBurder}</h1>
      <button onClick={() => dispatch({ type: "Buy", payload: 2 })}>Buy</button>
      <button onClick={() => dispatch({ type: "Restock", payload: 20 })}>
        Restock
      </button>
      <button onClick={() => dispatch({ type: "Reset", payload: 0 })}>
        Reset
      </button>
    </div>
  );
};

export default Example3;
