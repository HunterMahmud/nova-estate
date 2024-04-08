import React from "react";
import { Link, NavLink } from "react-router-dom";
import contextProvider from "./contextProvider";

const Navbar = () => {
  const { user, logOut } = contextProvider();
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {user ? (
        <li>
          <NavLink to="/updateprofile">Update Profile</NavLink>
        </li>
      ) : (
        <>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
    </>
  );
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("logout");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Nova Estate
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-3">
          {user ? (
            <>
              <img
                alt={user?.displayName ? user.displayName : 'Name not found'}
                title={user?.displayName ? user.displayName : 'Name not set'}
                className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100"
                src={user?.photoURL ? user.photoURL : 'https://i.ibb.co/tJTV83n/user-image-not-found.jpg'}
              />
              <button onClick={handleLogOut} className="btn btn-secondary">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
