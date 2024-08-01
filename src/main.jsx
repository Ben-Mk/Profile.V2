import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreateProfile from "./pages/Create";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CreateProfile />
  </React.StrictMode>
);
