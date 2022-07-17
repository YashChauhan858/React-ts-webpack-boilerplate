import React from "react";

import { Dispatch, Selector } from "@Store";
import { incremented, amountAdded } from "@Store";

const AdderCom = () => {
  const count = Selector((state) => state.counter.value);
  const dispatch = Dispatch();
  const increase = () => {
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

export default AdderCom;
