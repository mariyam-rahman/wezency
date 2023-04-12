import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Header.css";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Header = () => {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex flex-col header container mx-auto py-5">
      <div className="flex">
        <button className="sm:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <XIcon className="h-6 w-6" ariaHidden="true" />
          ) : (
            <MenuIcon className="h-6 w-6" ariaHidden="true" />
          )}
        </button>
        <h2 className="font-extrabold text-4xl">Wezency</h2>
        <div className="sm:hidden flex-1"></div>
        <div
          className="hidden sm:block sm:ml-6 w-auto flex-1 my-auto"
          style={{}}
        >
          <div
            className="flex justify-center"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="applied-jobs">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </div>
        <button className="primary-btn">Start Applying</button>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="applied-jobs">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
