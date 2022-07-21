type Props = {
  text: string,
}

export default function PrimaryParagraph ({text}: Props) {
  return (
    <div className="primary-paragraph">
      <p className="primary-paragraph-p"> {text} </p>
    </div>
  )
}