// MainNavbar.jsx
import React, { useContext, useState } from "react";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";

const MainNavbar = () => {
  const [ menuOpen, setMenuOpen ] = useState( false );
  const { token, logout } = useContext( AuthContext );
  const [ sidebarOpen, setSidebarOpen ] = useState( false );

  return (
    <>
      <div className="flex items-center justify-between py-3 lg:pt-4 lg:pb-5 xl:pt-5 xl:pb-6 border-b border-white-95 max-w-[1595px] mx-auto">
        {/* Left: Logo */}
        <div className="flex items-center gap-12">
          <div>
            <a href="/">
              <img
                src="/assets/icons/logo-icon.svg"
                alt="Logo"
                className="rounded-lg w-11 h-11 xl:w-14 xl:h-14"
              />
            </a>
          </div>

          {/* Nav Links (desktop only) */}
          <div className="hidden lg:flex items-center">
            <a href="/" className="text-gray-15 hover:bg-white-95 px-3 py-2 rounded-md text-sm font-normal">Home</a>
            <a href="/courses" className="text-gray-15 hover:bg-white-95 px-3 py-2 rounded-md text-sm font-normal">Courses</a>
            <a href="/about" className="text-gray-15 hover:bg-white-95 px-3 py-2 rounded-md text-sm font-normal">About Us</a>
            <a href="/pricing" className="text-gray-15 hover:bg-white-95 px-3 py-2 rounded-md text-sm font-normal">Pricing</a>
            <a href="/contact" className="text-gray-15 hover:bg-white-95 px-3 py-2 rounded-md text-sm font-normal">Contact</a>

            {/* Dashboard opens sidebar */}
            <a
              href="#"
              onClick={() => setSidebarOpen( true )}
              className="text-gray-15 hover:bg-white-95 px-3 py-2 rounded-md text-sm font-normal"
            >
              Dashboard
            </a>
          </div>
        </div>

        {token ? (
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">User name</span>
            <Button text="Logout" variation="primary" size="medium" onClick={() => logout()} />
          </div>
        ) : (
          <div className="flex items-center gap-5">
            <div className="flex items-center">
              <Link to="/signup">
                <Button text="Sign Up" variation="link" size="small" />
              </Link>
              <Link to="/login">
                <Button text="Login" variation="primary" size="small" />
              </Link>
            </div>
          </div>
        )}

        {/* Hamburger (mobile only) */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen( !menuOpen )}>
            <img
              src="/assets/icons/hamburger-icon.svg"
              alt="Menu"
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-orange-50 border-b border-white-95 px-4 py-3 flex flex-col gap-3">
          <Button text="Home" variation="link" size="small" />
          <Button text="Courses" variation="link" size="small" />
          <Button text="About Us" variation="link" size="small" />
          <Button text="Pricing" variation="link" size="small" />
          <Button text="Contact" variation="link" size="small" />
          <Button text="Dashboard" variation="link" size="small" />
        </div>
      )}

      {/* -------------------------------------------------- */}
      {/* LEFT SIDEBAR (SLIDER BAR) */}
      {/* -------------------------------------------------- */}
      {sidebarOpen && (
        <>
          {/* Background Overlay */}
          <div
            onClick={() => setSidebarOpen( false )}
            className="fixed inset-0 bg-black/40 z-40"
          ></div>

          {/* Sidebar Panel */}
          <div className="fixed top-0 left-0 h-full w-64 bg-gray-70 shadow-lg z-50 p-5 transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Dashboard Menu</h2>
              <button onClick={() => setSidebarOpen( false )}>
                <img src="/assets/icons/close-icon.svg" alt="Close" className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <Link to="/my-courses" className="text-gray-800 hover:text-orange-500">
                My Courses
              </Link>

              <Link to="/add-course" className="text-gray-800 hover:text-orange-500">
                Add Course
              </Link>
            </div>
          </div>

        </>
      )}
    </>
  );
};

export default MainNavbar;
