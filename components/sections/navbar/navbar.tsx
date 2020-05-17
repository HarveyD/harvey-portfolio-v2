import React from "react";

import DarkModeToggle from "./dark-mode-toggle/dark-mode-toggle";

import "./navbar.scss";

const links = [
  { description: "About", link: "/#about" },
  { description: "Experience", link: "/#experience" },
  { description: "Education", link: "/#education" },
  { description: "Projects", link: "/#projects" },
  { description: "Skills", link: "/#skills" },
  { description: "Contact", link: "/#contact" },
  { description: "Blog", link: "https://blog.harveydelaney.com" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <div className="nav-items-container">
          {links.map(({ description, link }) => (
            <a className="nav-item" href={link}>
              {description}
            </a>
          ))}
        </div>

        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
