import React, { useCallback } from "react";

const DarkModeToggle: React.FC = () => {
  const onDarkModeToggle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.target.checked;
      const portfolioContainer = document.querySelector("#portfolio-container");

      portfolioContainer.setAttribute("data-theme", isChecked ? "dark" : "");
    },
    []
  );

  return <input type="checkbox" onChange={onDarkModeToggle} />;
};

export default DarkModeToggle;
