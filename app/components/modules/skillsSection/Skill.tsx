import Link from "next/link"
import IconRenderer from "../../elements/icons/IconRenderer"

type Props = {
  skillDetails: {
    name: string, 
    experienceType: string, 
    iconSource: string, 
    link: string, 
    experience: number
  }
}

export default function Skill ({skillDetails}: Props) {
  const {name, experienceType, iconSource, 
    link, experience} = skillDetails

  const containerClassName = 
    `${name.split(' ').join('').toLowerCase()}-skill-container`

  return (
    <li className="skills-list-item">
      <div className={`skill-container ${containerClassName}`}>
        <div className="skill-icon-container">
          <Link href={link}>
            <a target="_blank">
              <IconRenderer 
                iconAlt={name}
                iconSource={iconSource}
                iconSize={{width: "100%", height: "auto",}}
              />
            </a>
          </Link>
        </div>

        <div className="skill-detail-container">
          <div className="skill-detail-name-container">
            <Link href={link}>
              <a target="_blank">
                <h6 className="skill-detail-name-text hover:underline">
                  {name}
                </h6>
              </a>
            </Link>
          </div>

          <div className="skill-detail-experience-container">
            <span className="skill-detail-experience-text">
              {experience}
            </span> {' '}
            <span className="skill-detail-experience-text">
              {experienceType}
            </span>
          </div>
        </div>
      </div>
    </li>
  )
}