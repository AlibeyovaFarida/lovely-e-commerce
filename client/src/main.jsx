import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./global.scss";
import ScrollToTop from "react-scroll-to-top";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {persistor, store} from './store'
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop smooth />
      <PersistGate loading={"loading"} persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
