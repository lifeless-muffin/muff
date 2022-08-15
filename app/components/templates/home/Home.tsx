import HeroSection from "../../modules/heroSection/HeroSection";
import ProjectSection from "../../modules/projectsSection/ProjectsSection";
import projectsList from "../../../constants/projects.json"
import SkillsSection from "../../modules/skillsSection/SkillsSection";
import skillsList from "../../../constants/skills.json"
import AboutSection from "../../modules/aboutSection/AboutSection";

const HomePage = () => (
  <div className="home-page-content">
    <HeroSection />
    <ProjectSection projects={projectsList} />
    <SkillsSection skillsList={skillsList} />
    <AboutSection />
  </div>
);

export default HomePage; 