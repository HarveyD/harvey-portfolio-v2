import React, { useCallback } from "react";

import DarkModeToggle from "./dark-mode-toggle/dark-mode-toggle";

import "./navbar.scss";

interface NavItem {
  description: string;
  link: string;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  { description: "About", link: "#about" },
  { description: "Experience", link: "#experience" },
  { description: "Education", link: "#education" },
  { description: "Projects", link: "#projects" },
  { description: "Skills", link: "#skills" },
  { description: "Contact", link: "#contact" },
  {
    description: "Blog",
    link: "https://blog.harveydelaney.com",
    isExternal: true,
  },
];

const Navbar: React.FC = () => {
  const scrollIntoView = useCallback((e, item) => {
    if (item.isExternal) {
      return;
    }

    e.preventDefault();

    document.querySelector(item.link).scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <div className="nav-items-container">
          {navItems.map((item) => (
            <a
              onClick={(e) => scrollIntoView(e, item)}
              className="nav-item"
              href={item.link}
            >
              {item.description}
            </a>
          ))}
        </div>

        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
