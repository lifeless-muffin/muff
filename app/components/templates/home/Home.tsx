import HeroSection from "../../modules/heroSection/HeroSection";
import ProjectSection from "../../modules/projectsSection/ProjectsSection";
import projectsList from "../../../constants/projects.json"
import SkillsSection from "../../modules/skillsSection/SkillsSection";
import skillsList from "../../../constants/skills.json"

const HomePage = () => (
  <div className="home-page-content">
    <HeroSection />
    <ProjectSection projects={projectsList} />
    <SkillsSection skillsList={skillsList} />
  </div>
);

export default HomePage; 