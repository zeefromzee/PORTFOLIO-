import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    role: "Research Intern, QKD & RSA",
    org: "TechForGood 2026 · IEEE MIT-ADT Student Branch",
    period: "JUNE 2026 — JULY 2026",
    location: "Remote · IEEE Maharashtra Section",
    bullets: [
      "Conducting research on Quantum Key Distribution protocols and RSA cryptographic systems under IEEE Maharashtra Section.",
      "Investigating the transition from classical RSA-based key exchange to post-quantum cryptographic standards, including lattice-based and hash-based schemes.",
      "Participating in weekly mentor reviews as part of a fully remote, innovation-focused research program organised in collaboration with IEEE Region 10 AIPSCC.",
    ],
  },
];

const ExperienceView = () => {
  return (
    <div className="container-prose py-24">
      <div className="mb-12">
        <p className="font-mono text-sm text-accent uppercase tracking-wider mb-3">02 / Experience</p>
        <h2 className="font-serif-display text-4xl md:text-5xl font-medium tracking-tight italic">
          Where the research lives.
        </h2>
      </div>

      <div className="space-y-px bg-border border border-border rounded-2xl overflow-hidden">
        {experiences.map((e, i) => (
          <article key={i} className="bg-background p-8 md:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
              <div>
                <h3 className="font-serif-display text-2xl md:text-3xl font-medium leading-snug">
                  {e.role}
                </h3>
                <p className="text-base text-foreground/75 mt-1">{e.org}</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-xs uppercase tracking-wider text-accent">{e.period}</p>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mt-1">{e.location}</p>
              </div>
            </div>
            <ul className="space-y-3 mt-5">
              {e.bullets.map((b, j) => (
                <li key={j} className="flex gap-3 text-base text-foreground/80 leading-relaxed">
                  <ArrowUpRight size={16} className="text-accent shrink-0 mt-1.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ExperienceView;