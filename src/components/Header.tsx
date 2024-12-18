import { NavLink } from "react-router";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-center px-8  py-4">
        <h1 className="text-2xl font-bold">Image Gallery</h1>
        {/* <div>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
