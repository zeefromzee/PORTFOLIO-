import Window from "./Window";
import { Mail, Github, Linkedin, Globe, MapPin } from "lucide-react";

const ContactView = () => {
  return (
    <div className="p-4 md:p-8 pb-12">
      <Window
        title="say hi ♡ love letters welcome"
        ribbon="✉ for collabs, papers, or pretty math chats ✉"
        statusBar="i reply faster than my qubits decohere"
        className="max-w-3xl mx-auto"
      >
        <div className="stripes-bg p-6 md:p-10 relative">
          <div className="absolute top-3 right-6 text-3xl">✿</div>

          <div className="bg-[hsl(var(--cream))] rounded-3xl p-6 md:p-10 shadow-md border border-dashed border-[hsl(var(--border))] relative">
            <div className="text-center mb-6">
              <p className="font-hand text-[hsl(var(--accent))] text-base">a little envelope from me to you</p>
              <h1 className="font-script text-5xl md:text-6xl text-[hsl(var(--pink-deep))] leading-none">get in touch</h1>
            </div>

            <div className="bg-white rounded-2xl p-5 md:p-6 border border-dashed border-[hsl(var(--border))] mb-6 font-serif text-[15px] leading-relaxed">
              <p className="mb-2">dear friend,</p>
              <p className="mb-2">
                i'm always open to <em>research collaborations</em>, conversations about
                cryptography, or anything quantum-shaped. if you'd like to share a paper,
                an idea, or simply say hello — please do.
              </p>
              <p>fondly,</p>
              <p className="font-script text-3xl text-[hsl(var(--pink-deep))] mt-1">Zeel ♡</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <a href="mailto:zeelg322@gmail.com" className="bg-white rounded-2xl p-3 flex items-center gap-3 border border-dashed border-[hsl(var(--border))] hover:bg-[hsl(var(--secondary))] transition">
                <Mail size={16} className="text-[hsl(var(--accent))]" />
                <div>
                  <p className="font-hand text-xs text-[hsl(var(--accent))]">email</p>
                  <p className="text-xs font-serif italic">zeelg322@gmail.com</p>
                </div>
              </a>
              <a href="https://github.com/zeefromzee" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-3 flex items-center gap-3 border border-dashed border-[hsl(var(--border))] hover:bg-[hsl(var(--secondary))] transition">
                <Github size={16} className="text-[hsl(var(--accent))]" />
                <div>
                  <p className="font-hand text-xs text-[hsl(var(--accent))]">github</p>
                  <p className="text-xs font-serif italic">@zeefromzee</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/zeel-gajjar-0235b13a9" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-3 flex items-center gap-3 border border-dashed border-[hsl(var(--border))] hover:bg-[hsl(var(--secondary))] transition">
                <Linkedin size={16} className="text-[hsl(var(--accent))]" />
                <div>
                  <p className="font-hand text-xs text-[hsl(var(--accent))]">linkedin</p>
                  <p className="text-xs font-serif italic">zeel-gajjar</p>
                </div>
              </a>
              <a href="https://zeel-portfolio-z33.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-3 flex items-center gap-3 border border-dashed border-[hsl(var(--border))] hover:bg-[hsl(var(--secondary))] transition">
                <Globe size={16} className="text-[hsl(var(--accent))]" />
                <div>
                  <p className="font-hand text-xs text-[hsl(var(--accent))]">portfolio</p>
                  <p className="text-xs font-serif italic">zeel-portfolio-z33</p>
                </div>
              </a>
              <div className="bg-white rounded-2xl p-3 flex items-center gap-3 border border-dashed border-[hsl(var(--border))] sm:col-span-2">
                <MapPin size={16} className="text-[hsl(var(--accent))]" />
                <div>
                  <p className="font-hand text-xs text-[hsl(var(--accent))]">location</p>
                  <p className="text-xs font-serif italic">India 🌷 · BTech Student in Cybersecurity, MBIT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Window>
    </div>
  );
};

export default ContactView;
