import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";

export const UserLayout = () => {
  const { user, userLoaded } = useContext(UserContext);
  const nav = useNavigate();

  useEffect(() => {
    if (userLoaded) {
      if (!user) {
        nav("/login");
      }
    }
  }, [userLoaded, user]);

  return <>{user && <Outlet />}</>;
};
