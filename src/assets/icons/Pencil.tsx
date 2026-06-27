import { SVGProps } from 'react'

interface SVGRProps {
  title?: string
  titleId?: string
  color?: string
}

const Pencil = ({
  title,
  titleId,
  color = '#667085',
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={19}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    color={color}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M17.415 5.732a.792.792 0 0 0-.23-.562L13.83 1.813a.791.791 0 0 0-.562-.23.792.792 0 0 0-.562.23l-2.24 2.24-8.653 8.653a.792.792 0 0 0-.23.562v3.357a.791.791 0 0 0 .792.792H5.73a.791.791 0 0 0 .602-.23l8.606-8.653 2.248-2.2a.943.943 0 0 0 .174-.262.795.795 0 0 0 0-.19.555.555 0 0 0 0-.11l.055-.04ZM5.405 15.833h-2.24v-2.24l7.862-7.861 2.24 2.24-7.861 7.861Zm8.978-8.977-2.24-2.24 1.124-1.117 2.232 2.233-1.116 1.124Z"
      fill={color}
    />
  </svg>
)

export default Pencil
