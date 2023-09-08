import { useReducer } from "react";

const initialState = {
  numOfBurger: 20,
  numOfPizza: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Buy":
      return {
        ...state,
        numOfBurger: state.numOfBurger - action.payload,
      };
    case "Restock":
      return {
        ...state,
        numOfBurger: state.numOfBurger + action.payload,
      };
    case "Reset":
      return {
        ...state,
        numOfBurger: action.payload,
      };
  }
};

const Example2 = () => {
  const [foodItems, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Total Burders {foodItems.numOfBurger}</h1>
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

export default Example2;
