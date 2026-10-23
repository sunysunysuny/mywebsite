import { Server, Monitor, Plug, Wrench, type LucideIcon } from "lucide-react";
import { skills } from "@/data/portfolio";
import SectionHead from "./SectionHead";

const icons: Record<string, LucideIcon> = { Backend: Server, Frontend: Monitor, "APIs & Integrations": Plug, Tools: Wrench };

const style = {
  Expert: "border-accent bg-accent/10 text-fg",
  Proficient: "border-line bg-elevated text-fg",
  Familiar: "border-dashed border-line text-muted",
};

export default function Skills() {
  return (
    <section id="skills" className="section container-x">
      <SectionHead eyebrow="03 · Skills" title="Toolbox, sharpened over 9+ years" />
      <p className="-mt-6 mb-8 flex flex-wrap gap-3 text-xs text-muted md:-mt-10">
        {(Object.keys(style) as (keyof typeof style)[]).map((l) => (
          <span key={l} className={`rounded-full border px-2.5 py-1 ${style[l]}`}>{l}</span>
        ))}
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(skills).map(([group, list]) => {
          const Icon = icons[group];
          return (
            <div key={group} className="card p-5 sm:p-6">
              <h3 className="flex items-center gap-2 font-semibold"><Icon className="size-5 text-link" />{group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {list.map((s) => (
                  <li key={s.name} title={s.level} className={`rounded-lg border px-3 py-1.5 text-sm ${style[s.level]}`}>{s.name}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
