import Window from "./Window";
import { ExternalLink } from "lucide-react";

const projects = [
 { title: "Cryptographic Key Statistical Test Suite", description: "Full NIST SP 800-22 battery with 30+ tests for evaluating cryptographic key strength.", tags: ["Python", "NumPy", "SciPy"], link: "https://github.com/zeefromzee/key-test", emoji: "" },
 { title: "Bloch Spheres — Quantum Visualiser", description: "Interactive web app for visualising quantum states on the Bloch sphere under gate operations.", tags: ["JavaScript", "Quantum"], link: "https://github.com/zeefromzee/Bloch_Spheres", emoji: "" },
 { title: "EEG-FFT-Visualiser", description: "Frequency-domain EEG analysis using FFT, decomposing into canonical brainwave bands.", tags: ["Python", "Signal"], link: "https://github.com/zeefromzee/EEG-FFT-Visualiser", emoji: "" },
 { title: "Quantum-Inspired Key Generator", description: "Dual-mode key generation from webcam pixel noise, geometric overlays, and OS randomness.", tags: ["Python", "OpenCV", "HKDF"], link: "https://github.com/zeefromzee/Quantum-KeyGen", emoji: "" },
 { title: "Quantum Computing Experiments", description: "Foundational quantum algorithms — Deutsch-Jozsa, quantum coin flips, random circuits.", tags: ["Python", "Qiskit"], link: "https://github.com/zeefromzee/Quantum_Computing", emoji: "" },
 { title: "Cryptography in C / C++", description: "Low-level implementations of classical and modern cryptographic primitives.", tags: ["C", "C++"], link: "https://github.com/zeefromzee/cryptography", emoji: "" },
 { title: "VQE Noise Studies", description: "Noise model effects on VQE circuits under depolarizing, amplitude damping, and phase damping.", tags: ["Qiskit", "VQE"], link: "https://github.com/zeefromzee/vqe", emoji: "" },
];

const ProjectsView = () => {
 return (
 <div className="p-4 md:p-8 pb-12">
 <Window
 title="projects · a tiny atelier"
 ribbon={`· ${projects.length} little things i made ·`}
 statusBar="each one stitched with love"
 className="max-w-5xl mx-auto"
 >
 <div className="stripes-bg p-6 md:p-10">
 <div className="text-center mb-8">
 <p className="font-hand text-[hsl(var(--accent))]">handmade with code</p>
 <h1 className="font-script text-5xl md:text-6xl text-[hsl(var(--pink-deep))] leading-none">projects</h1>
 </div>

 <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
 {projects.map((p, i) => (
 <a key={i} href={p.link} target="_blank" rel="noopener noreferrer"
 className="bg-[hsl(var(--cream))] rounded-3xl p-5 border border-dashed border-[hsl(var(--border))] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group relative">
 <div className="flex items-start gap-3 mb-2">
 <span className="text-3xl">{p.emoji}</span>
 <div className="flex-1">
 <h3 className="font-serif text-base font-semibold text-[hsl(var(--pink-deep))] leading-tight group-hover:underline">
 {p.title}
 </h3>
 </div>
 <ExternalLink size={14} className="text-[hsl(var(--accent))] opacity-60 group-hover:opacity-100" />
 </div>
 <p className="font-serif text-[13px] leading-relaxed text-[hsl(var(--foreground))] mb-3">
 {p.description}
 </p>
 <div className="flex flex-wrap gap-1.5">
 {p.tags.map((t) => (
 <span key={t} className="bg-white border border-dashed border-[hsl(var(--border))] rounded-full text-[10px] px-2.5 py-0.5 font-hand text-[hsl(var(--accent))]">
 {t}
 </span>
 ))}
 </div>
 </a>
 ))}
 </div>
 </div>
 </Window>
 </div>
 );
};

export default ProjectsView;
