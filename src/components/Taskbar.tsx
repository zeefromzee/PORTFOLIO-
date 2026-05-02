import { useState } from "react";
import { Heart } from "lucide-react";

const navTabs = [
  { id: "home", label: "home", icon: "✿" },
  { id: "about", label: "about", icon: "♡" },
  { id: "research", label: "research", icon: "✦" },
  { id: "projects", label: "projects", icon: "❀" },
  { id: "skills", label: "skills", icon: "✿" },
  { id: "contact", label: "contact", icon: "✉" },
];

interface TaskbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Taskbar = ({ activeTab, onTabChange }: TaskbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* floating pill nav */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 win-border bg-[hsl(var(--cream))] flex items-center gap-1 px-2 py-1.5 backdrop-blur-sm">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="win-button flex items-center gap-1 text-xs md:hidden"
          aria-label="menu"
        >
          <Heart size={11} fill="currentColor" /> menu
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { onTabChange(tab.id); setMenuOpen(false); }}
              className={`text-xs px-3 py-1.5 rounded-full font-serif italic transition-all ${
                activeTab === tab.id
                  ? "bg-[hsl(var(--accent))] text-white shadow-md"
                  : "hover:bg-white text-[hsl(var(--pink-deep))]"
              }`}
            >
              <span className="mr-1">{tab.icon}</span>{tab.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-1 pl-2 ml-1 border-l border-dashed border-[hsl(var(--border))]">
          <span className="font-hand text-xs text-[hsl(var(--accent))] px-2">
            {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </span>
        </div>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="fixed bottom-20 left-4 right-4 z-50 win-border bg-[hsl(var(--cream))] p-3 md:hidden">
          <p className="font-script text-2xl text-[hsl(var(--pink-deep))] text-center mb-2">menu ♡</p>
          <div className="grid grid-cols-2 gap-2">
            {navTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { onTabChange(tab.id); setMenuOpen(false); }}
                className={`text-xs px-3 py-2 rounded-full font-serif italic ${
                  activeTab === tab.id
                    ? "bg-[hsl(var(--accent))] text-white"
                    : "bg-white text-[hsl(var(--pink-deep))]"
                }`}
              >
                <span className="mr-1">{tab.icon}</span>{tab.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Taskbar;
