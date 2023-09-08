// // UseRefucer

// // useReducer is a React hook that is used for more complex state management in functional components. It is an alternative to using the useState hook when you have a state object with multiple properties or when state transitions are more complex and involve multiple actions. useReducer is particularly useful for managing state that follows a predictable pattern, such as when you need to implement actions like "increment," "decrement," or "toggle." //

//============================================================================================================================================//

// // Defining the Reducer Function

// // You start by defining a reducer function. This function takes two arguments: the current state and an action. The action is an object with a type property that describes what action to take and may also include additional data (payload). //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // State

// // In a reducer function, "state" refers to the current state of your application or component. The reducer function is responsible for specifying how the state should be updated based on the action type and, in some cases, additional data (payload) provided in the action object. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // Action

// // In a reducer function within a state management system like Redux, an "action" is an object that describes a change that should be made to the state. The reducer function takes the current state and an action as parameters and returns a new state based on the information provided in the action. //

// // Action Type - The action object contains a type property that indicates the type of action to be performed. This type is a string or a symbol that describes what kind of change or event is happening. It's used in the reducer to determine how to update the state. //

// // Payload - The action object may also include a payload, which is optional. The payload carries additional data or information needed to perform the action. The structure and content of the payload can vary depending on the action type. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // Dispatch

// // "dispatch" refers to a function that is used to send an action to a reducer, which then determines how the state should be updated based on that action. Dispatching an action is a way to initiate a state change in your application. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
