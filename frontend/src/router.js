import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/main";
import IndexPage from "./pages/Index";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <IndexPage /> },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
