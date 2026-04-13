import { Award, Trophy, BookOpen, Shield } from "lucide-react";
import { SectionHeader } from "./AboutSection";

const achievements = [
  {
    icon: Award,
    title: "Vice Chairperson — IEEE Signal Processing Society",
    description: "Serving as Vice Chairperson of the IEEE SPS student chapter, organizing seminars, workshops, and technical sessions on signal processing, applied mathematics, and their intersections with cryptography and quantum computing.",
  },
  {
    icon: Trophy,
    title: "1st Place — College Ideathon",
    description: "Designed and pitched an IoT encryption system for smart home devices using camera-based entropy generation, hardware entropy, and thermal noise for edge-device cryptographic key generation.",
  },
  {
    icon: BookOpen,
    title: "Independent Research",
    description: "Authored a research paper on cryptographic key generation combining visual entropy with system entropy sources. Achieved 100% pass rate across all 16 NIST SP 800-22 tests for over 2000 generated keys.",
  },
  {
    icon: Shield,
    title: "CTF Competitions",
    description: "Active participant in PicoCTF and OverTheWire wargames, solving challenges across web exploitation, binary exploitation, and cryptography categories.",
  },
];

const AchievementsSection = () => (
  <section id="achievements" className="py-28 relative">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader number="05" title="Achievements" />

      <div className="grid md:grid-cols-2 gap-5 mt-12">
        {achievements.map((a) => (
          <div key={a.title} className="bg-card border border-border rounded-lg p-6 hover:border-primary/20 transition-all group">
            <a.icon size={20} className="text-primary mb-4" />
            <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors text-sm">
              {a.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{a.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
