import type { NextConfig } from "next";

function normalizeBasePath(value: string) {
  const trimmed = value.trim().replace(/^\/+|\/+$/g, "");
  return trimmed ? `/${trimmed}` : "";
}

const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")?.[1] ?? "";
const inferredBasePath =
  process.env.GITHUB_ACTIONS && !configuredBasePath ? repoName : "";

const basePath = normalizeBasePath(configuredBasePath || inferredBasePath);

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;
