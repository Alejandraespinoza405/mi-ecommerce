import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { routes } from "@/routes";
import { AuthNavbar } from "./auth-navbar";

export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href={routes.home}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <LiaHandHoldingHeartSolid className="h-8 text-primary-500" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary-500">
            The Crafted Home
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center 
      text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none 
      focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <RxHamburgerMenu />
        </button>

        <AuthNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
