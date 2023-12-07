import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import NavBar from "./components/Navbar";
import "./index.css";
import { router } from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <NavBar />
    <RouterProvider router={router} />
  </>,
);
