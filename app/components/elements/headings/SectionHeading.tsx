type Props = {
  text: string,
}

export default function SectionHeading({ text }: Props) {
  return (
    <div className="section-heading flex gap-1 items-baseline w-fit h-fit">
      <h4>{text}</h4>
    </div>
  )
}