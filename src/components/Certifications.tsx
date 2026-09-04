import { useMemo, useState } from "react";
import { Award, Search, X } from "lucide-react";
import { certificateCategories, certificates, type Certificate } from "@/data/portfolio";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const filters = ["All", ...certificateCategories] as const;

export function Certifications() {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Certificate | null>(null);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return certificates.filter(
      (c) =>
        (category === "All" || c.category === category) &&
        (!q ||
          c.title.toLowerCase().includes(q) ||
          c.issuer.toLowerCase().includes(q) ||
          (c.date ?? "").toLowerCase().includes(q)),
    );
  }, [category, query]);

  return (
    <section id="certifications" className="section-shell">
      <SectionHeading
        eyebrow="Certifications"
        title="Certificates, simulations and courses"
        description="Industry job simulations, virtual internship certificates and technical courses. Search or filter to explore."
      />

      <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="glass flex w-full items-center gap-2 rounded-full px-4 py-2.5 sm:max-w-xs">
          <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search certificates"
            aria-label="Search certificates"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          {query ? (
            <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
              <X className="size-4 text-muted-foreground" />
            </button>
          ) : null}
        </div>
        <p className="text-xs text-muted-foreground">
          {visible.length} of {certificates.length} shown
        </p>
      </Reveal>

      <Reveal className="mt-5 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setCategory(f)}
            aria-pressed={category === f}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-medium transition-colors",
              category === f
                ? "gradient-brand border-transparent text-primary-foreground"
                : "border-border text-muted-foreground hover:text-foreground",
            )}
          >
            {f}
          </button>
        ))}
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((c, i) => (
          <Reveal key={`${c.title}-${c.issuer}`} delay={Math.min(i, 8) * 50}>
            <button
              type="button"
              onClick={() => setSelected(c)}
              className="glass glass-hover flex h-full w-full flex-col overflow-hidden rounded-2xl text-left"
            >
              <div className="relative aspect-16/10 w-full overflow-hidden border-b border-border">
                {c.image ? (
                  <img
                    src={c.image}
                    alt={`${c.title} certificate`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="bg-grid grid size-full place-items-center bg-secondary/40">
                    <Award className="size-8 text-primary/70" aria-hidden />
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-4">
                <p className="font-mono text-[10px] tracking-[0.16em] text-primary uppercase">
                  {c.category}
                </p>
                <h3 className="mt-2 text-sm leading-snug font-semibold">{c.title}</h3>
                <p className="mt-auto pt-3 text-xs text-muted-foreground">
                  {c.issuer}
                  {c.date ? ` · ${c.date}` : ""}
                </p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          No certificates match that search.
        </p>
      ) : null}

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-h-[88vh] overflow-y-auto sm:max-w-3xl">
          {selected ? (
            <>
              <DialogHeader>
                <DialogTitle className="pr-6 text-xl">{selected.title}</DialogTitle>
              </DialogHeader>
              <p className="text-sm text-muted-foreground">
                {selected.issuer}
                {selected.date ? ` · ${selected.date}` : ""} · {selected.category}
              </p>
              {selected.image ? (
                <img
                  src={selected.image}
                  alt={`${selected.title} certificate, full size`}
                  className="w-full rounded-xl border border-border"
                />
              ) : (
                <div className="bg-grid grid aspect-16/10 w-full place-items-center rounded-xl border border-border bg-secondary/30 text-center">
                  <div className="px-6">
                    <Award className="mx-auto size-8 text-primary/70" aria-hidden />
                    <p className="mt-3 text-xs text-muted-foreground">
                      Certificate image not added yet. Save the image to
                      <span className="font-mono"> public/certificates/</span> and set its path in
                      the portfolio data file.
                    </p>
                  </div>
                </div>
              )}
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
