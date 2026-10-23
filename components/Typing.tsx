"use client";
import { useEffect, useState } from "react";

export default function Typing({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, [words.length]);
  return <span key={i} className="inline-block animate-[fadeUp_.5s_ease] text-link">{words[i]}</span>;
}
