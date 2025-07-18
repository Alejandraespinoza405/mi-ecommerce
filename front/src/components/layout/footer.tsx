import React from "react";
import NavItem from "./navbar/nav-item";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow-sm m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-800 sm:text-center">
          © 2025{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            The Crafted Home™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-800 sm:mt-0">
          <NavItem href="profile" label="Perfil" />
          <NavItem href="cart" label="Carrito" />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
