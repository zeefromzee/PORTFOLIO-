import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-background/85 backdrop-blur-md transition-shadow ${scrolled ? "border-b border-border shadow-sm" : ""}`}>
      <nav className="container-prose flex items-center justify-between h-16">
        <a href="#home" className="font-serif-display text-xl font-semibold tracking-tight">
          Zeel Gajjar
        </a>
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:zeelg322@gmail.com"
          className="hidden md:inline-flex items-center text-sm font-medium px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
