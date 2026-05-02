import Window from "./Window";
import { Github, Mail, FileText, Linkedin, Globe, Heart } from "lucide-react";

const HomeView = () => {
  return (
    <div className="p-4 md:p-8 pb-12 space-y-6">
      <Window
        title="welcome to my little corner ✿"
        ribbon="✦ a soft place for cryptography & curiosity ✦"
        statusBar="made with love, ribbons & a little bit of math"
        className="max-w-5xl mx-auto"
      >
        <div className="stripes-bg p-6 md:p-10 relative">
          {/* decorative bows */}
          <div className="absolute top-3 left-4 text-3xl rotate-[-15deg] animate-float">🎀</div>
          <div className="absolute top-6 right-6 text-2xl animate-float" style={{ animationDelay: "1s" }}>🌸</div>
          <div className="absolute bottom-6 right-10 text-xl animate-float" style={{ animationDelay: "2s" }}>♡</div>

          <div className="bg-[hsl(var(--win-bg))] rounded-[2rem] doodle-frame p-6 md:p-10 shadow-lg max-w-3xl mx-auto text-center relative">
            <p className="font-hand text-2xl text-[hsl(var(--accent))] mb-1">hi there, i'm</p>
            <h1 className="font-script text-6xl md:text-8xl text-[hsl(var(--pink-deep))] leading-none mb-3">
              Zeel Gajjar
            </h1>
            <p className="font-serif italic text-base md:text-lg text-[hsl(var(--foreground))] mb-6">
              cryptography researcher · quantum computing · cybersecurity ✿
            </p>

            <div className="border-t border-dashed border-[hsl(var(--border))] my-5 mx-8" />

            <p className="font-serif text-sm md:text-base leading-relaxed text-[hsl(var(--foreground))] max-w-xl mx-auto mb-7">
              I build cryptographic tools, explore quantum computing, and chase the
              <span className="font-script text-xl text-[hsl(var(--accent))]"> elegant </span>
              mathematics behind secure systems. currently dreaming up papers as a BTech student
              at <span className="italic">Madhuben & Bhanubhai Patel Institute of Technology</span>.
            </p>

            <div className="flex flex-wrap gap-2 justify-center">
              <a href="https://github.com/zeefromzee" target="_blank" rel="noopener noreferrer"
                className="win-button flex items-center gap-1.5 text-xs">
                <Github size={13} /> github
              </a>
              <a href="https://www.linkedin.com/in/zeel-gajjar-0235b13a9" target="_blank" rel="noopener noreferrer"
                className="win-button flex items-center gap-1.5 text-xs">
                <Linkedin size={13} /> linkedin
              </a>
              <a href="mailto:zeelg322@gmail.com"
                className="win-button flex items-center gap-1.5 text-xs">
                <Mail size={13} /> email
              </a>
              <a href="https://zeel-portfolio-z33.vercel.app/" target="_blank" rel="noopener noreferrer"
                className="win-button flex items-center gap-1.5 text-xs">
                <Globe size={13} /> portfolio
              </a>
              <a href="https://portfolio-zeel-y1.vercel.app/RESUME.pdf" target="_blank" rel="noopener noreferrer"
                className="win-button flex items-center gap-1.5 text-xs">
                <FileText size={13} /> resume
              </a>
            </div>
          </div>

          {/* tiny detail cards below */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 max-w-3xl mx-auto">
            {[
              { label: "location", value: "India 🌷" },
              { label: "status", value: "BTech student" },
              { label: "field", value: "cybersecurity" },
              { label: "loves", value: "ribbons & RNGs" },
            ].map((c) => (
              <div key={c.label} className="bg-white/80 rounded-2xl px-3 py-3 text-center border border-dashed border-[hsl(var(--border))]">
                <p className="font-hand text-xs text-[hsl(var(--accent))] mb-0.5">{c.label}</p>
                <p className="font-serif italic text-xs text-[hsl(var(--foreground))]">{c.value}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 font-hand text-sm text-[hsl(var(--accent))] flex items-center justify-center gap-1">
            <Heart size={12} fill="currentColor" /> scroll through my little world below <Heart size={12} fill="currentColor" />
          </p>
        </div>
      </Window>
    </div>
  );
};

export default HomeView;
