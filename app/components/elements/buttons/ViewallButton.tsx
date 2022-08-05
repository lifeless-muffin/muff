import Link from "next/link"

type Props = {
  to: string,
}

export default function ({ to }: Props) {
  return (
    <Link href={to}>
      <a target="_blank" className="view-all-button flex gap-1 items-baseline text-right cursor-pointer hover:opacity-8d0">
        <span className="view-all-button-text">
          View all
        </span>
      </a>
    </Link>
  )
}