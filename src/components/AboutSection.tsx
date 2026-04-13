const AboutSection = () => {
  const highlights = [
    { label: "Education", value: "BTech in Cybersecurity", sub: "M.B. Institute of Technology · Class of 2029" },
    { label: "Focus Areas", value: "Cryptography · Quantum Computing · Topology", sub: "" },
    { label: "Interests", value: "CTFs · Research · Open Source", sub: "" },
  ];

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader number="01" title="About Me" />

        <div className="grid md:grid-cols-5 gap-12 mt-12">
          <div className="md:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a cybersecurity student with a deep interest in the mathematics behind cryptographic systems.
              My work spans <span className="text-foreground font-medium">cryptography</span>, <span className="text-foreground font-medium">quantum computing</span>,
              and <span className="text-foreground font-medium">algebraic topology</span>—areas where abstract mathematics directly impacts real-world security.
            </p>
            <p>
              I've self-studied quantum physics principles to understand quantum measurement concepts
              for cryptographic applications. I'm passionate about making cryptography and security
              concepts accessible to everyone.
            </p>
            <p>
              Outside of research, I compete in CTF challenges on <span className="text-foreground font-medium">PicoCTF</span> and <span className="text-foreground font-medium">OverTheWire</span>,
              working through problems in web exploitation, binary exploitation, and cryptography.
            </p>
          </div>

          <div className="md:col-span-2 space-y-4">
            {highlights.map((h) => (
              <div key={h.label} className="bg-card border border-border rounded-lg p-4 hover:border-primary/20 transition-colors">
                <p className="font-mono text-xs text-primary mb-1">{h.label}</p>
                <p className="text-foreground text-sm font-medium">{h.value}</p>
                {h.sub && <p className="text-xs text-muted-foreground mt-1">{h.sub}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="flex items-center gap-4 mb-2">
    <span className="font-mono text-primary text-sm">{number}.</span>
    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
    <div className="flex-1 h-px bg-border ml-4" />
  </div>
);

export default AboutSection;
