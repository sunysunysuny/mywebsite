import { Layers, ShieldCheck, Gauge, Workflow, Code2, Users, type LucideIcon } from "lucide-react";
import { principles } from "@/data/portfolio";
import SectionHead from "./SectionHead";

const icons: Record<string, LucideIcon> = { Layers, ShieldCheck, Gauge, Workflow, Code2, Users };

export default function HowIWork() {
  return (
    <section id="how" className="section container-x">
      <SectionHead eyebrow="02 · How I work" title="Principles behind every system I build" />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((p) => {
          const Icon = icons[p.icon];
          return (
            <li key={p.title} className="card p-5 transition hover:-translate-y-1 hover:border-accent sm:p-6">
              <span className="grid size-11 place-items-center rounded-xl bg-accent/10 text-link"><Icon className="size-5" /></span>
              <h3 className="mt-4 font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
