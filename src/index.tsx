import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import ErrorBoundary from "./ErrorLogger/ErrorLogger";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
