import React, { useState } from 'react'
import Button from '../atoms/Button'
import { Link } from "react-router-dom";


const MainNavbar = () => {
  const [ menuOpen, setMenuOpen ] = useState( false ) // state to track menu

  return (
    <>
      <div className="flex items-center justify-between py-3  lg:pt-4 lg:pb-5  xl:pt-5 xl:pb-6  border-b border-white-95 max-w-[1595px] mx-auto">
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
          </div>
        </div>

        {/* Right: Auth buttons + Hamburger */}
        <div className="flex items-center gap-5">
          {/* Auth Buttons */}
          <div className="flex items-center">
            <Button text="Sign Up" variation="link" size="small" />
            <Link to="/login">
              <Button text="Login" variation="primary" size="small" />
            </Link>
          </div>

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
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-orange-50 border-b border-white-95 px-4 py-3 flex flex-col gap-3">
          <Button text="Home" variation="link" size="small" />
          <Button text="Courses" variation="link" size="small" />
          <Button text="About Us" variation="link" size="small" />
          <Button text="Pricing" variation="link" size="small" />
          <Button text="Contact" variation="link" size="small" />
        </div>
      )}
    </>
  )
}

export default MainNavbar
