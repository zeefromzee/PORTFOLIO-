import Window from "./Window";
import { Mail, Github } from "lucide-react";

const ContactView = () => {
  return (
    <div className="p-4 md:p-8 pb-12">
      <Window
        title="OUTLOOK EXPRESS - New Message"
        menuItems={["File", "Edit", "View", "Insert", "Format", "Tools", "Help"]}
        statusBar="Ready"
        className="max-w-3xl mx-auto"
      >
        <div className="bg-win-bg p-6 md:p-8">
          <div className="space-y-2 mb-6 border-b border-border pb-4">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold w-12">To:</span>
              <div className="win-border-inset bg-win-bg flex-1 px-2 py-1">
                <span className="text-muted-foreground">zeelg322@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold w-12">Cc:</span>
              <div className="win-border-inset bg-win-bg flex-1 px-2 py-1">
                <span className="text-muted-foreground"></span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold w-12">Subject:</span>
              <div className="win-border-inset bg-win-bg flex-1 px-2 py-1">
                <span className="text-muted-foreground">Let's collaborate!</span>
              </div>
            </div>
          </div>

          <div className="win-border-inset bg-win-bg p-4 min-h-[150px] text-xs leading-relaxed mb-6">
            <p>I'm open to research collaborations, discussions about cryptography,</p>
            <p>or anything quantum computing. Feel free to reach out.</p>
            <br />
            <p>— Zeel</p>
          </div>

          <div className="flex gap-2">
            <a
              href="mailto:zeelg322@gmail.com"
              className="win-button flex items-center gap-1.5 text-[11px] py-1.5 px-4"
            >
              <Mail size={12} /> Send Email
            </a>
            <a
              href="https://github.com/zeefromzee"
              target="_blank"
              rel="noopener noreferrer"
              className="win-button flex items-center gap-1.5 text-[11px] py-1.5 px-4"
            >
              <Github size={12} /> Visit GitHub
            </a>
          </div>
        </div>
      </Window>
    </div>
  );
};

export default ContactView;
