"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("ane_theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      document.documentElement.setAttribute("data-theme", initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("ane_theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  if (!mounted) {
    return (
      <div
        style={{
          width: "38px",
          height: "38px",
          borderRadius: "50%",
          backgroundColor: "rgba(14, 20, 32, 0.8)",
          border: "1px solid var(--border-subtle)",
        }}
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "Light" : "Dark"} mode`}
      className="theme-toggle-btn"
      style={{
        width: "38px",
        height: "38px",
        borderRadius: "50%",
        backgroundColor: "var(--bg-surface)",
        border: "1px solid var(--border-subtle)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "var(--color-text-main)",
        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        position: "relative",
      }}
    >
      {theme === "dark" ? (
        <Sun size={17} color="var(--color-amber)" className="theme-icon" />
      ) : (
        <Moon size={17} color="var(--color-cyan)" className="theme-icon" />
      )}
    </button>
  );
}
