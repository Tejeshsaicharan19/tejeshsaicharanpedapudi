import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeading eyebrow="Education" title="Academic background" />

      <div className="grid gap-4 lg:grid-cols-3">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 80} className="glass glass-hover rounded-2xl p-6">
            <div className="gradient-brand grid size-10 place-items-center rounded-xl text-primary-foreground">
              <GraduationCap className="size-5" aria-hidden />
            </div>
            <h3 className="mt-4 text-base leading-snug font-semibold">{e.degree}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{e.school}</p>
            <p className="mt-4 font-mono text-[11px] tracking-[0.16em] text-primary uppercase">
              {e.period}
            </p>
            <p className="mt-1 text-sm font-medium">{e.score}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
