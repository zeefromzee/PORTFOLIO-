import Window from "./Window";

const skillGroups = [
  { title: "LANGUAGES:", items: ["Python", "C", "C++", "Julia", "JavaScript", "Bash"] },
  { title: "SECURITY TOOLS:", items: ["Burp Suite", "Wireshark", "Nmap"] },
  { title: "FRAMEWORKS & LIBRARIES:", items: ["OpenCV", "Pandas", "Matplotlib", "NumPy", "SciPy", "Fernet", "PyGame", "Electron.js", "SageMath"] },
  { title: "DOMAINS:", items: ["Cryptography", "Cryptanalysis", "Network Security", "Web Exploitation", "Binary Exploitation", "Statistical Testing", "Cyber Forensics", "Qiskit", "Quantum Computing", "Noise Simulation"] },
];

const achievements = [
  { icon: "🏆", title: "Vice Chairperson — IEEE Signal Processing Society", desc: "Organizing seminars, workshops, and technical sessions on signal processing, applied mathematics, and their intersections with cryptography." },
  { icon: "🥇", title: "1st Place — College Ideathon", desc: "IoT encryption system for smart home devices using camera-based entropy generation and thermal noise." },
  { icon: "📝", title: "Independent Research", desc: "100% pass rate across all 16 NIST SP 800-22 Statistical Tests for over 2000 generated keys." },
  { icon: "🛡️", title: "CTF Competitions", desc: "Active on PicoCTF and OverTheWire — web exploitation, binary exploitation, and cryptography." },
];

const SkillsView = () => {
  return (
    <div className="p-4 md:p-8 pb-12 space-y-4">
      <Window
        title="SYSTEM PROPERTIES - Skills & Tools"
        menuItems={["View", "Help"]}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-win-bg p-4 md:p-6 space-y-5">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <p className="text-[10px] font-bold underline mb-2">{group.title}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="win-button text-[10px] py-0.5 cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Window>

      <Window
        title="ACHIEVEMENTS.LOG"
        menuItems={["File", "View"]}
        statusBar={`${achievements.length} entries`}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-win-bg p-4 md:p-6 space-y-3">
          {achievements.map((a, i) => (
            <div key={i} className="win-border-inset bg-win-bg p-3 flex gap-3">
              <span className="text-lg shrink-0">{a.icon}</span>
              <div>
                <p className="text-xs font-bold text-foreground">{a.title}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Window>
    </div>
  );
};

export default SkillsView;
