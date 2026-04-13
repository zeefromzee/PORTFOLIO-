import { ExternalLink } from "lucide-react";
import { SectionHeader } from "./AboutSection";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const featured: Project[] = [
  {
    title: "Cryptographic Key Statistical Test Suite",
    description: "A comprehensive statistical analysis suite implementing the full NIST SP 800-22 battery along with 30+ additional tests for evaluating cryptographic key strength and randomness.",
    tags: ["Python", "NumPy", "SciPy", "NIST SP 800-22"],
    link: "https://github.com/zeefromzee/key-test",
  },
  {
    title: "Bloch Spheres — Quantum State Visualiser",
    description: "An interactive web app for visualising quantum states on the Bloch sphere, helping students understand how single-qubit states evolve under different gate operations.",
    tags: ["JavaScript", "HTML", "CSS", "Quantum Computing"],
    link: "https://github.com/zeefromzee/Bloch_Spheres",
  },
  {
    title: "EEG-FFT-Visualiser",
    description: "A frequency-domain EEG signal analysis tool using FFT, decomposing signals into canonical brainwave bands for visual exploration.",
    tags: ["Python", "NumPy", "SciPy", "Signal Processing"],
    link: "https://github.com/zeefromzee/EEG-FFT-Visualiser",
  },
];

const more: Project[] = [
  {
    title: "Quantum-Inspired Key Generator",
    description: "A dual-mode key generation system synthesizing entropy from webcam pixel noise, geometric overlays, and OS randomness.",
    tags: ["Python", "OpenCV", "HKDF"],
    link: "https://github.com/zeefromzee/Quantum-KeyGen",
  },
  {
    title: "Quantum Computing Experiments",
    description: "Foundational quantum algorithms: Deutsch-Jozsa, quantum coin flips, random circuits, and measurement statistics.",
    tags: ["Python", "Qiskit"],
    link: "https://github.com/zeefromzee/Quantum_Computing",
  },
  {
    title: "Cryptography — C/C++ Implementations",
    description: "Low-level implementations of classical and modern cryptographic primitives focusing on systems-level understanding.",
    tags: ["C++", "C", "Cryptography"],
    link: "https://github.com/zeefromzee/cryptography",
  },
  {
    title: "VQE Noise Studies",
    description: "Experiments examining noise model effects on VQE circuits including depolarizing, amplitude damping, and phase damping.",
    tags: ["Python", "Qiskit", "VQE"],
    link: "https://github.com/zeefromzee/vqe",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-28 relative">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader number="03" title="Projects" />

      <div className="grid md:grid-cols-3 gap-5 mt-12">
        {featured.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5 mt-5">
        {more.map((p) => (
          <ProjectCard key={p.title} project={p} compact />
        ))}
      </div>
    </div>
  </section>
);

const ProjectCard = ({ project, compact }: { project: Project; compact?: boolean }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-card border border-border rounded-lg p-5 hover:border-primary/20 transition-all hover:-translate-y-1 duration-300 flex flex-col"
  >
    <div className="flex items-start justify-between mb-3">
      <h3 className={`font-bold text-foreground group-hover:text-primary transition-colors ${compact ? "text-sm" : "text-base"}`}>
        {project.title}
      </h3>
      <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1 ml-2" />
    </div>
    <p className={`text-muted-foreground leading-relaxed mb-4 flex-1 ${compact ? "text-xs" : "text-sm"}`}>
      {project.description}
    </p>
    <div className="flex flex-wrap gap-1.5">
      {project.tags.map((t) => (
        <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded bg-primary/5 text-primary/70">
          {t}
        </span>
      ))}
    </div>
  </a>
);

export default ProjectsSection;
