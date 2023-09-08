import { useReducer } from "react";

const initialValue = 0;

const reducer = (state, action) => {
  switch (action) {
    case "buy":
      if (state <= 0) return 0;
      return state - 1;
    case "restock":
      if (state === 0) return state + 20;
      return state;
    case "reset":
      return initialValue;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [numberOfBurgers, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <h1>Total Burgens: {numberOfBurgers}</h1>
      <button onClick={() => dispatch("buy")}>Buy Burger</button>
      <button onClick={() => dispatch("restock")}>Restock Burder</button>
      <button onClick={() => dispatch("reset")}>Reset Stock</button>
    </div>
  );
};

export default UseReducer;
