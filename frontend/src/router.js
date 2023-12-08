import { createBrowserRouter } from "react-router-dom";
import { AdminLayout } from "./layouts/AdminLayout";
import MainLayout from "./layouts/MainLayout";
import { UserLayout } from "./layouts/UserLayout";
import { AdminPanel } from "./pages/admin/AdminPanel";
import { AdminProductCreate } from "./pages/admin/AdminProductCreate";
import { AdminProductEdit } from "./pages/admin/AdminProductEdit";
import { Cart } from "./pages/Cart";
import IndexPage from "./pages/Index";
import Login from "./pages/Login";
import { Product } from "./pages/Product";
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
        path: "/product/:id",
        element: <Product />,
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
          { path: "/admin/edit/:id", element: <AdminProductEdit /> },
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
