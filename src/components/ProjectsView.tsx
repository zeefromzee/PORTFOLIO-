import Window from "./Window";

const projects = [
  {
    title: "Cryptographic Key Statistical Test Suite",
    description: "Full NIST SP 800-22 battery with 30+ tests for evaluating cryptographic key strength and randomness.",
    tags: ["Python", "NumPy", "SciPy", "NIST SP 800-22"],
    link: "https://github.com/zeefromzee/key-test",
  },
  {
    title: "Bloch Spheres — Quantum State Visualiser",
    description: "Interactive web app for visualising quantum states on the Bloch sphere under gate operations.",
    tags: ["JavaScript", "HTML", "CSS", "Quantum Computing"],
    link: "https://github.com/zeefromzee/Bloch_Spheres",
  },
  {
    title: "EEG-FFT-Visualiser",
    description: "Frequency-domain EEG signal analysis using FFT, decomposing into canonical brainwave bands.",
    tags: ["Python", "NumPy", "SciPy", "Signal Processing"],
    link: "https://github.com/zeefromzee/EEG-FFT-Visualiser",
  },
  {
    title: "Quantum-Inspired Key Generator",
    description: "Dual-mode key generation from webcam pixel noise, geometric overlays, and OS randomness.",
    tags: ["Python", "OpenCV", "HKDF"],
    link: "https://github.com/zeefromzee/Quantum-KeyGen",
  },
  {
    title: "Quantum Computing Experiments",
    description: "Foundational quantum algorithms: Deutsch-Jozsa, quantum coin flips, random circuits.",
    tags: ["Python", "Qiskit"],
    link: "https://github.com/zeefromzee/Quantum_Computing",
  },
  {
    title: "Cryptography — C/C++ Implementations",
    description: "Low-level implementations of classical and modern cryptographic primitives.",
    tags: ["C++", "C", "Cryptography"],
    link: "https://github.com/zeefromzee/cryptography",
  },
  {
    title: "VQE Noise Studies",
    description: "Noise model effects on VQE circuits under depolarizing, amplitude damping, and phase damping.",
    tags: ["Python", "Qiskit", "VQE"],
    link: "https://github.com/zeefromzee/vqe",
  },
];

const ProjectsView = () => {
  return (
    <div className="p-4 md:p-8 pb-12">
      <Window
        title="FILE EXPLORER - C:\portfolio\projects"
        menuItems={["File", "Edit", "View", "Favorites", "Tools", "Help"]}
        statusBar={`${projects.length} objects`}
        className="max-w-4xl mx-auto"
      >
        {/* Column headers */}
        <div className="bg-win-menubar border-b border-border grid grid-cols-12 text-[10px] font-bold px-2 py-1">
          <div className="col-span-1">📁</div>
          <div className="col-span-4">Name</div>
          <div className="col-span-4 hidden md:block">Description</div>
          <div className="col-span-3">Tags</div>
        </div>

        <div className="bg-win-bg">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`grid grid-cols-12 px-2 py-2 text-[11px] items-start hover:bg-win-highlight hover:text-win-titlebar-text group cursor-pointer ${
                i % 2 === 0 ? "bg-win-bg" : "bg-secondary/30"
              }`}
            >
              <div className="col-span-1">📂</div>
              <div className="col-span-4 font-bold group-hover:underline">{p.title}</div>
              <div className="col-span-4 hidden md:block text-muted-foreground group-hover:text-win-titlebar-text/80 text-[10px]">{p.description}</div>
              <div className="col-span-3 flex flex-wrap gap-1">
                {p.tags.slice(0, 3).map((t) => (
                  <span key={t} className="text-[9px] bg-secondary group-hover:bg-win-titlebar-text/20 px-1">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </Window>
    </div>
  );
};

export default ProjectsView;
