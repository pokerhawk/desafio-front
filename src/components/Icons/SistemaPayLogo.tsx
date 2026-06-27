interface SistemaPayLogoProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const SistemaPayLogo = ({
  width = 300,
  height = 100,
  color = "#000000",
}: SistemaPayLogoProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 15 260 60"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      // style={{ backgroundColor: 'red' }}
    >
      <text
        x="0"
        y="55"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="40"
        fill="none"
        stroke={color}
        strokeWidth="2"
      >
        Sistema Pay
      </text>
    </svg>
  );
};

export default SistemaPayLogo;
