import React from "react";
import "./aoo.css";

import { Dispatch, Selector } from "./Store/DispatchHooks";
import {
  incremented,
  amountAdded,
} from "./Store/Features/counter/counterSlice";

const App = () => {
  const count = Selector((state) => state.counter.value);
  const dispatch = Dispatch();
  const increase = () => {
    // increment by one
    dispatch(incremented());
  };
  const increaseByFixedAmount = () => {
    dispatch(amountAdded(3));
  };
  return (
    <div className="ad">
      {count}
      <button onClick={increase}>Add count by one</button>
      <button onClick={increaseByFixedAmount}>Add count by fixed amount</button>
    </div>
  );
};

export default App;
