import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(75%_60%_at_50%_25%,black,transparent)]" />
      <div className="gradient-brand float-slow pointer-events-none absolute -top-40 left-1/2 size-[38rem] -translate-x-1/2 rounded-full opacity-20 blur-[130px]" />
      <div className="gradient-brand pointer-events-none absolute top-40 -right-32 size-80 rounded-full opacity-15 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-5xl px-5 text-center">
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
          <span className="size-1.5 rounded-full bg-primary" /> Open to internships & placements
        </span>

        <h1 className="mt-8 font-display text-4xl leading-[1.05] font-bold sm:text-6xl lg:text-7xl">
          <span className="block text-foreground/80">{profile.firstName}</span>
          <span className="gradient-text block">{profile.lastName}</span>
        </h1>

        <p className="mt-6 text-lg font-medium sm:text-xl">{profile.title}</p>
        <p className="mt-3 font-mono text-xs tracking-[0.22em] text-primary uppercase sm:text-sm">
          {profile.focus.join(" • ")}
        </p>

        <p className="mx-auto mt-7 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {profile.intro}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="gradient-brand inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            View My Projects <ArrowRight className="size-4" aria-hidden />
          </a>
          <a
            href={profile.resume}
            download
            className="glass glass-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            <Download className="size-4" aria-hidden /> Download Resume
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <IconLink href={profile.github} label="GitHub">
            <Github className="size-4.5" aria-hidden />
          </IconLink>
          <IconLink href={profile.linkedin} label="LinkedIn">
            <Linkedin className="size-4.5" aria-hidden />
          </IconLink>
          <IconLink href={`mailto:${profile.email}`} label="Email">
            <Mail className="size-4.5" aria-hidden />
          </IconLink>
        </div>

        <p className="mt-8 inline-flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="size-3.5" aria-hidden /> {profile.location}
        </p>
      </div>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="glass glass-hover grid size-11 place-items-center rounded-xl text-muted-foreground hover:text-foreground"
    >
      {children}
    </a>
  );
}
