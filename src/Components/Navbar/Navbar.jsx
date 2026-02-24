import React, { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { IoMoonOutline } from "react-icons/io5";
// import logo from '../../assets/logo.webp'

import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const [isMenuActive, setIsMenuActive] = useState(false);

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header className="sticky-header navbar ">
      <nav className="flex between wrapper  ">
        <a href="#home" className="logo" onClick={() => setMenu("home")}>
          <span>𝔸</span> ᗩᗰIT.
        </a>

        {/* DESKTOP MENU */}
        <ul className="flex gap-2 desktop-menu ">
          <li>
            <a href="#home" onClick={() => setMenu("home")} className={`link ${menu === "home" ? "active" : ""}`}>
              Home
            </a>
          </li>

          <li>
            <a href="#services" onClick={() => setMenu("services")} className={`link ${menu === "services" ? "active" : ""}`}>
              Services
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setMenu("about")} className={`link ${menu === "about" ? "active" : ""}`}>
              About Me
            </a>
          </li>

          <li>
            <a href="#projects" onClick={() => setMenu("projects")} className={`link ${menu === "projects" ? "active" : ""}`}>
              Projects
            </a>
          </li>

          <li>
            <a href="#education" onClick={() => setMenu("education")} className={`link ${menu === "education" ? "active" : ""}`}>
              Education
            </a>
          </li>

          <li>
            <a href="#skills" onClick={() => setMenu("skills")} className={`link ${menu === "skills" ? "active" : ""}`}>
              Skills
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenu("contact")} className={`link ${menu === "contact" ? "active" : ""}`}>
              Contact Me
            </a>
          </li>
        </ul>

        <div className="flex gap-2 nav-action">
          <button
            type="button"
            className="icon-container border-inverse"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <FiSun /> : <IoMoonOutline />}
          </button>
          <a href="#contact" className="desktop-menu" onClick={() => setMenu("contact")}>
             <span className="button">
            Let's Talk
            </span>
          </a>
          <button type="button" className="hamburger" onClick={toggleMenu}>
            {isMenuActive ? <FaXmark /> : <FaBarsStaggered />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <ul className={`mobile-menu ${isMenuActive ? "mobile-menu-active" : ""}`}>
          <li>
            <a href="#home" onClick={() => { setMenu("home"); setIsMenuActive(false); }} className="link">
              Home
            </a>
          </li>

          <li>
            <a href="#services" onClick={() => { setMenu("services"); setIsMenuActive(false); }} className="link">
              Services
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => { setMenu("about"); setIsMenuActive(false); }} className="link">
              About Me
            </a>
          </li>

          <li>
            <a href="#projects" onClick={() => { setMenu("projects"); setIsMenuActive(false); }} className="link">
              Projects
            </a>
          </li>

          <li>
            <a href="#education" onClick={() => { setMenu("education"); setIsMenuActive(false); }} className="link">
              Education
            </a>
          </li>

          <li>
            <a href="#skills" onClick={() => { setMenu("skills"); setIsMenuActive(false); }} className="link">
              Skills
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => { setMenu("contact"); setIsMenuActive(false); }} className="link">
              Contact Me
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => { setMenu("contact"); setIsMenuActive(false); }} className="btn">
              Let's Talk
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
