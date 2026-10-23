"use client";
import { useEffect, useState } from "react";
import { Download, Home, User, Briefcase, FolderGit2, Mail } from "lucide-react";
import { nav, profile } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

const tabs = [
  { id: "top", label: "Home", Icon: Home },
  { id: "about", label: "About", Icon: User },
  { id: "experience", label: "Work", Icon: Briefcase },
  { id: "projects", label: "Projects", Icon: FolderGit2 },
  { id: "contact", label: "Contact", Icon: Mail },
];

export default function Navbar() {
  const [active, setActive] = useState("top");
  const [progress, setProgress] = useState(0);

  // active-section highlight
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // reading progress
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      setProgress(h > 0 ? scrollY / h : 0);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/90 pt-[env(safe-area-inset-top)] backdrop-blur-md">
        <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-accent to-emerald" style={{ transform: `scaleX(${progress})` }} />
        <nav className="container-x flex h-14 items-center justify-between md:h-16" aria-label="Main">
          <a href="#top" className="font-mono text-lg font-bold">
            {profile.shortName}<span className="text-accent">.</span>
          </a>
          <div className="flex items-center gap-1">
            <div className="hidden md:flex">
              {nav.map((n) => (
                <a key={n.id} href={`#${n.id}`} className={`relative px-3 py-2 text-sm font-medium transition hover:text-link ${active === n.id ? "text-link" : "text-muted"}`}>
                  {n.label}
                  {active === n.id && <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-accent" />}
                </a>
              ))}
            </div>
            <ThemeToggle />
            <a href={profile.resume} download aria-label="Download resume" className="btn btn-primary ml-1 px-3 md:px-5">
              <Download className="size-4" /><span className="hidden sm:inline">Resume</span>
            </a>
          </div>
        </nav>
      </header>

      {/* app-style bottom tab bar (mobile) */}
      <nav aria-label="Sections" className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-bg/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
        <ul className="grid grid-cols-5">
          {tabs.map(({ id, label, Icon }) => (
            <li key={id}>
              <a href={`#${id}`} aria-current={active === id ? "true" : undefined}
                className={`flex min-h-14 flex-col items-center justify-center gap-0.5 text-[11px] font-medium transition active:scale-90 ${active === id ? "text-link" : "text-muted"}`}>
                <Icon className="size-5" strokeWidth={active === id ? 2.4 : 1.8} />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
