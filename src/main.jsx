import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Body />
  </React.StrictMode>
);
