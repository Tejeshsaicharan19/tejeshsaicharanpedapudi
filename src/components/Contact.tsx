import { useState } from "react";
import { CheckCircle2, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { z } from "zod";
import { profile } from "@/data/portfolio";
import { Reveal, SectionHeading } from "@/components/Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  subject: z.string().trim().min(3, "Please add a subject").max(150),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(1000),
});

type Field = keyof z.infer<typeof schema>;

export function Contact() {
  const [values, setValues] = useState<Record<Field, string>>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (field: Field, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<Field, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as Field;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    const body = `${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      parsed.data.subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk"
        description="Open to internships, placements and graduate opportunities in software, AI and data roles."
      />

      <div className="grid gap-5 lg:grid-cols-[1fr_1.25fr]">
        <div className="space-y-4">
          <Reveal className="glass rounded-2xl p-6">
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-primary" aria-hidden />
                <a href={`mailto:${profile.email}`} className="hover:text-primary">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-primary" aria-hidden />
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="size-4 shrink-0 text-primary" aria-hidden />
                Visakhapatnam, Andhra Pradesh
              </li>
            </ul>
          </Reveal>

          <Reveal delay={90} className="grid gap-3 sm:grid-cols-3">
            <a
              href={`mailto:${profile.email}`}
              className="glass glass-hover flex flex-col items-center gap-2 rounded-2xl px-4 py-5 text-xs font-semibold"
            >
              <Mail className="size-5 text-primary" aria-hidden /> Email
            </a>
            <a
              href={profile.linkedin}
              className="glass glass-hover flex flex-col items-center gap-2 rounded-2xl px-4 py-5 text-xs font-semibold"
            >
              <Linkedin className="size-5 text-primary" aria-hidden /> LinkedIn
            </a>
            <a
              href={profile.github}
              className="glass glass-hover flex flex-col items-center gap-2 rounded-2xl px-4 py-5 text-xs font-semibold"
            >
              <Github className="size-5 text-primary" aria-hidden /> GitHub
            </a>
          </Reveal>
        </div>

        <Reveal delay={140} className="glass rounded-3xl p-7">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <CheckCircle2 className="size-12 text-primary" aria-hidden />
              <h3 className="mt-5 text-xl font-semibold">Message ready to send</h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Your email app has opened with the message. Send it and you'll get a reply soon.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setValues({ name: "", email: "", subject: "", message: "" });
                }}
                className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary"
              >
                Write another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  id="name"
                  label="Name"
                  value={values.name}
                  error={errors.name}
                  onChange={(v) => set("name", v)}
                />
                <FormField
                  id="email"
                  label="Email"
                  type="email"
                  value={values.email}
                  error={errors.email}
                  onChange={(v) => set("email", v)}
                />
              </div>
              <FormField
                id="subject"
                label="Subject"
                value={values.subject}
                error={errors.subject}
                onChange={(v) => set("subject", v)}
              />
              <FormField
                id="message"
                label="Message"
                textarea
                value={values.message}
                error={errors.message}
                onChange={(v) => set("message", v)}
              />
              <button
                type="submit"
                className="gradient-brand inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Send Message <Send className="size-4" aria-hidden />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function FormField({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  textarea,
}: {
  id: string;
  label: string;
  value: string;
  error?: string | undefined;
  onChange: (value: string) => void;
  type?: string;
  textarea?: boolean | undefined;
}) {
  const base =
    "mt-2 w-full rounded-xl border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";
  return (
    <div>
      <label htmlFor={id} className="text-xs font-semibold tracking-wide uppercase">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          className={`${base} ${error ? "border-destructive" : "border-border"} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          className={`${base} ${error ? "border-destructive" : "border-border"}`}
        />
      )}
      {error ? <p className="mt-1.5 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
