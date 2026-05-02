import Window from "./Window";

const skillGroups = [
  { title: "languages", emoji: "✿", items: ["Python", "C", "C++", "Julia", "JavaScript", "Bash"] },
  { title: "security tools", emoji: "♡", items: ["Burp Suite", "Wireshark", "Nmap"] },
  { title: "frameworks & libraries", emoji: "✦", items: ["OpenCV", "Pandas", "Matplotlib", "NumPy", "SciPy", "Fernet", "PyGame", "Electron.js", "SageMath"] },
  { title: "domains", emoji: "❀", items: ["Cryptography", "Cryptanalysis", "Network Security", "Web Exploitation", "Binary Exploitation", "Statistical Testing", "Cyber Forensics", "Qiskit", "Quantum Computing", "Noise Simulation"] },
];

const achievements = [
  { title: "Vice Chairperson — IEEE Signal Processing Society", desc: "organising seminars, workshops & technical sessions on signal processing, applied mathematics and their intersections with cryptography." },
  { title: "1st Place — College Ideathon", desc: "an IoT encryption system for smart home devices using camera-based entropy generation and thermal noise." },
  { title: "Independent Research", desc: "self-studied quantum measurement, BB84 & B92 QKD protocols, and quantum information theory — bridging cryptography and quantum computing." },
  { title: "CTF Competitions", desc: "active on PicoCTF and OverTheWire — web exploitation, binary exploitation, and cryptography." },
];

const SkillsView = () => {
  return (
    <div className="p-4 md:p-8 pb-12 space-y-6">
      <Window
        title="skills ♡ my little toolkit"
        ribbon="✦ tied with ribbon, sorted by feeling ✦"
        className="max-w-4xl mx-auto"
      >
        <div className="ribbon-bg p-6 md:p-10">
          <div className="text-center mb-8">
            <p className="font-hand text-[hsl(var(--accent))]">things i love working with</p>
            <h1 className="font-script text-5xl md:text-6xl text-[hsl(var(--pink-deep))] leading-none">skills</h1>
          </div>

          <div className="space-y-5 max-w-3xl mx-auto">
            {skillGroups.map((group) => (
              <div key={group.title} className="bg-[hsl(var(--cream))] rounded-3xl p-5 border border-dashed border-[hsl(var(--border))]">
                <p className="font-script text-2xl text-[hsl(var(--pink-deep))] mb-3">
                  {group.emoji} {group.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="bg-white rounded-full px-3 py-1 text-xs font-serif italic border border-dashed border-[hsl(var(--border))] text-[hsl(var(--foreground))]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Window>

      <Window
        title="achievements ♡ pressed flowers"
        ribbon={`✦ ${achievements.length} small joys ✦`}
        className="max-w-4xl mx-auto"
      >
        <div className="stripes-bg p-6 md:p-10">
          <div className="text-center mb-8">
            <p className="font-hand text-[hsl(var(--accent))]">a little keepsake page</p>
            <h1 className="font-script text-5xl md:text-6xl text-[hsl(var(--pink-deep))] leading-none">achievements</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {achievements.map((a, i) => (
              <div key={i} className="bg-[hsl(var(--cream))] rounded-3xl p-5 border border-dashed border-[hsl(var(--border))] relative">
                <span className="absolute -top-3 -left-2 text-2xl">✿</span>
                <p className="font-serif font-semibold text-[hsl(var(--pink-deep))] text-sm mb-1.5">{a.title}</p>
                <p className="font-serif text-[13px] leading-relaxed text-[hsl(var(--foreground))]">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Window>
    </div>
  );
};

export default SkillsView;
