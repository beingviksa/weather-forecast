import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { WeatherContextProvider } from "./weatherContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WeatherContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </WeatherContextProvider>
);
