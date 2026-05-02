import Window from "./Window";

const AboutView = () => {
  return (
    <div className="p-4 md:p-8 pb-12">
      <Window
        title="about_me ♡ a little letter"
        ribbon="◌ dear visitor ◌"
        statusBar="folded with care"
        className="max-w-4xl mx-auto"
      >
        <div className="ribbon-bg p-6 md:p-10 relative">
          <div className="absolute top-4 left-6 text-3xl rotate-[-12deg]">🎀</div>
          <div className="absolute bottom-4 right-6 text-2xl">🦢</div>

          <div className="bg-[hsl(var(--cream))] rounded-3xl p-6 md:p-10 shadow-md max-w-2xl mx-auto border border-dashed border-[hsl(var(--border))]">
            <h1 className="font-script text-5xl md:text-6xl text-[hsl(var(--pink-deep))] text-center mb-2">about me</h1>
            <p className="font-hand text-center text-[hsl(var(--accent))] mb-6">~ a soft introduction ~</p>

            <div className="space-y-4 font-serif text-[15px] leading-relaxed text-[hsl(var(--foreground))]">
              <p>
                <span className="font-script text-2xl text-[hsl(var(--accent))]">I'm</span> a cybersecurity
                student with a quiet obsession for the mathematics tucked beneath cryptographic
                systems. my work flutters between <em>cryptography</em>, <em>quantum computing</em>,
                and <em>algebraic topology</em> — places where abstract beauty meets very real security.
              </p>
              <p>
                I've self-studied quantum measurement and QKD protocols (BB84, B92) just to sit
                closer to the seam between physics and cipher. I love making these ideas feel
                less like cathedrals and more like <span className="italic">letters you can read</span>.
              </p>
              <p>
                outside of research, you'll find me solving CTFs on <b>PicoCTF</b> and <b>OverTheWire</b> —
                web exploitation, binary, crypto. tea optional, but encouraged. ☕
              </p>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 border border-dashed border-[hsl(var(--border))]">
                <p className="font-hand text-[hsl(var(--accent))] text-sm mb-1">⌒ education</p>
                <p className="font-serif italic text-sm font-semibold">BTech in Cybersecurity</p>
                <p className="text-xs text-muted-foreground mt-1">Madhuben & Bhanubhai Patel Institute of Technology</p>
                <p className="text-xs text-muted-foreground">Class of 2029</p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-dashed border-[hsl(var(--border))]">
                <p className="font-hand text-[hsl(var(--accent))] text-sm mb-1">⌒ focus areas</p>
                <p className="font-serif italic text-sm">cryptography · quantum computing · topology</p>
                <p className="font-hand text-[hsl(var(--accent))] text-sm mt-3 mb-1">⌒ interests</p>
                <p className="font-serif italic text-sm">CTFs · research · open source · pretty math</p>
              </div>
            </div>

            <p className="font-script text-3xl text-[hsl(var(--pink-deep))] text-right mt-8">— Zeel ♡</p>
          </div>
        </div>
      </Window>
    </div>
  );
};

export default AboutView;
