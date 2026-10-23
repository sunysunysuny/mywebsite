"use client";
import { useEffect } from "react";

// Registers the offline cache after the page has loaded, so it never competes with first paint.
export default function SWRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;
    const reg = () => navigator.serviceWorker.register("/sw.js").catch(() => {});
    if (document.readyState === "complete") reg();
    else addEventListener("load", reg, { once: true });
  }, []);
  return null;
}
