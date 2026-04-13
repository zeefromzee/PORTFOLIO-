import { useState } from "react";

const navTabs = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "research", label: "RESEARCH" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "contact", label: "CONTACT" },
];

interface TaskbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Taskbar = ({ activeTab, onTabChange }: TaskbarProps) => {
  const [startOpen, setStartOpen] = useState(false);

  return (
    <>
      {/* Taskbar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 win-border bg-card flex items-center gap-1 px-1 py-1">
        <button
          onClick={() => setStartOpen(!startOpen)}
          className="win-button font-bold text-[11px] px-3 py-1 flex items-center gap-1"
        >
          Start
        </button>

        <div className="h-5 w-px bg-border mx-1" />

        {navTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => { onTabChange(tab.id); setStartOpen(false); }}
            className={`text-[10px] px-2 py-1 ${
              activeTab === tab.id
                ? "win-border-inset bg-win-bg font-bold"
                : "win-button"
            }`}
          >
            {tab.label}
          </button>
        ))}

        <div className="flex-1" />

        <div className="win-border-inset px-2 py-0.5 text-[10px] text-muted-foreground">
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>

      {/* Start Menu */}
      {startOpen && (
        <div className="fixed bottom-8 left-1 z-50 win-border bg-card w-52">
          <div className="bg-win-titlebar px-2 py-6 flex items-end">
            <span className="text-win-titlebar-text text-xs font-bold tracking-widest" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}>
              Zeel Gajjar
            </span>
          </div>
          <div className="py-1">
            {navTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { onTabChange(tab.id); setStartOpen(false); }}
                className="w-full text-left px-4 py-1.5 text-xs hover:bg-win-highlight hover:text-win-titlebar-text flex items-center gap-2"
              >
                <span className="text-sm">📁</span> {tab.label}
              </button>
            ))}
            <div className="border-t border-border my-1" />
            <a
              href="https://portfolio-zeel-y1.vercel.app/RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-left px-4 py-1.5 text-xs hover:bg-win-highlight hover:text-win-titlebar-text flex items-center gap-2 block"
            >
              <span className="text-sm">📄</span> Resume.pdf
            </a>
            <a
              href="https://github.com/zeefromzee"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-left px-4 py-1.5 text-xs hover:bg-win-highlight hover:text-win-titlebar-text flex items-center gap-2 block"
            >
              <span className="text-sm">🌐</span> GitHub
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Taskbar;
