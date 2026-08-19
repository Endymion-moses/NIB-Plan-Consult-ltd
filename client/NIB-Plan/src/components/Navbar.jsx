import  { useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = ({ theme, onThemeToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Common styling for active link state
  const linkStyles = ({ isActive }) =>
    `transition-colors duration-200 hover:text-blue-900 text-gray-700 text-sm ${isActive ? 'text-gray-900 font-bold' : ''}`;

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-white/95 to-blue-100/95 text-white shadow-md backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:px-8">

        {/* Logo Container */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="NIB-Plan Logo" className="h-10  w-auto object-contain" />
        </NavLink>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-6 text-sm font-medium md:flex lg:gap-8">
          <NavLink to="/" className={linkStyles}>Home</NavLink>
          <NavLink to="/about" className={linkStyles}>About Us</NavLink>
          <NavLink to="/services" className={linkStyles}>Services</NavLink>
          <NavLink to="/projects" className={linkStyles}>Projects</NavLink>
          <NavLink to="/contact" className={linkStyles}>Contact</NavLink>
        </div>

        <button
          type="button"
          onClick={onThemeToggle}
          className="ml-auto mr-2 rounded-full border border-blue-200 px-3 py-2 text-sm font-semibold text-blue-900 transition hover:bg-blue-100 md:ml-6 md:mr-0"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          aria-pressed={theme === "dark"}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
          <span className="ml-1.5 hidden sm:inline">{theme === "dark" ? "Light" : "Dark"}</span>
        </button>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 cursor-pointer focus:outline-none md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 rounded bg-blue-900 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-6 rounded bg-blue-900 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 rounded bg-blue-900 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Dropdown Overlay */}
      <div
        className={`absolute inset-x-3 top-full flex flex-col items-center gap-5 rounded-b-xl border border-blue-100 bg-blue-50 py-6 text-base font-medium shadow-lg transition-all duration-300 ease-in-out transform md:hidden ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <NavLink to="/" onClick={toggleMenu} className={linkStyles}>Home</NavLink>
        <NavLink to="/about" onClick={toggleMenu} className={linkStyles}>About Us</NavLink>
        <NavLink to="/services" onClick={toggleMenu} className={linkStyles}>Services</NavLink>
        <NavLink to="/projects" onClick={toggleMenu} className={linkStyles}>Projects</NavLink>
        <NavLink to="/contact" onClick={toggleMenu} className={linkStyles}>Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
