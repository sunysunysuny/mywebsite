"use client";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/portfolio";

function Count({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(to);
  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setN(0);
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      const start = performance.now();
      const step = (t: number) => {
        const p = Math.min((t - start) / 1000, 1);
        setN(Math.round(to * p));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{n}</span>;
}

export default function Stats() {
  return (
    <section aria-label="At a glance" className="container-x">
      <dl className="card grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse p-5 text-center sm:p-6">
            <dt className="mt-1 text-xs text-muted sm:text-sm">{s.label}</dt>
            <dd className="text-3xl font-bold sm:text-4xl">
              <Count to={s.value} />
              <span className="text-accent">{s.suffix}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
