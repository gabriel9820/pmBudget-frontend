import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
import appStore from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore.store}>
      <PersistGate persistor={appStore.persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
