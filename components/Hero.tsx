import { ArrowRight, Download, Mail } from "lucide-react";
import { profile, highlights } from "@/data/portfolio";
import Typing from "./Typing";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-12 md:pt-36 md:pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgb(99_102_241/0.22),transparent_70%),radial-gradient(40%_40%_at_85%_20%,rgb(16_185_129/0.12),transparent_70%)]" />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-muted">
            <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald opacity-75" /><span className="relative size-2 rounded-full bg-emerald" /></span>
            {profile.availability}
          </p>
          <h1 className="mt-6 text-[clamp(2.25rem,7vw,4.25rem)] leading-[1.05] font-extrabold tracking-tight">
            Hi, I&apos;m {profile.shortName}.<br />
            <span className="bg-gradient-to-r from-accent to-emerald bg-clip-text text-transparent">{profile.title}</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">{profile.tagline}</p>
          <p className="mt-3 font-mono text-sm text-muted">
            Currently building with <Typing words={profile.roles} />
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn btn-primary">View Projects <ArrowRight className="size-4" /></a>
            <a href={profile.resume} download className="btn btn-ghost"><Download className="size-4" />Download Resume</a>
            <a href="#contact" className="btn btn-ghost"><Mail className="size-4" />Contact Me</a>
          </div>
        </div>

        {/* terminal card */}
        <div className="card overflow-hidden font-mono text-[13px] leading-relaxed">
          <div className="flex items-center gap-1.5 border-b border-line bg-elevated px-4 py-3">
            <span className="size-3 rounded-full bg-red-400" /><span className="size-3 rounded-full bg-yellow-400" /><span className="size-3 rounded-full bg-emerald" />
            <span className="ml-2 text-xs text-muted">~/himanshu</span>
          </div>
          <div className="space-y-2 p-5">
            <p><span className="text-emerald">$</span> whoami</p>
            <p className="text-muted">{profile.title} · {profile.location}</p>
            <p><span className="text-emerald">$</span> cat strengths.txt</p>
            {highlights.map((h) => <p key={h} className="text-muted"><span className="text-link">→</span> {h}</p>)}
            <p><span className="text-emerald">$</span> <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-accent" /></p>
          </div>
        </div>
      </div>
    </section>
  );
}
