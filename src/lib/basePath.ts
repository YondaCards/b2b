// Next's unoptimized-image loader (used for the GitHub Pages static export,
// see next.config.ts) does not prepend `basePath` to <Image src> on its own
// — only the optimizer proxy does that. Content/props carry root-relative
// paths like "/images/cases/foo.jpg"; wrap them with this before handing
// them to next/image so they still resolve under a project-pages subpath.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(src: string): string {
  return src.startsWith("/") ? `${basePath}${src}` : src;
}
