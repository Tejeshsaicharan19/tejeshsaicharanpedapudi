import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { navSections, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.5] },
    );
    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b" : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3"
      >
        <a href="#home" className="flex items-center gap-2.5" aria-label="Home">
          <span className="gradient-brand grid size-9 place-items-center rounded-xl font-display text-[13px] font-bold text-primary-foreground">
            TSC
          </span>
          <span className="hidden text-sm font-semibold sm:block">Tejesh Sai Charan</span>
        </a>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {navSections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 text-[13px] font-medium transition-colors",
                  active === id
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download
            className="gradient-brand hidden items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-semibold text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            <Download className="size-4" aria-hidden />
            Download Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-xl border border-border text-foreground xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass border-t xl:hidden">
          <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-1 px-5 py-4">
            {navSections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="col-span-2 mt-2">
              <a
                href={profile.resume}
                download
                onClick={() => setOpen(false)}
                className="gradient-brand flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <Download className="size-4" aria-hidden /> Download Resume
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
