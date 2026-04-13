import { useState, useEffect } from "react";

const navItems = ["About", "Research", "Projects", "Skills", "Achievements", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-mono text-xl font-bold text-primary glow-text">
          ZG<span className="text-cyber-green">.</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              <span className="text-primary/60 text-xs mr-1">0{i + 1}.</span>
              {item}
            </button>
          ))}
          <a
            href="https://portfolio-zeel-y1.vercel.app/RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono border border-primary/30 text-primary px-4 py-1.5 rounded hover:bg-primary/10 transition-colors"
          >
            Resume
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-primary">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-6 space-y-4">
          {navItems.map((item, i) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              <span className="text-primary/60 text-xs mr-1">0{i + 1}.</span>
              {item}
            </button>
          ))}
          <a
            href="https://portfolio-zeel-y1.vercel.app/RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-mono border border-primary/30 text-primary px-4 py-1.5 rounded text-center hover:bg-primary/10 transition-colors"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
