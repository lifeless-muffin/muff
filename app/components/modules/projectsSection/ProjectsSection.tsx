import ViewallButton from "../../elements/buttons/ViewallButton";
import SectionHeading from "../../elements/headings/SectionHeading";
import Project from "../../elements/projects/Project";

type Props = {
  projects: object[]
}

export default function ProjectSection (props: Props) {
  const projectsList = props.projects;

  return (
    <section className="projects-section">
      <div className="projects-header-section">
        <SectionHeading text="Featured projects"/>
        <ViewallButton to="/projects" />
      </div>

      <ul className="projects-list">
        {projectsList.map((project, index) => 
          <Project projectDetails={project} projectIndex={index} key={index} />)}  
      </ul>
    </section>
  )
}