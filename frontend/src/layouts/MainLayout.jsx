import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import { UserContext } from "../context/user";
import api from "../lib/axios";

function MainLayout() {
  const [user, setUser] = useState(null);
  const [userLoaded, setUserLoaded] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const t = token || localStorage.getItem("token");
    if (t) {
      api.defaults.headers["Authorization"] = `Bearer ${t}`;
      api
        .get("/auth/me")
        .then((res) => {
          setUser(res.data);
          setUserLoaded(true);
        })
        .catch(() => {
          setToken(null);
          setUser(null);
          localStorage.removeItem("token");
        });
    }
  }, [token]);

  return (
    <>
      <UserContext.Provider
        value={{ user, setUser, token, setToken, userLoaded }}
      >
        <NavBar />
        <Outlet />
      </UserContext.Provider>
    </>
  );
}

export default MainLayout;
