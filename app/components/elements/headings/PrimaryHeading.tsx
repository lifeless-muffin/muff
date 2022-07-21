type Props = {
  text: string
}

export default function PrimaryHeading ({text}: Props) {
  return (
    <div className="primary-heading flex text-left">
      <h1 className="primary-heading-text">{text}</h1>
    </div>
  )
}