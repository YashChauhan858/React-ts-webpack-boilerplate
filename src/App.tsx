import React, { useState } from "react";
import "./aoo.css";

const App = () => {
  //  maa ke chooot
  const [x, setX] = useState<number>(0);
  return (
    <div>
      App {x}
      <button onClick={() => setX((state) => state + 1)}>add</button>
    </div>
  );
};

export default App;
