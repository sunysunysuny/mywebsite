import { CheckCircle2, MapPin, Globe2 } from "lucide-react";
import { about, highlights, profile } from "@/data/portfolio";
import SectionHead from "./SectionHead";

export default function About() {
  return (
    <section id="about" className="section container-x">
      <SectionHead eyebrow="01 · About" title="Engineer who owns the outcome, not just the ticket" />
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
          {about.map((p) => <p key={p}>{p}</p>)}
          <p className="flex flex-wrap gap-x-5 gap-y-2 pt-2 text-sm">
            <span className="inline-flex items-center gap-1.5"><MapPin className="size-4 text-link" />{profile.location}</span>
            <span className="inline-flex items-center gap-1.5"><Globe2 className="size-4 text-link" />Remote & on-site</span>
          </p>
        </div>
        <ul className="card space-y-4 p-5 sm:p-6">
          <li className="eyebrow">What I bring</li>
          {highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm sm:text-base">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald" />{h}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
