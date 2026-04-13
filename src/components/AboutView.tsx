import Window from "./Window";

const AboutView = () => {
  return (
    <div className="p-4 md:p-8 pb-12 space-y-4">
      <Window
        title="NOTEPAD.EXE - about_me.txt"
        menuItems={["File", "Edit", "Search", "Help"]}
        statusBar="C:\portfolio\about_me.txt"
        className="max-w-4xl mx-auto"
      >
        <div className="bg-win-bg p-6 md:p-8">
          <h1 className="font-pixel text-4xl md:text-5xl text-foreground mb-6">about me</h1>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1 space-y-4 text-xs leading-relaxed text-foreground">
              <p>
                I'm a cybersecurity student with a deep interest in the mathematics
                behind cryptographic systems. My work spans <b>cryptography</b>,{" "}
                <b>quantum computing</b>, and <b>algebraic topology</b>—areas where
                abstract mathematics directly impacts real-world security.
              </p>
              <p>
                I've self-studied quantum physics principles to understand quantum
                measurement concepts for cryptographic applications. I'm passionate
                about making cryptography and security concepts accessible to everyone.
              </p>
              <p>
                Outside of research, I compete in CTF challenges on <b>PicoCTF</b> and{" "}
                <b>OverTheWire</b>, working through problems in web exploitation,
                binary exploitation, and cryptography.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="win-border-inset bg-win-bg p-3">
              <p className="text-[10px] font-bold underline mb-2">EDUCATION:</p>
              <p className="text-xs font-bold">BTech in Cybersecurity</p>
              <p className="text-[10px] text-muted-foreground">M.B. Institute of Technology</p>
              <p className="text-[10px] text-muted-foreground">Class of 2029</p>
            </div>
            <div className="win-border-inset bg-win-bg p-3">
              <p className="text-[10px] font-bold underline mb-2">FOCUS AREAS:</p>
              <p className="text-xs">Cryptography · Quantum Computing · Topology</p>
              <p className="text-[10px] text-muted-foreground mt-2">INTERESTS:</p>
              <p className="text-xs">CTFs · Research · Open Source</p>
            </div>
          </div>
        </div>
      </Window>
    </div>
  );
};

export default AboutView;
