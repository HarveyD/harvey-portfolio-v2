import React, { useCallback } from "react";

import "./dark-mode-toggle.scss";

const DarkModeToggle: React.FC = () => {
  const onDarkModeToggle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.target.checked;
      const portfolioContainer = document.querySelector("#portfolio-container");

      portfolioContainer.setAttribute("data-theme", isChecked ? "dark" : "");
    },
    []
  );

  return (
    <div className="dark-mode-toggle-container">
      <input
        onChange={onDarkModeToggle}
        type="checkbox"
        id="toggle"
        className="toggle"
      />
      <div className="emoji" />
      <label htmlFor="toggle" className="slider" />
    </div>
  );
};

export default DarkModeToggle;
