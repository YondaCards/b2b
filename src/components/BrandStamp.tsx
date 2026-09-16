import Image from "next/image";

export function BrandStamp({
  className = "",
  size = 160,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={`relative animate-spin-slow ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Image
        src="/images/brand/logo-mark.png"
        alt=""
        fill
        sizes={`${size}px`}
        className="object-contain"
      />
    </div>
  );
}
