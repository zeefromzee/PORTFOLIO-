import { SectionHeader } from "./AboutSection";

const skillGroups = [
  { title: "Languages", items: ["Python", "C", "C++", "Julia", "JavaScript", "Bash"] },
  { title: "Security Tools", items: ["Burp Suite", "Wireshark", "Nmap"] },
  { title: "Frameworks & Libraries", items: ["OpenCV", "Pandas", "Matplotlib", "NumPy", "SciPy", "Fernet", "PyGame", "Electron.js", "SageMath"] },
  { title: "Domains", items: ["Cryptography", "Cryptanalysis", "Network Security", "Web Exploitation", "Binary Exploitation", "Statistical Testing", "Cyber Forensics", "Qiskit", "Quantum Computing", "Noise Simulation"] },
];

const SkillsSection = () => (
  <section id="skills" className="py-28 relative">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader number="04" title="Skills & Tools" />

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="font-mono text-sm text-primary mb-4">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="font-mono text-xs px-3 py-1.5 rounded-md bg-secondary border border-border text-foreground hover:border-primary/30 hover:text-primary transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
