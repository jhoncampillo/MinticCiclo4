import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./context/ProductContex";
import { ContactProvider } from "./context/ContactContext";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// <AuthProvider> empaqueto el App
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <ContactProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ContactProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
