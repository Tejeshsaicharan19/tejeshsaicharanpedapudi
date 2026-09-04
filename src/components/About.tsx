import { about, education, hobbies, languages, membership } from "@/data/portfolio";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="A Computer Science student building with AI and data"
        description="B.Tech in Computer Science & Engineering at Dadi Institute of Engineering and Technology, Visakhapatnam."
      />

      <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr]">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={280} className="glass rounded-2xl p-6">
            <h3 className="text-base font-semibold">Professional Membership</h3>
            <p className="mt-1 text-sm text-primary">{membership.org}</p>
            <p className="text-xs text-muted-foreground">{membership.role}</p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              {membership.responsibilities.map((r) => (
                <li key={r} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {about.highlights.map((h, i) => (
              <Reveal key={h.label} delay={i * 70} className="glass glass-hover rounded-2xl p-4">
                <p className="gradient-text font-display text-2xl font-bold">{h.value}</p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">{h.label}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="glass rounded-2xl p-5">
            <h3 className="text-sm font-semibold">Hobbies</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {hobbies.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"
                >
                  {h}
                </span>
              ))}
            </div>
            <h3 className="mt-5 text-sm font-semibold">Languages</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {languages.map((l) => (
                <span
                  key={l}
                  className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"
                >
                  {l}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={180} className="glass rounded-2xl p-5">
            <h3 className="text-sm font-semibold">Currently</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {education[0]?.degree} — {education[0]?.period}, {education[0]?.score}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
