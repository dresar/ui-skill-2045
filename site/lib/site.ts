export const BASE_PATH = "/ui-skill-2045";

export function assetPath(path: string): string {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
