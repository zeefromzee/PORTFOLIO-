import { Mail, Github } from "lucide-react";
import { SectionHeader } from "./AboutSection";

const ContactSection = () => (
  <section id="contact" className="py-28 relative">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <SectionHeader number="06" title="Get In Touch" />

      <p className="text-muted-foreground max-w-md mx-auto mt-8 mb-8 leading-relaxed">
        I'm open to research collaborations, discussions about cryptography,
        or anything quantum computing. Feel free to reach out.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="mailto:zeelg322@gmail.com"
          className="inline-flex items-center gap-2 font-mono text-sm border border-primary/30 text-primary px-6 py-3 rounded hover:bg-primary/10 transition-all"
        >
          <Mail size={16} /> Say Hello
        </a>
        <a
          href="https://github.com/zeefromzee"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm border border-border text-muted-foreground px-6 py-3 rounded hover:text-primary hover:border-primary/30 transition-all"
        >
          <Github size={16} /> GitHub
        </a>
      </div>
    </div>

    <footer className="mt-28 text-center">
      <p className="font-mono text-xs text-muted-foreground">
        Built by Zeel Gajjar
      </p>
    </footer>
  </section>
);

export default ContactSection;
