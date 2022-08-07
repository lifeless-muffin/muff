import HeroSection from "../../modules/heroSection/HeroSection";
import ProjectSection from "../../modules/projectsSection/ProjectsSection";
import projectsList from "../../../constants/projects.json"
import SkillsSection from "../../modules/skillsSection/SkillsSection";

const skillsList = [
  {
    name: "Typescript",
    experienceType: 'years',
    iconSource: '/assets/skills/typescript-icon.svg',
    link: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-262/',
    experience: 2
  },
  {
    name: "React",
    experienceType: 'years',
    iconSource: '/assets/skills/react-icon.svg',
    link: 'https://reactjs.org/',
    experience: 1
  },
  {
    name: "Node js",
    experienceType: 'years',
    iconSource: '/assets/skills/node-icon.svg',
    link: 'https://nodejs.org/',
    experience: 1
  },
  {
    name: "HTML",
    experienceType: 'years',
    iconSource: '/assets/skills/html-icon.svg',
    link: 'https://html.spec.whatwg.org/',
    experience: 2
  },
  {
    name: "Tailwind",
    experienceType: 'years',
    iconSource: '/assets/skills/tailwind-icon.svg',
    link: 'https://www.w3.org/TR/CSS',
    experience: 1
  },
  {
    name: "Svelte",
    experienceType: 'years',
    iconSource: '/assets/skills/svelte-icon.svg',
    link: 'https://svelte.dev/',
    experience: 1
  },
]

const HomePage = () => (
  <div className="home-page-content">
    <HeroSection />
    <ProjectSection projects={projectsList} />
    <SkillsSection skillsList={skillsList} />
  </div>
);

export default HomePage; 