import Window from "./Window";
import { Github, Mail, FileText } from "lucide-react";

const HomeView = () => {
  return (
    <div className="p-4 md:p-8 pb-12 space-y-6">
      {/* Main explorer window */}
      <Window
        title="FILE EXPLORER - PORTFOLIO"
        menuItems={["File", "Edit", "View", "Help"]}
        statusBar="C:\portfolio\"
        className="max-w-4xl mx-auto"
      >
        <div className="flex flex-col md:flex-row">
          {/* Main content - notepad style */}
          <div className="flex-1 bg-win-bg p-6 md:p-8 min-h-[400px]">
            <p className="text-xs text-muted-foreground mb-2">Hi, I'm</p>
            <h1 className="font-pixel text-5xl md:text-7xl text-foreground leading-none mb-4">
              Zeel Gajjar.
            </h1>
            <h2 className="text-sm md:text-base text-muted-foreground mb-6 tracking-wide">
              Cryptography Researcher · Quantum Computing · Cybersecurity
            </h2>

            <div className="win-border-inset bg-win-bg p-4 mb-6">
              <p className="text-xs leading-relaxed text-foreground">
                I build cryptographic tools, explore quantum computing, and research
                the mathematics behind secure systems. Currently pursuing BTech in
                Cybersecurity at M.B. Institute of Technology.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <a href="https://github.com/zeefromzee" target="_blank" rel="noopener noreferrer"
                className="win-button flex items-center gap-1.5 text-[11px] py-1.5 px-3">
                <Github size={12} /> GitHub
              </a>
              <a href="mailto:zeelg322@gmail.com"
                className="win-button flex items-center gap-1.5 text-[11px] py-1.5 px-3">
                <Mail size={12} /> Email
              </a>
              <a href="https://portfolio-zeel-y1.vercel.app/RESUME.pdf" target="_blank" rel="noopener noreferrer"
                className="win-button flex items-center gap-1.5 text-[11px] py-1.5 px-3">
                <FileText size={12} /> Resume
              </a>
            </div>
          </div>

          {/* Sidebar - contact info */}
          <div className="w-full md:w-48 bg-card border-t md:border-t-0 md:border-l border-border p-3 space-y-3">
            <div>
              <p className="text-[10px] font-bold underline mb-0.5">CONTACT INFO</p>
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground">github:</p>
              <a href="https://github.com/zeefromzee" target="_blank" rel="noopener noreferrer" className="text-[10px] text-accent underline break-all">
                github.com/zeefromzee
              </a>
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground">email:</p>
              <a href="mailto:zeelg322@gmail.com" className="text-[10px] text-accent underline break-all">
                zeelg322@gmail.com
              </a>
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground">location:</p>
              <p className="text-[10px]">India</p>
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground">status:</p>
              <p className="text-[10px]">BTech Student</p>
            </div>
          </div>
        </div>
      </Window>
    </div>
  );
};

export default HomeView;
