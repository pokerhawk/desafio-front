import { SVGProps } from 'react'

interface SVGRProps {
  title?: string
  titleId?: string
}

const DotsIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={4}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M1.997 8.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM1.997 3a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667ZM1.997 14.667a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667Z"
      stroke="#667085"
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default DotsIcon
