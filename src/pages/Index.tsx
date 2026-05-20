import Navbar from "@/components/Navbar";
import HomeView from "@/components/HomeView";
import AboutView from "@/components/AboutView";
import ResearchView from "@/components/ResearchView";
import ProjectsView from "@/components/ProjectsView";
import SkillsView from "@/components/SkillsView";
import ContactView from "@/components/ContactView";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section id="home"><HomeView /></section>
        <section id="about" className="section-divider"><AboutView /></section>
        <section id="research" className="section-divider"><ResearchView /></section>
        <section id="projects" className="section-divider"><ProjectsView /></section>
        <section id="skills" className="section-divider"><SkillsView /></section>
        <section id="contact" className="section-divider"><ContactView /></section>
      </main>
      <footer className="section-divider py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Zeel Gajjar · Built with care
      </footer>
    </div>
  );
};

export default Index;
