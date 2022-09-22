import HeroSection from "../../modules/heroSection/HeroSection";
import ProjectSection from "../../modules/projectsSection/ProjectsSection";
import SkillsSection from "../../modules/skillsSection/SkillsSection";
import skillsList from "../../../constants/skills.json"
import AboutSection from "../../modules/aboutSection/AboutSection";
import projectsList from "../../../constants/projects.json";

const HomePage = () => {
  return (
    <div className="home-page-content">
      <HeroSection />
      <ProjectSection projects={projectsList} featured={true} />
      <SkillsSection skillsList={skillsList} />
      <AboutSection />
    </div>
  );
}

export default HomePage; 