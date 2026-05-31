/**
 * Helper function to construct asset paths that work with GitHub Pages basePath
 *
 * When deployed to GitHub Pages at freeforcharity.github.io/FFC-EX-soulcap.org/,
 * all assets need to be prefixed with the repository name (the basePath).
 *
 * When a custom subdomain/apex domain is configured later (via a CNAME), the
 * basePath should be emptied so assets resolve at the domain root.
 *
 * @param path - The asset path starting with /
 * @returns The full asset path including basePath if configured
 */
export function assetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return `${basePath}${path}`
}
