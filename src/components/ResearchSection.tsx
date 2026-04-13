import { ExternalLink } from "lucide-react";
import { SectionHeader } from "./AboutSection";

interface ResearchPaper {
  venue: string;
  title: string;
  description: string[];
  tags: string[];
  link?: string;
}

const papers: ResearchPaper[] = [
  {
    venue: "DAU Silver Jubilee Seminar (ETSIF)",
    title: "Decoherence Effects in Variational Quantum Simulation of φ⁴ Scalar Field Theory on NISQ Hardware",
    description: [
      "Investigates how realistic noise channels influence variational quantum simulations of interacting quantum field theories, focusing on a discretized φ⁴ scalar field model on NISQ hardware.",
      "A VQE ansatz is evaluated under depolarizing, amplitude damping, and phase damping noise models. The study characterizes how decoherence deforms the cost surface and affects ground state energy estimation.",
    ],
    tags: ["VQE", "NISQ", "Quantum Field Theory", "Decoherence", "Noise Simulation"],
  },
  {
    venue: "PDEU - Indo Quantum Summit 2026",
    title: "Quantum-Inspired Random Number Generator",
    description: [
      "A quantum-inspired RNG combining high-entropy visual input with classical system randomness to produce cryptographically usable bitstreams.",
      "Entropy is harvested from webcam photon noise, geometric overlays, and timing jitter, then fused with OS-level randomness. The pipeline includes Von Neumann debiasing, hash-based whitening, and HKDF-based key derivation.",
    ],
    tags: ["Random Number Generation", "Visual Entropy", "NIST SP 800-22", "Cryptography"],
    link: "https://github.com/zeefromzee/Quantum-KeyGen",
  },
];

const ResearchSection = () => (
  <section id="research" className="py-28 relative">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader number="02" title="Research" />

      <div className="mt-12 space-y-8">
        {papers.map((paper) => (
          <div key={paper.title} className="bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/20 transition-all group">
            <p className="font-mono text-xs text-primary mb-3">Presented · {paper.venue}</p>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
              {paper.title}
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed mb-5">
              {paper.description.map((d, i) => <p key={i}>{d}</p>)}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {paper.tags.map((t) => (
                <span key={t} className="font-mono text-xs px-2.5 py-1 rounded bg-primary/5 text-primary/80 border border-primary/10">
                  {t}
                </span>
              ))}
            </div>
            {paper.link && (
              <a href={paper.link} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:text-cyber-green transition-colors">
                View Repository <ExternalLink size={12} />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResearchSection;
