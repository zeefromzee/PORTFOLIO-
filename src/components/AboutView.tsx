import Window from "./Window";

const AboutView = () => {
  return (
    <div className="p-4 md:p-8 pb-12">
      <Window
        title="about · a little letter"
        ribbon="dear visitor"
        statusBar="folded with care"
        className="max-w-4xl mx-auto"
      >
        <div className="ribbon-bg p-6 md:p-10">
          <div className="bg-[hsl(var(--cream))] rounded-3xl p-6 md:p-10 shadow-md max-w-2xl mx-auto border border-dashed border-[hsl(var(--border))]">
            <h1 className="font-script text-5xl md:text-6xl text-[hsl(var(--pink-deep))] text-center mb-2">about me</h1>
            <p className="font-hand text-center text-[hsl(var(--accent))] italic mb-6">— a soft introduction —</p>

            <div className="space-y-4 font-serif text-[15px] leading-relaxed text-[hsl(var(--foreground))]">
              <p>
                <span className="font-script text-2xl text-[hsl(var(--accent))]">I'm</span> a cybersecurity
                student with a quiet obsession for the mathematics tucked beneath cryptographic
                systems. My work moves between <em>cryptography</em> and <em>quantum computing</em>
              </p>
              <p>
                I've self-studied quantum physics , scalar field theory and QKD protocols (BB84, B92) just to sit
                closer to the seam between physics and cipher. I love making these ideas feel
                less like cathedrals and more like <span className="italic">letters you can read</span>.
              </p>
              <p>
                Outside of research, you'll find me solving CTFs on <b>PicoCTF</b> and <b>OverTheWire</b> —
                web exploitation, binary, and crypto.
              </p>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 border border-dashed border-[hsl(var(--border))]">
                <p className="font-hand text-[hsl(var(--accent))] text-sm mb-1 italic">— education —</p>
                <p className="font-serif italic text-sm font-semibold">BTech in Cybersecurity</p>
                <p className="text-xs text-muted-foreground mt-1">Madhuben &amp; Bhanubhai Patel Institute of Technology</p>
                <p className="text-xs text-muted-foreground">Class of 2029</p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-dashed border-[hsl(var(--border))]">
                <p className="font-hand text-[hsl(var(--accent))] text-sm mb-1 italic">— focus areas —</p>
                <p className="font-serif italic text-sm">cryptography · quantum computing · field theory</p>
                <p className="font-hand text-[hsl(var(--accent))] text-sm mt-3 mb-1 italic">— interests —</p>
                <p className="font-serif italic text-sm">CTFs · research · Quantum physics</p>
              </div>
            </div>

            <p className="font-script text-3xl text-[hsl(var(--pink-deep))] text-right mt-8">— Zeel</p>
          </div>
        </div>
      </Window>
    </div>
  );
};

export default AboutView;
