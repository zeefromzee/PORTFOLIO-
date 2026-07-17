import { ArrowUpRight } from "lucide-react";

const projects = [
  { title: "Cryptographic Key Statistical Test Suite", description: "Full NIST SP 800-22 battery with 30+ tests for evaluating cryptographic key strength.", tags: ["Python", "NumPy", "SciPy"], link: "https://github.com/zeefromzee/key-test" },
  { title: "Bloch Spheres, Quantum Visualiser", description: "Interactive web app for visualising quantum states on the Bloch sphere under gate operations.", tags: ["Quantum"], link: "https://github.com/zeefromzee/Bloch_Spheres" },
  { title: "EEG-FFT-Visualiser", description: "Frequency-domain EEG analysis using FFT, decomposing into canonical brainwave bands.", tags: ["Python", "Signal"], link: "https://github.com/zeefromzee/EEG-FFT-Visualiser" },
  { title: "Quantum-Inspired Key Generator", description: "Dual-mode key generation from webcam pixel noise, geometric overlays, and OS randomness.", tags: ["Python", "OpenCV", "HKDF"], link: "https://github.com/zeefromzee/Quantum-KeyGen" },
  { title: "Quantum Computing Experiments", description: "Foundational quantum algorithms including Deutsch-Jozsa, quantum coin flips, and random circuits.", tags: ["Python", "Qiskit"], link: "https://github.com/zeefromzee/Quantum_Computing" },
  { title: "Cryptography in C / C++", description: "Low-level implementations of classical and modern cryptographic primitives.", tags: ["C", "C++"], link: "https://github.com/zeefromzee/cryptography" },
  { title: "VQE Noise Studies", description: "Noise model effects on VQE circuits under depolarizing, amplitude damping, and phase damping.", tags: ["Qiskit", "VQE"], link: "https://github.com/zeefromzee/vqe" },
];

const ProjectsView = () => {
  return (
    <div className="container-prose py-24">
      <div className="mb-12">
        <p className="font-mono text-sm text-accent uppercase tracking-wider mb-3">04 / Projects</p>
        <h2 className="font-serif-display text-4xl md:text-5xl font-medium tracking-tight italic">Selected work.</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-border rounded-lg p-6 hover:border-foreground/30 hover:shadow-sm transition bg-background"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="font-serif-display text-xl font-medium leading-snug group-hover:text-accent transition">
                {p.title}
              </h3>
              <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition shrink-0 mt-1" />
            </div>
            <p className="text-sm text-foreground/75 leading-relaxed mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t} className="text-xs font-mono text-muted-foreground px-2 py-0.5 border border-border rounded">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsView;
