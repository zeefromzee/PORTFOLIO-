import { ReactNode } from "react";

interface WindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  menuItems?: string[];
  statusBar?: string;
  maximized?: boolean;
}

const Window = ({ title, children, className = "", menuItems, statusBar, maximized }: WindowProps) => {
  return (
    <div className={`win-border bg-card flex flex-col ${maximized ? "w-full" : ""} ${className}`}>
      {/* Title bar */}
      <div className="bg-win-titlebar px-2 py-1 flex items-center justify-between select-none shrink-0">
        <span className="text-win-titlebar-text text-xs font-bold tracking-wide uppercase truncate">
          {title}
        </span>
        <div className="flex gap-0.5 shrink-0">
          <button className="win-button text-[10px] leading-none w-5 h-4 flex items-center justify-center p-0">_</button>
          <button className="win-button text-[10px] leading-none w-5 h-4 flex items-center justify-center p-0">□</button>
          <button className="win-button text-[10px] leading-none w-5 h-4 flex items-center justify-center p-0">×</button>
        </div>
      </div>

      {/* Menu bar */}
      {menuItems && (
        <div className="bg-win-menubar border-b border-border px-1 py-0.5 flex gap-4 shrink-0">
          {menuItems.map((item) => (
            <span key={item} className="text-[11px] text-foreground hover:bg-win-highlight hover:text-win-titlebar-text px-1 cursor-pointer">
              <span className="underline">{item[0]}</span>{item.slice(1)}
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
        <div className="win-border-inset bg-card px-2 py-0.5 shrink-0">
          <span className="text-[10px] text-muted-foreground">{statusBar}</span>
        </div>
      )}
    </div>
  );
};

export default Window;
