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
];

const Navbar: React.FC = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        {links.map(({ description, link }) => (
          <a className="nav-item" href={link}>
            {description}
          </a>
        ))}
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
