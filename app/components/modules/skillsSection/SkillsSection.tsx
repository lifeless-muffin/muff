import SectionHeading from "../../elements/headings/SectionHeading"
import Skill from "./Skill"

type Props = {
  skillsList: object[]
}

export default function SkillsSection ({skillsList}: Props) {
  return (
    <section className="skills-section">
      <div className="skills-header-section">
        <SectionHeading text="I have experience with"/>
      </div>

      <div className="skills-section-list-container">
        <ul className="skills-section-list">
          {skillsList.map((skillDetails: any, index: number) => (
            <Skill skillDetails={skillDetails} key={index} />
          ))}          
        </ul>
      </div>
    </section>
  )
}