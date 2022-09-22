import ViewallButton from "../../elements/buttons/ViewallButton";
import SectionHeading from "../../elements/headings/SectionHeading";
import Project from "./Project";

type Props = {
  projects: object[],
  featured: boolean
}

export default function ProjectSection(props: Props) {

  const projectsList = props.projects;
  const isFeatured = props.featured;

  return (
    <section className="projects-section">
      {isFeatured && (
        <div className="projects-header-section">
          <SectionHeading text="Featured projects" />
          <ViewallButton to="/projects" />
        </div>
      )}

      <ul className="projects-list">
        {projectsList?.map((project, index) =>
          <Project projectDetails={project} projectIndex={index} key={index} />)}
      </ul>
    </section>
  )
}