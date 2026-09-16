const CHAR_ID = "brand-stamp-path";

export function BrandStamp({
  className = "",
  color = "currentColor",
  size = 160,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`animate-spin-slow ${className}`}
      aria-hidden="true"
    >
      <defs>
        <path id={CHAR_ID} d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
      </defs>
      <circle cx="100" cy="100" r="6" fill={color} />
      <text fontSize="15.5" letterSpacing="2" fill={color} fontFamily="var(--font-display)" fontWeight={600}>
        <textPath href={`#${CHAR_ID}`} startOffset="2%">
          YONDA CARDS · BY NETT.KO ·
        </textPath>
      </text>
    </svg>
  );
}
