function normalizeBasePath(value: string) {
  const trimmed = value.trim().replace(/^\/+|\/+$/g, "");
  return trimmed ? `/${trimmed}` : "";
}

export function assetPath(path: string) {
  const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH ?? "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

