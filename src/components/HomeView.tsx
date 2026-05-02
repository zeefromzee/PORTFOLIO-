import Window from "./Window";
import { Github, Mail, FileText, Linkedin, Globe } from "lucide-react";

const Ornament = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 12" className={className} fill="none" stroke="currentColor" strokeWidth="0.8">
    <path d="M2 6 H22" />
    <circle cx="26" cy="6" r="1.5" />
    <circle cx="34" cy="6" r="1.5" />
    <path d="M38 6 H58" />
  </svg>
);

const HomeView = () => {
  return (
    <div className="p-4 md:p-8 pb-12 space-y-6">
      <Window
        title="welcome to my little corner"
        ribbon="a soft place for cryptography and curiosity"
        statusBar="composed with care"
        className="max-w-5xl mx-auto"
      >
        <div className="stripes-bg p-6 md:p-10">
          <div className="bg-[hsl(var(--win-bg))] rounded-[2rem] doodle-frame p-8 md:p-12 shadow-lg max-w-3xl mx-auto text-center">
            <p className="font-hand text-2xl text-[hsl(var(--accent))] mb-1">hi there, i'm</p>
            <h1 className="font-script text-6xl md:text-8xl text-[hsl(var(--pink-deep))] leading-none mb-3">
              Zeel Gajjar
            </h1>
            <Ornament className="w-24 h-3 mx-auto text-[hsl(var(--accent))] mb-4" />
            <p className="font-serif italic text-base md:text-lg text-[hsl(var(--foreground))] mb-6">
              cryptography researcher · quantum computing · cybersecurity
            </p>

            <div className="border-t border-dashed border-[hsl(var(--border))] my-5 mx-8" />

            <p className="font-serif text-sm md:text-base leading-relaxed text-[hsl(var(--foreground))] max-w-xl mx-auto mb-7">
              I build cryptographic tools, explore quantum computing, and chase the
              {/* <span className="font-script text-xl text-[hsl(var(--accent))]"> elegant </span> */}
              mathematics behind secure systems. Currently a BTech student at
              <span className="italic"> Madhuben &amp; Bhanubhai Patel Institute of Technology</span>.
            </p>

            <div className="flex flex-wrap gap-2 justify-center">
              <a href="https://github.com/zeefromzee" target="_blank" rel="noopener noreferrer" className="win-button flex items-center gap-1.5 text-xs">
                <Github size={13} /> Github
              </a>
              <a href="https://www.linkedin.com/in/zeel-gajjar-0235b13a9" target="_blank" rel="noopener noreferrer" className="win-button flex items-center gap-1.5 text-xs">
                <Linkedin size={13} /> Linkedin
              </a>
              <a href="mailto:zeelg322@gmail.com" className="win-button flex items-center gap-1.5 text-xs">
                <Mail size={13} /> Email
              </a>
              <a href="https://zeel-portfolio-z33.vercel.app/" target="_blank" rel="noopener noreferrer" className="win-button flex items-center gap-1.5 text-xs">
                <Globe size={13} /> Portfolio
              </a>
              <a href="https://portfolio-zeel-y1.vercel.app/ZEEL_GAJJAR_Resume.pdf" target="_blank" rel="noopener noreferrer" className="win-button flex items-center gap-1.5 text-xs">
                <FileText size={13} /> Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 max-w-3xl mx-auto">
            {[
              { label: "location", value: "India" },
              { label: "status", value: "BTech student" },
              { label: "field", value: "cybersecurity" },
              { label: "currently", value: "Studying quantum cryptography" },
            ].map((c) => (
              <div key={c.label} className="bg-white/80 rounded-2xl px-3 py-3 text-center border border-dashed border-[hsl(var(--border))]">
                <p className="font-hand text-xs text-[hsl(var(--accent))] mb-0.5">{c.label}</p>
                <p className="font-serif italic text-xs text-[hsl(var(--foreground))]">{c.value}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 font-hand text-sm text-[hsl(var(--accent))] italic">
            scroll through my little world below
          </p>
        </div>
      </Window>
    </div>
  );
};

export default HomeView;
