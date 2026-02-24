import React from "react";
import { FaGithub, FaPhone } from "react-icons/fa";
import {
  FaXTwitter,
  FaSquareInstagram,
  FaLinkedin,
  FaPaperPlane,
  FaLocationDot,
} from "react-icons/fa6";
import { SiNetlify } from "react-icons/si";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="flex between border-btm p-block-2 gap-4">
          <h2>
            Let's <span className="green-text">Connect</span>
          </h2>

          <button className="btn"
  onClick={() =>
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=amitjadhav1202@gmail.com&su=Hiring%20Inquiry",
      "_blank"
    )
  }
>
 📧 Hire Me
</button>

        </div>

        <div className="p-block-7 flex flex-start gap-4">
          <div className="footer-wrapper">
            <a href="#" className="logo foot" >
              <span>𝔸</span> ᗩᗰIT.
            </a>

            <p className="mt-2">
              Complete Full-stack development specializing in React.js with a
              passion for creating responsive and user-friendly web applications
              from NetTech India .
            </p>

            <div className="flex gap-1 mt-2 ">
              <a
                href="https://github.com/amit1428"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-container green-inverse hover"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-container green-inverse"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/acoder404?igsh=MW00eDRnNnhuN3lpNA=="
                target="_blank"
                rel="noopener noreferrer"
                className="icon-container green-inverse"
              >
                <FaSquareInstagram />
              </a>
              <a
                href="https://netlify.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-container green-inverse"
              >
                <SiNetlify />
              </a>
              <a
                href="https://www.linkedin.com/in/amit-jadhav1428/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-container green-inverse"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <ul className="footer-wrapper">
            <li>
              <h6>Navigation</h6>
            </li>

            <li className="mt-2">
              <a href="#" className="link">
                Home
              </a>
            </li>

            <li className="mt-2">
              <a href="#" className="link">
                Services
              </a>
            </li>

            <li className="mt-2">
              <a href="#" className="link">
                About Me
              </a>
            </li>

            <li className="mt-2">
              <a href="#" className="link">
                Projects
              </a>
            </li>

            <li className="mt-2">
              <a href="#" className="link">
                Skills
              </a>
            </li>

            <li className="mt-2">
              <a href="#" className="link">
                Contact Me
              </a>
            </li>
          </ul>

          <ul className="footer-wrapper">
            <li>
              <h6>Contact</h6>
            </li>

            <li className="mt-2">
              <a href="#" className="link">
                <span>
                  <FaPhone />{" "}
                </span>{" "}
                +91 7887535425
              </a>
            </li>

            {/* <li className="mt-2">
              <a href="#" className="link">
                <span>
                  <TbWorldWww />
                </span>{" "}
                www.Acode.com
              </a>
            </li> */}

            <li className="mt-2">
              <a href="#" className="link">
                <span>
                  <MdOutlineMarkEmailRead />
                </span>{" "}
                amitjadhav1202@gmail.com
              </a>
            </li>

            <li className="mt-2">
              <a href="#" className="link">
                <span>
                  <FaLocationDot />
                </span>{" "}
                301.L05.Kedar Housing Socity Sector.21 Pllot.08 Near Pendher
                Metro Station Taloja Phase - 2 <br />
                Navi Mumbai
              </a>
            </li>
          </ul>

          <div className="footer-wrapper">
            <h6>Get the Latest Information</h6>
            <div className="footer-input mt-2 flex stretch">
              <input
                type="email"
                autoComplete="off"
                placeholder="email Here"
                className="email-field"
              />
              <button className="input-btn">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="wrapper flex between">
          <p>© 2026 @coder. All rights reserved</p>
          <p>
            <a href="/terms">Terms</a> | <a href="/privacy">Privacy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
