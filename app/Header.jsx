import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="navbar bg-green-50">
        <div className="navbar-start">
          <a
            href={"/"}
            className="ml-6 font-bold text-2xl text-green-500 hover:text-green-600 duration-300"
          >
            Bhukkad
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/"}>HOME</Link>
            </li>
            <li>
              <Link href={"/recipes"}>RECIPES</Link>
            </li>
            <li>
              <Link href={"/about"}>ABOUT US</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <hr className="mx-5" /> */}
    </>
  );
};

export default Header;
