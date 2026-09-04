import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const title = "Pedapudi Tejesh Sai Charan — CSE Student | AI & Data Analytics";
const description =
  "Portfolio of Pedapudi Tejesh Sai Charan, Computer Science & Engineering student at Dadi Institute of Engineering and Technology, Visakhapatnam. AI, Data Analytics, Python and software development projects, internships and certifications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Pedapudi Tejesh Sai Charan",
          jobTitle: "Computer Science & Engineering Student",
          email: "mailto:pedapuditejesh@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Visakhapatnam",
            addressRegion: "Andhra Pradesh",
            addressCountry: "IN",
          },
          alumniOf: "Dadi Institute of Engineering and Technology",
          knowsAbout: [
            "Artificial Intelligence",
            "Data Analytics",
            "Python",
            "Software Development",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
