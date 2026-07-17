import { Github, Linkedin, Mail, FileText, Globe, MapPin, ArrowRight } from "lucide-react";

const HomeView = () => {
  return (
    <div className="container-prose py-20 md:py-32">
      <div className="max-w-3xl">
        <p className="font-mono text-sm text-accent mb-6 tracking-wide">
          <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 align-middle" />
          Available for research collaborations
        </p>
        <h1 className="font-serif-display text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight mb-6">
          Zeel <span className="italic text-accent">Gajjar</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
          Cybersecurity undergraduate exploring the mathematics behind
          <span className="text-foreground"> cryptography</span> and
          <span className="text-foreground"> quantum computing</span>.
          Currently studying at Madhuben &amp; Bhanubhai Patel Institute of Technology.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <a href="#projects" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition">
            View Projects <ArrowRight size={16} />
          </a>
          <a href="/ZEEL_GAJJAR_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-sm font-medium hover:bg-secondary transition">
            <FileText size={16} /> Resume
          </a>
        </div>

        <div className="flex items-center gap-5 text-muted-foreground">
          <a aria-label="GitHub" href="https://github.com/zeefromzee" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition"><Github size={20} /></a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/zeel-gajjar-0235b13a9" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition"><Linkedin size={20} /></a>
          <a aria-label="Email" href="mailto:zeelg322@gmail.com" className="hover:text-foreground transition"><Mail size={20} /></a>
          <a aria-label="Portfolio" href="https://zeel-portfolio-z33.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition"><Globe size={20} /></a>
          <span className="text-sm flex items-center gap-1.5"><MapPin size={15} /> India</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mt-20 border border-border rounded-lg overflow-hidden">
        {[
          { k: "Focus", v: "Cryptography" },
          { k: "Field", v: "Quantum Computing" },
          { k: "Status", v: "BTech, 2029" },
          { k: "Role", v: "VC, IEEE SPS" },
        ].map((s) => (
          <div key={s.k} className="bg-background p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">{s.k}</p>
            <p className="font-serif-display text-lg font-medium">{s.v}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeView;
