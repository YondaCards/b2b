import { RoundLogo } from "./RoundLogo";

export function BrandStamp({
  className = "",
  size = 160,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={`animate-spin-slow ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <RoundLogo className="h-full w-full" />
    </div>
  );
}
