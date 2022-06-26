import React, { useState } from "react";
import "./aoo.css";

import { environment, testingVariable } from "./Environment";

const App = () => {
  const [x, setX] = useState<number>(0);
  console.log({ environment, testingVariable });
  return (
    <div>
      App {x}
      <button onClick={() => setX((state) => state + 1)}>add</button>
    </div>
  );
};

export default App;
