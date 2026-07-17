const papers = [
  {
    venue: "DAU Silver Jubilee Seminar (ETSIF)",
    title: "Decoherence Effects in Variational Quantum Simulation of φ⁴ Scalar Field Theory on NISQ Hardware",
    description: "How realistic noise channels influence variational quantum simulations of interacting quantum field theories; a discretized φ⁴ scalar field model evaluated under depolarizing, amplitude damping, and phase damping noise.",
    tags: ["VQE", "NISQ", "QFT", "Decoherence"],
  },
  {
    venue: "PDEU · Indo Quantum Summit 2026",
    title: "Quantum-Inspired Random Number Generator",
    description: "A quantum-inspired RNG braiding high-entropy webcam photon noise, geometric overlays, and timing jitter with OS-level randomness; debiased with Von Neumann and whitened with hashes.",
    tags: ["RNG", "Visual Entropy", "NIST SP 800-22", "Cryptography"],
    link: "https://github.com/zeefromzee/Quantum-KeyGen",
  },
];

const ResearchView = () => {
  return (
    <div className="container-prose py-24">
      <div className="mb-12">
        <p className="font-mono text-sm text-accent uppercase tracking-wider mb-3">03 / Papers</p>
        <h2 className="font-serif-display text-4xl md:text-5xl font-medium tracking-tight italic">Presented papers.</h2>
      </div>

      <div className="space-y-px bg-border border border-border rounded-lg overflow-hidden">
        {papers.map((p, i) => (
          <article key={i} className="bg-background p-8 md:p-10 hover:bg-secondary/40 transition">
            <div className="flex items-baseline justify-between gap-4 mb-3 flex-wrap">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Paper {String(i + 1).padStart(2, "0")} · {p.venue}
              </p>
            </div>
            <h3 className="font-serif-display text-2xl md:text-3xl font-medium leading-snug mb-4">
              {p.title}
            </h3>
            <p className="text-base text-foreground/80 leading-relaxed mb-5 max-w-3xl">
              {p.description}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs font-mono px-2.5 py-1 border border-border rounded text-muted-foreground">
                  {t}
                </span>
              ))}
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="ml-auto text-sm font-medium text-accent hover:underline">
                  View repository →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ResearchView;
