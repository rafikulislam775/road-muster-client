import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { logOut, user, userName } = useAuth();
  // console.log(user.displayName);

  const handleSignOut = () => {
    logOut()
      .then((res) => console.log("Sign-out successful.", res.user))
      .catch((err) => console.error("Sign-out failed.", err));
  };
  const menus = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-red-800" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-red-800" : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-red-800" : ""
          }
        >
          My Cart
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-red-800" : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-red-800" : ""
          }
        >
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    // <nav className="bg-transparent p-4 absolute w-full">
    // only for this background come to bottom the banner
    <div className="navbar bg-transparent p-4 absolute w-full shadow-lg text-white  ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menus}
          </ul>
        </div>
        <img
          className="w-10 md:w-16"
          src="https://i.ibb.co/g47v0kh/logo.png"
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menus}</ul>
      </div>
      <div className="navbar-end">
        <h1 className="mr-5">{user ? user.displayName || userName : ""}</h1>
        <button className="btn btn-outline btn-info btn-sm  ">
          {user ? (
            <p onClick={handleSignOut}>logout</p>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
