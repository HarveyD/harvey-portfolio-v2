"use client";

import { useEffect, useState } from "react";

import { Icon } from "./icons";
import styles from "./theme-toggle.module.scss";

const STORAGE_KEY = "harvey-portfolio-theme";

type Theme = "light" | "dark";

function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") {
    return null;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return null;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const nextTheme =
      (document.documentElement.dataset.theme as Theme | undefined) ??
      getStoredTheme() ??
      "dark";

    setTheme(nextTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      aria-label={`Switch to ${nextTheme} theme`}
      onClick={() => setTheme(nextTheme)}
    >
      <span className={styles.iconWrap}>
        <Icon name={theme === "dark" ? "sun" : "moon"} width={18} height={18} />
      </span>
      <span className={styles.label}>{theme === "dark" ? "Light" : "Dark"} mode</span>
    </button>
  );
}
