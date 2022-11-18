import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";

import "./styles/index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer
      draggable
      pauseOnHover
      closeOnClick
      newestOnTop={false}
      autoClose={3000}
      position="top-right"
    />
  </React.StrictMode>,
  document.getElementById("root")
);
