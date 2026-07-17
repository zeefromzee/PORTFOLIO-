const SectionHeader = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="mb-12">
    <p className="font-mono text-sm text-accent uppercase tracking-wider mb-3">{eyebrow}</p>
    <h2 className="font-serif-display text-4xl md:text-5xl font-medium tracking-tight italic">{title}</h2>
  </div>
);

const AboutView = () => {
  return (
    <div className="container-prose py-24">
      <SectionHeader eyebrow="01 / About" title="A quiet obsession with cryptographic mathematics." />

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-5 text-lg leading-relaxed text-foreground/85">
          <p>
            I am a cybersecurity student whose work moves between cryptography and
            quantum computing, focused on the intersection of physics, mathematics,
            and security.
          </p>
          <p>
            I have independently studied quantum physics, scalar field theory, and
            QKD protocols (BB84, B92) to engage with this field more rigorously. My
            goal is to make these ideas accessible without diminishing their depth.
          </p>
          <p>
            Outside of research, I compete in CTFs on CryptoHack and OverTheWire,
            primarily in cryptography, web exploitation, and binary exploitation.
          </p>
        </div>

        <aside className="space-y-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">Education</p>
            <p className="font-medium">BTech, Cybersecurity</p>
            <p className="text-sm text-muted-foreground">Madhuben &amp; Bhanubhai Patel Institute of Technology</p>
            <p className="text-sm text-muted-foreground">Class of 2029</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">Focus</p>
            <p className="text-sm leading-relaxed">Cryptography · Quantum Computing · Field Theory</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">Interests</p>
            <p className="text-sm leading-relaxed">CTFs · Research · Quantum Physics</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AboutView;
