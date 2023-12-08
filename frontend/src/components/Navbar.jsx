import Hamburger from "hamburger-react";
import { useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart.svg";
import { UserContext } from "../context/user";

function NavBar() {
  const { user, setToken, setUser } = useContext(UserContext);
  const [menuOpened, setMenuOpend] = useState(false);

  const logOut = useCallback(() => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setMenuOpend(false);
  }, []);

  return (
    <nav className="fixed top-0 z-20 w-full bg-white py-4">
      <div className="container flex space-x-8">
        <div className="flex flex-1 justify-between">
          <Link to={"/"} className="font-brand text-4xl font-black leading-10">
            Furniture
          </Link>
        </div>
        <div className="hidden items-center space-x-6 md:flex">
          <Link to="/user/cart">
            <img className="h-8 w-8 cursor-pointer" src={CartIcon} />
          </Link>
          {!user ? (
            <>
              <Link to={"/signup"} className="btn btn-small">
                Sign up
              </Link>
              <Link to={"/login"} className="btn btn-small">
                Login
              </Link>
            </>
          ) : (
            <>
              <button onClick={logOut} className="btn btn-small">
                Log out
              </button>
              {user.isAdmin && (
                <Link
                  to="/admin"
                  className="btn btn-small bg-white"
                  onClick={() => setMenuOpend(false)}
                >
                  Admin
                </Link>
              )}
            </>
          )}
        </div>
        <span className="md:hidden">
          <Hamburger
            toggled={menuOpened}
            toggle={setMenuOpend}
            className="md:hidden"
          />
        </span>
        {menuOpened && (
          <>
            <div
              className="fixed right-0 top-0 h-full w-full bg-black bg-opacity-50"
              onClick={() => setMenuOpend(false)}
            ></div>
            <div className="fixed right-0 top-0 h-full w-3/4 bg-light-gray">
              {!user ? (
                <div className="flex flex-col space-y-4">
                  <Link
                    to={"/signup"}
                    className="btn btn-small bg-white"
                    onClick={() => setMenuOpend(false)}
                  >
                    Sign up
                  </Link>
                  <Link
                    to={"/login"}
                    className="btn btn-small bg-white"
                    onClick={() => setMenuOpend(false)}
                  >
                    Login
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col space-y-4">
                  <Link
                    to="/user/cart"
                    className="btn btn-small bg-white"
                    onClick={() => setMenuOpend(false)}
                  >
                    Cart
                  </Link>
                  <button onClick={logOut} className="btn btn-small bg-white">
                    Log out
                  </button>
                  {user.isAdmin && (
                    <Link
                      to="/admin"
                      className="btn btn-small bg-white"
                      onClick={() => setMenuOpend(false)}
                    >
                      Admin
                    </Link>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
