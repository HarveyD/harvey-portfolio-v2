import React, { useCallback, useEffect, useState } from "react";

import "./dark-mode-toggle.scss";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const onDarkModeToggle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.target.checked;

      setDarkMode(isChecked);
    },
    []
  );

  useEffect(() => {
    const portfolioContainer = document.querySelector("#portfolio-container");

    portfolioContainer.setAttribute(
      "data-theme",
      darkMode === true ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <div className="dark-mode-toggle-container">
      <input
        onChange={onDarkModeToggle}
        type="checkbox"
        id="toggle"
        className="toggle"
        checked={darkMode}
      />
      <div className="emoji" />
      <label htmlFor="toggle" className="slider" />
    </div>
  );
};

export default DarkModeToggle;
