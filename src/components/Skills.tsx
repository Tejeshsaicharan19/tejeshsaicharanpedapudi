import { skillGroups } from "@/data/portfolio";
import { Reveal, SectionHeading } from "@/components/Reveal";
import {
  Braces,
  Boxes,
  BrainCircuit,
  Smartphone,
  Wrench,
  CircuitBoard,
  type LucideIcon,
} from "lucide-react";

const icons: LucideIcon[] = [Braces, Boxes, BrainCircuit, Smartphone, Wrench, CircuitBoard];

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="Tools and technologies I work with"
        description="Languages, libraries and platforms used across coursework, projects, internships and certifications."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[i % icons.length]!;
          return (
            <Reveal
              key={group.name}
              delay={i * 70}
              className="glass glass-hover group rounded-2xl p-6"
            >
              <div className="gradient-brand grid size-10 place-items-center rounded-xl text-primary-foreground">
                <Icon className="size-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-base font-semibold">{group.name}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
