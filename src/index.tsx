import { Provider } from "react-redux";
import { store } from "./Store/store";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import ErrorBoundary from "./ErrorLogger/ErrorLogger";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>
);
