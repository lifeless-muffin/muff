import Link from "next/link"
import IconRenderer from "../../elements/icons/IconRenderer"

type ProjectProps = {
  projectDetails?: any
  projectIndex: number
}

const ProjectStack = ({ projectDetails }: any) => {
  return (
    <div className="project-tech-stack">
      <ul className="project-tech-stack-list">
        {projectDetails?.tech_stack?.map((item: any, index: number) => (
          <Link href={item.link} key={index}>
            <li className="project-tech-stack-item">
              <span className="project-tech-stack-item-text">
                {item.name}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

const Project = ({ projectDetails, projectIndex }: ProjectProps) => {
  return (
    <li className="project-container" key={projectDetails?.name || projectIndex}>
      <div className="project-image-container">
        <img className="project-preview-image"
          src={`/assets/projects/${projectDetails?.name?.toLowerCase()}-preview.png`}
          alt={`${projectDetails?.name} Preview Image`} />
        <div className={`project-image-overlay ${projectDetails?.name?.toLowerCase()}-preview-overlay`}></div>
        <span className="project-image-overlay-text moiva-preview-overlay-text">
          {projectDetails?.name}
        </span>
      </div>

      <div className="project-details-container">
        <Link href={projectDetails.links?.demo}>
          <a target="_blank">
            <div className="project-title-container cursor-pointer">
              <div className="project-title-link-icon">
                <IconRenderer
                  iconSource="/assets/link-icon.svg"
                  iconAlt="Link Icon"
                  iconSize={{
                    width: 18,
                    height: 18
                  }}
                />
              </div>

              <h4 className="project-title hover:underline">
                {projectDetails?.full_name}
              </h4>
            </div>
          </a>
        </Link>

        {projectDetails.links?.github ? (
          <div className="project-links-container">
            <Link href={projectDetails.links?.github}>
              <a target="_blank">
                <span className="project-link project-github-link">
                  Github repository link
                </span>
              </a>
            </Link>

            <Link href={projectDetails.links?.demo}>
              <a target="_blank">
                <span className="project-link project-demo-link">Live demo</span>
              </a>
            </Link>
          </div>
        ) : ''}

        <div className="project-description-container">
          <p className="project-description">
            {projectDetails?.description}
          </p>
        </div>

        <div className="project-tech-stack-container">
          {ProjectStack({ projectDetails })}
        </div>
      </div>
    </li>
  )
}


export default Project