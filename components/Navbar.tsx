import { Link } from "react-router";
import Navitem from "./Navitem";
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="bg-base-200 sticky top-0 z-10">
      <div className="navbar max-w-2lg mx-auto px-5">
        <div className="navbar-start">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <HiMenuAlt2 />
            </label>
          </div>
          <Link to="/">
            <img
              className="max-w-40"
              src="/assets/logo.webp"
              alt="Affirm Logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-semibold px-1">
            <Navitem />
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="login">
            <button className="btn btn-success">Login</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
