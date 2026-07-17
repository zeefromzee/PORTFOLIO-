import { Github, Linkedin, Mail, Globe, MapPin, ArrowUpRight } from "lucide-react";

const links = [
  { Icon: Mail, label: "Email", value: "zeelg322@gmail.com", href: "mailto:zeelg322@gmail.com" },
  { Icon: Github, label: "GitHub", value: "@zeefromzee", href: "https://github.com/zeefromzee" },
  { Icon: Linkedin, label: "LinkedIn", value: "zeel-gajjar", href: "https://www.linkedin.com/in/zeel-gajjar-0235b13a9" },
  { Icon: Globe, label: "Portfolio", value: "zeel-portfolio-z33", href: "https://zeel-portfolio-z33.vercel.app/" },
];

const ContactView = () => {
  return (
    <div className="container-prose py-24">
      <div className="mb-12">
        <p className="font-mono text-sm text-accent uppercase tracking-wider mb-3">06 / Contact</p>
        <h2 className="font-serif-display text-4xl md:text-6xl font-medium tracking-tight max-w-3xl italic">
          Let's talk cryptography, quantum, or anything in between.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <p className="text-lg text-foreground/80 leading-relaxed">
          I'm always open to research collaborations, conversations about cryptography,
          or anything quantum-shaped. If you would like to share a paper, an idea, or
          simply say hello, please reach out.
        </p>

        <div className="space-y-px bg-border border border-border rounded-lg overflow-hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group bg-background flex items-center gap-4 p-5 hover:bg-secondary/50 transition"
            >
              <l.Icon size={18} className="text-muted-foreground shrink-0" />
              <div className="flex-1">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{l.label}</p>
                <p className="text-base font-medium">{l.value}</p>
              </div>
              <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-foreground transition" />
            </a>
          ))}
          <div className="bg-background flex items-center gap-4 p-5">
            <MapPin size={18} className="text-muted-foreground shrink-0" />
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Location</p>
              <p className="text-base font-medium">India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
