type Props = {
  text: string,
  sectionId: number
}

export default function SectionHeading ({text, sectionId}: Props) {
  return (
    <div className="section-heading flex gap-1 items-baseline">
      <span>0{sectionId}.</span>
      <h4>{text}</h4>
    </div>
  )
}