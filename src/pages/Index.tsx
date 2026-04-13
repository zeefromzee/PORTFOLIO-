import { useState } from "react";
import Taskbar from "@/components/Taskbar";
import HomeView from "@/components/HomeView";
import AboutView from "@/components/AboutView";
import ResearchView from "@/components/ResearchView";
import ProjectsView from "@/components/ProjectsView";
import SkillsView from "@/components/SkillsView";
import ContactView from "@/components/ContactView";

const views: Record<string, React.FC> = {
  home: HomeView,
  about: AboutView,
  research: ResearchView,
  projects: ProjectsView,
  skills: SkillsView,
  contact: ContactView,
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const ActiveView = views[activeTab] || HomeView;

  return (
    <div className="min-h-screen pb-10 pt-2">
      <ActiveView />
      <Taskbar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
