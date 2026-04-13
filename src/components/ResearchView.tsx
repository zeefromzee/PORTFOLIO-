import Window from "./Window";

const papers = [
  {
    venue: "DAU Silver Jubilee Seminar (ETSIF)",
    title: "Decoherence Effects in Variational Quantum Simulation of φ⁴ Scalar Field Theory on NISQ Hardware",
    description: "Investigates how realistic noise channels influence variational quantum simulations of interacting quantum field theories, focusing on a discretized φ⁴ scalar field model on NISQ hardware. A VQE ansatz is evaluated under depolarizing, amplitude damping, and phase damping noise models.",
    tags: ["VQE", "NISQ", "Quantum Field Theory", "Decoherence"],
  },
  {
    venue: "PDEU - Indo Quantum Summit 2026",
    title: "Quantum-Inspired Random Number Generator",
    description: "A quantum-inspired RNG combining high-entropy visual input with classical system randomness. Entropy is harvested from webcam photon noise, geometric overlays, and timing jitter, then fused with OS-level randomness through Von Neumann debiasing and hash-based whitening.",
    tags: ["RNG", "Visual Entropy", "NIST SP 800-22", "Cryptography"],
    link: "https://github.com/zeefromzee/Quantum-KeyGen",
  },
];

const ResearchView = () => {
  return (
    <div className="p-4 md:p-8 pb-12 space-y-4">
      <Window
        title="RESEARCH.EXE - papers"
        menuItems={["File", "View", "Tools", "Help"]}
        statusBar={`${papers.length} items`}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-win-bg p-4 md:p-6 space-y-4">
          {papers.map((paper, i) => (
            <div key={i} className="win-border bg-card p-4">
              <div className="bg-win-titlebar px-2 py-0.5 -mt-4 -mx-4 mb-3">
                <span className="text-[10px] text-win-titlebar-text">
                  Presented · {paper.venue}
                </span>
              </div>
              <h3 className="text-sm font-bold text-foreground mb-2">{paper.title}</h3>
              <p className="text-[11px] text-muted-foreground leading-relaxed mb-3">{paper.description}</p>
              <div className="flex flex-wrap gap-1 mb-2">
                {paper.tags.map((t) => (
                  <span key={t} className="win-border-inset bg-secondary text-[9px] px-1.5 py-0.5">{t}</span>
                ))}
              </div>
              {paper.link && (
                <a href={paper.link} target="_blank" rel="noopener noreferrer"
                  className="text-[10px] text-accent underline">
                  📁 View Repository →
                </a>
              )}
            </div>
          ))}
        </div>
      </Window>
    </div>
  );
};

export default ResearchView;
