import { Github, Mail, FileText } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(185 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(185 100% 50%) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      {/* Radial glow */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-cyber-green/5 blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 pt-24">
        <p className="font-mono text-primary text-sm mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Hi, I'm
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Zeel Gajjar<span className="text-primary">.</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-mono font-medium text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          Cryptography Researcher · Quantum Computing · Cybersecurity
        </h2>
        <p className="max-w-xl text-muted-foreground leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: "0.8s" }}>
          I build cryptographic tools, explore quantum computing, and research the mathematics
          behind secure systems. Currently pursuing BTech in Cybersecurity at M.B. Institute of Technology.
        </p>

        <div className="flex gap-4 animate-fade-up" style={{ animationDelay: "1s" }}>
          <a href="https://github.com/zeefromzee" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm border border-primary/30 text-primary px-5 py-2.5 rounded hover:bg-primary/10 transition-all hover:border-primary/60">
            <Github size={16} /> GitHub
          </a>
          <a href="mailto:zeelg322@gmail.com"
            className="flex items-center gap-2 font-mono text-sm border border-border text-muted-foreground px-5 py-2.5 rounded hover:text-primary hover:border-primary/30 transition-all">
            <Mail size={16} /> Email
          </a>
          <a href="https://portfolio-zeel-y1.vercel.app/RESUME.pdf" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm border border-border text-muted-foreground px-5 py-2.5 rounded hover:text-primary hover:border-primary/30 transition-all">
            <FileText size={16} /> Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
