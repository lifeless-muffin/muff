import Link from "next/link"
import IconRenderer from "../icons/IconRenderer"

type Props = {
  label: string,
  source: string,
  pushTo: string,
}

export default function SocialMediaButton(props: Props) {
  return (
    <Link href={props.pushTo}>
      <a target="_blank">
        <button className="social-button" >
          <div className="social-button-content-container">
            <IconRenderer 
              iconSource={props.source}
              iconAlt={props.label}
              iconSize={{
                width: '24px',
                height: '24px'
              }}
            />
          </div>
        </button>
      </a>
    </Link>
  )
}
