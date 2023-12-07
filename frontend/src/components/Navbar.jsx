import CartIcon from "../assets/cart.svg";
import AvatarIcon from "../assets/avatar.svg";

function NavBar() {
  return (
    <nav className="fixed top-0 z-20 w-full py-4 bg-white">
      <div className="container flex space-x-8">
        <div className="flex flex-1 justify-between">
          <div className="font-brand text-4xl leading-10 font-black">
            Furniture
          </div>
        </div>
        <div className="flex space-x-6">
          <img className="cursor-pointer w-8 h-8" src={CartIcon} />
          <img className="cursor-pointer w-8 h-8" src={AvatarIcon} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
