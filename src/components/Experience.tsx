import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Virtual internships"
        description="Structured, remote learning programmes completed with industry partners. These are virtual internships, not employment."
      />

      <ol className="relative ml-3 border-l border-border pl-8">
        {experience.map((e, i) => (
          <Reveal as="li" key={e.role} delay={i * 80} className="relative pb-8 last:pb-0">
            <span className="gradient-brand absolute top-1.5 -left-[2.55rem] grid size-7 place-items-center rounded-full text-primary-foreground ring-4 ring-background">
              <Briefcase className="size-3.5" aria-hidden />
            </span>
            <div className="glass glass-hover rounded-2xl p-5">
              <p className="font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
                {e.period}
              </p>
              <h3 className="mt-2 text-base font-semibold">{e.role}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
