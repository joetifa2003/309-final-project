import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AvatarIcon from "../assets/avatar.svg";
import CartIcon from "../assets/cart.svg";
import { UserContext } from "../context/user";

function NavBar() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <nav className="fixed top-0 z-20 w-full bg-white py-4">
      <div className="container flex space-x-8">
        <div className="flex flex-1 justify-between">
          <Link to={"/"} className="font-brand text-4xl font-black leading-10">
            Furniture
          </Link>
        </div>
        <div className="flex space-x-6">
          <img className="h-8 w-8 cursor-pointer" src={CartIcon} />
          <img className="h-8 w-8 cursor-pointer" src={AvatarIcon} />
          <Link to={"/signup"}>Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
