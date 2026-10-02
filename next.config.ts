import type { NextConfig } from "next";

// Only the GitHub Pages workflow sets GITHUB_PAGES=true; local dev/build
// (and `npm run build` run by hand) keep the normal server-capable config.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = isGithubPages
  ? {
      output: "export",
      images: { unoptimized: true },
      basePath,
      assetPrefix: basePath,
    }
  : {
      /* config options here */
    };

export default nextConfig;
