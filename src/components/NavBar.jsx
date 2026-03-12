import React from "react";
import { useDispatch } from "react-redux";
import { logOutauth } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logOutauth());
    navigate("/login");
  };
  return (
    <nav className="relative bg-gray-800">
      <div className="mx-auto  px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              command="--toggle"
              commandfor="mobile-menu"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
            >
              Logo
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <h1 className="text-white text-xl">My App </h1>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  aria-current="page"
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                >
                  Dashboard
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              onClick={handleLogout}
              type="button"
              className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-white"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
