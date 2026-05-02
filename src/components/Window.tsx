import { ReactNode } from "react";

interface WindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  menuItems?: string[];
  statusBar?: string;
  maximized?: boolean;
  ribbon?: string;
}

const Window = ({ title, children, className = "", menuItems, statusBar, ribbon }: WindowProps) => {
  return (
    <div className={`win-border bg-card flex flex-col overflow-hidden ${className}`}>
      {/* Title bar */}
      <div className="bg-gradient-to-r from-[hsl(345_70%_82%)] via-[hsl(345_75%_88%)] to-[hsl(345_70%_82%)] px-4 py-2 flex items-center justify-between select-none shrink-0 border-b border-[hsl(var(--border))] relative">
        <span className="text-[hsl(var(--pink-deep))] text-xs font-serif italic tracking-wide truncate">
          ✿ {title}
        </span>
        <div className="flex gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[hsl(345_60%_75%)]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[hsl(15_60%_80%)]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[hsl(35_70%_85%)]"></span>
        </div>
      </div>

      {/* Optional menu / ribbon caption */}
      {ribbon && (
        <div className="bg-[hsl(var(--cream))] px-4 py-1 text-[10px] font-hand text-[hsl(var(--pink-deep))] border-b border-dashed border-[hsl(var(--border))] text-center">
          {ribbon}
        </div>
      )}
      {menuItems && (
        <div className="bg-[hsl(var(--win-menubar))] border-b border-dashed border-[hsl(var(--border))] px-3 py-1 flex gap-3 shrink-0">
          {menuItems.map((item) => (
            <span key={item} className="text-[11px] italic font-serif text-[hsl(var(--pink-deep))] hover:underline cursor-pointer">
              {item}
            </span>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>

      {/* Status bar */}
      {statusBar && (
        <div className="bg-[hsl(var(--cream))] px-3 py-1 shrink-0 border-t border-dashed border-[hsl(var(--border))]">
          <span className="text-[10px] font-hand text-[hsl(var(--pink-deep))]">♡ {statusBar}</span>
        </div>
      )}
    </div>
  );
};

export default Window;
