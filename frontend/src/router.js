import { createBrowserRouter } from "react-router-dom";
import { AdminLayout } from "./layouts/AdminLayout";
import MainLayout from "./layouts/MainLayout";
import { UserLayout } from "./layouts/UserLayout";
import { AdminPanel } from "./pages/admin/AdminPanel";
import { AdminProductCreate } from "./pages/admin/AdminProductCreate";
import { Cart } from "./pages/Cart";
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
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <AdminPanel />,
          },
          { path: "/admin/create", element: <AdminProductCreate /> },
        ],
      },
      {
        path: "/user",
        element: <UserLayout />,
        children: [
          {
            path: "/user/cart",
            element: <Cart />,
          },
        ],
      },
    ],
  },
]);
