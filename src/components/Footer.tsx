import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © 2026 Tejesh Sai Charan Pedapudi. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            aria-label="GitHub"
            className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground hover:text-foreground"
          >
            <Github className="size-4" aria-hidden />
          </a>
          <a
            href={profile.linkedin}
            aria-label="LinkedIn"
            className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground hover:text-foreground"
          >
            <Linkedin className="size-4" aria-hidden />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground hover:text-foreground"
          >
            <Mail className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
