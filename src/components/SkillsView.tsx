const skillGroups = [
  { title: "Languages", items: ["Python", "C", "C++", "Julia", "JavaScript", "Bash"] },
  { title: "Security Tools", items: ["Burp Suite", "Wireshark", "Nmap"] },
  { title: "Frameworks & Libraries", items: ["OpenCV", "Pandas", "Matplotlib", "NumPy", "SciPy", "Fernet", "PyGame", "Electron.js", "SageMath", "Qiskit"] },
  { title: "Domains", items: ["Cryptography", "Cryptanalysis", "Network Security", "Web Exploitation", "Binary Exploitation", "Statistical Testing", "Cyber Forensics", "Quantum Computing", "Noise Simulation"] },
];

const achievements = [
  { title: "Vice Chairperson — IEEE Signal Processing Society", desc: "Organising seminars, workshops & technical sessions on signal processing, applied mathematics, and intersections with cryptography." },
  { title: "1st Place · 2× Ideathon Winner", desc: "IoT encryption system for smart home devices using camera-based entropy generation and thermal noise." },
  { title: "Independent Research", desc: "Self-studied quantum physics, BB84 & B92 QKD protocols, and quantum information theory — bridging cryptography and quantum computing." },
  { title: "CTF Competitions", desc: "Active on PicoCTF and OverTheWire — web exploitation, binary exploitation, and cryptography." },
];

const SkillsView = () => {
  return (
    <div className="container-prose py-24">
      <div className="mb-12">
        <p className="font-mono text-sm text-accent uppercase tracking-wider mb-3">04 — Skills</p>
        <h2 className="font-serif-display text-4xl md:text-5xl font-medium tracking-tight">Toolkit &amp; achievements.</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mb-20">
        {skillGroups.map((g) => (
          <div key={g.title}>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4 pb-3 border-b border-border">
              {g.title}
            </p>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span key={i} className="text-sm px-3 py-1.5 bg-secondary rounded-md text-foreground/85">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-6">Achievements</p>
      <div className="space-y-px bg-border border border-border rounded-lg overflow-hidden">
        {achievements.map((a) => (
          <div key={a.title} className="bg-background p-6 md:p-7">
            <h3 className="font-serif-display text-xl font-medium mb-2">{a.title}</h3>
            <p className="text-base text-foreground/75 leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsView;
