import nextra from 'nextra'

const withNextra = nextra({
  contentDirBasePath: '/docs' // Or even nested e.g. `/docs/advanced`
})

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  reactStrictMode: true,
  basePath: "/bracket-fumadocs",
  // Export only when building in GitHub Actions
  output: process.env.GITHUB_ACTION ? 'export' : undefined,
  images: {
    unoptimized: true
  }
})
