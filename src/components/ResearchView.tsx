import Window from "./Window";

const papers = [
 {
 venue: "DAU Silver Jubilee Seminar (ETSIF)",
 title: "Decoherence Effects in Variational Quantum Simulation of φ⁴ Scalar Field Theory on NISQ Hardware",
 description: "How realistic noise channels influence variational quantum simulations of interacting quantum field theories — a discretized φ⁴ scalar field model evaluated under depolarizing, amplitude damping, and phase damping noise.",
 tags: ["VQE", "NISQ", "QFT", "Decoherence"],
 },
 {
 venue: "PDEU · Indo Quantum Summit 2026",
 title: "Quantum-Inspired Random Number Generator",
 description: "A quantum-inspired RNG that braids high-entropy webcam photon noise, geometric overlays, and timing jitter together with OS-level randomness — debiased with Von Neumann and whitened with hashes.",
 tags: ["RNG", "Visual Entropy", "NIST SP 800-22", "Cryptography"],
 link: "https://github.com/zeefromzee/Quantum-KeyGen",
 },
];

const ResearchView = () => {
 return (
 <div className="p-4 md:p-8 pb-12">
 <Window
 title="research · a small library"
 ribbon={`· ${papers.length} little papers, written with care ·`}
 statusBar="press a tag to feel something"
 className="max-w-4xl mx-auto"
 >
 <div className="ribbon-bg p-6 md:p-10">
 <div className="text-center mb-8">
 <p className="font-hand text-[hsl(var(--accent))]">my notebook of ideas</p>
 <h1 className="font-script text-5xl md:text-6xl text-[hsl(var(--pink-deep))] leading-none">research</h1>
 </div>

 <div className="space-y-5 max-w-3xl mx-auto">
 {papers.map((paper, i) => (
 <div key={i} className="bg-[hsl(var(--cream))] rounded-3xl p-6 border border-dashed border-[hsl(var(--border))] shadow-sm relative">
 <div className="absolute -top-3 left-6 bg-[hsl(var(--accent))] text-white text-[10px] px-3 py-0.5 rounded-full font-hand">
 paper №{String(i + 1).padStart(2, "0")}
 </div>
 <p className="font-hand text-xs text-[hsl(var(--accent))] mt-1 mb-2">presented at · {paper.venue}</p>
 <h3 className="font-serif text-lg md:text-xl font-semibold text-[hsl(var(--pink-deep))] leading-snug mb-3">
 {paper.title}
 </h3>
 <p className="font-serif text-sm leading-relaxed text-[hsl(var(--foreground))] mb-4">
 {paper.description}
 </p>
 <div className="flex flex-wrap gap-1.5 mb-2">
 {paper.tags.map((t) => (
 <span key={t} className="bg-white border border-dashed border-[hsl(var(--border))] rounded-full text-[11px] px-3 py-0.5 font-hand text-[hsl(var(--accent))]">
 · {t}
 </span>
 ))}
 </div>
 {paper.link && (
 <a href={paper.link} target="_blank" rel="noopener noreferrer"
 className="font-hand text-sm text-[hsl(var(--pink-deep))] underline">
view repository →
 </a>
 )}
 </div>
 ))}
 </div>
 </div>
 </Window>
 </div>
 );
};

export default ResearchView;
