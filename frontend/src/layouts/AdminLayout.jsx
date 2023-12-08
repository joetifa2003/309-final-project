import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";

export const AdminLayout = () => {
  const { user, userLoaded } = useContext(UserContext);
  const nav = useNavigate();

  useEffect(() => {
    if (userLoaded) {
      if (!user || !user.isAdmin) {
        nav("/login");
      }
    }
  }, [userLoaded, user]);

  return <Outlet />;
};
