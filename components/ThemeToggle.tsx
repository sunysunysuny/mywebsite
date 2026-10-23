"use client";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
  };
  return (
    <button onClick={toggle} aria-label="Toggle dark mode" className="grid size-11 place-items-center rounded-xl text-muted transition hover:bg-elevated hover:text-fg">
      <Sun className="hidden size-5 dark:block" />
      <Moon className="size-5 dark:hidden" />
    </button>
  );
}
