import { Trophy, FileText, HeartHandshake } from "lucide-react";
import { achievements, publications, volunteering } from "@/data/portfolio";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function Achievements() {
  return (
    <>
      <section id="achievements" className="section-shell">
        <SectionHeading eyebrow="Achievements" title="Recognition" />
        <div className="grid gap-4 lg:grid-cols-2">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <article className="glass glass-hover relative overflow-hidden rounded-3xl p-8">
                <div className="gradient-brand pointer-events-none absolute -top-20 -right-16 size-56 rounded-full opacity-20 blur-3xl" />
                <div className="gradient-brand grid size-12 place-items-center rounded-2xl text-primary-foreground">
                  <Trophy className="size-6" aria-hidden />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.org}</p>
                <p className="mt-4 font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
                  {a.date}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="publications" className="section-shell">
        <SectionHeading
          eyebrow="Publications"
          title="Conference abstracts"
          description="Abstracts presented at national conferences."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {publications.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="glass glass-hover rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-secondary/50 text-primary">
                  <FileText className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="volunteering" className="section-shell">
        <SectionHeading
          eyebrow="Community"
          title="Volunteering & community service"
          description="Campus and city initiatives I contribute to outside academics."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {volunteering.map((v, i) => (
            <Reveal key={v.title} delay={i * 80} className="glass glass-hover rounded-2xl p-6">
              <span className="grid size-10 place-items-center rounded-xl border border-border bg-secondary/50 text-primary">
                <HeartHandshake className="size-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-base leading-snug font-semibold">{v.title}</h3>
              <p className="mt-1 font-mono text-[11px] tracking-[0.16em] text-primary uppercase">
                {v.period}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
