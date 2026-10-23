import { experience } from "@/data/portfolio";
import SectionHead from "./SectionHead";

export default function Experience() {
  return (
    <section id="experience" className="section container-x">
      <SectionHead eyebrow="04 · Experience" title="9+ years shipping production systems" sub="From database engineering to owning fintech platforms end-to-end." />
      <ol className="relative space-y-8 border-l-2 border-line pl-6 sm:pl-8">
        {experience.map((job, i) => (
          <li key={job.company} className="relative">
            <span className={`absolute top-1.5 -left-[33px] size-4 rounded-full border-4 border-bg sm:-left-[41px] ${i === 0 ? "bg-emerald" : "bg-accent"}`} />
            <article className="card p-5 sm:p-6">
              <header className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="text-link">{job.company} <span className="text-muted">· {job.place}</span></p>
                </div>
                <time className="font-mono text-xs text-muted sm:pt-1.5">{job.dates}</time>
              </header>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted sm:text-base">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-2.5"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />{p}</li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2">
                {job.stack.map((s) => <li key={s} className="rounded-md bg-elevated px-2 py-1 font-mono text-xs text-muted">{s}</li>)}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
