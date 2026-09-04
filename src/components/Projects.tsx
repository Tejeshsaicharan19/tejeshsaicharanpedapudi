import { useState } from "react";
import { ArrowUpRight, CalendarDays, Github } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Reveal, SectionHeading } from "@/components/Reveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Things I have designed and built"
        description="Academic and self-driven projects spanning IoT hardware, agentic AI and mobile development."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal
            key={p.name}
            delay={i * 90}
            className="glass glass-hover flex flex-col rounded-3xl p-7"
          >
            <span className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
              Project 0{i + 1}
            </span>
            <h3 className="mt-3 text-xl font-semibold">{p.name}</h3>
            {p.subtitle ? (
              <p className="mt-1 text-xs text-muted-foreground/90 italic">{p.subtitle}</p>
            ) : null}
            {p.duration ? (
              <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <CalendarDays className="size-3.5" aria-hidden /> {p.duration}
              </p>
            ) : null}
            <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tech.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
              {p.tech.length > 5 ? (
                <span className="rounded-md px-2 py-0.5 text-[11px] text-primary">
                  +{p.tech.length - 5} more
                </span>
              ) : null}
            </div>

            <div className="mt-7 flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => setSelected(p)}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                View Details <ArrowUpRight className="size-3.5" aria-hidden />
              </button>
              <a
                href={p.repo}
                aria-label={`${p.name} repository`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="size-3.5" aria-hidden /> Repository
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-6 text-xs text-muted-foreground">
        Repository links are placeholders until the actual URLs are added.
      </p>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          {selected ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selected.name}</DialogTitle>
                <DialogDescription>
                  {selected.subtitle ?? "Project details"}
                  {selected.duration ? ` · ${selected.duration}` : ""}
                </DialogDescription>
              </DialogHeader>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {selected.description}
              </p>
              <div>
                <h4 className="text-xs font-semibold tracking-wider uppercase">Technologies</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-border bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={selected.repo}
                className="gradient-brand mt-2 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <Github className="size-4" aria-hidden /> Repository
              </a>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
