module.exports = options => {
  const showLineNumbers = options.showLineNumbers || true

  return {
    siteMetadata: {
      showLineNumbers,
    },
    plugins: [
      {
        resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
        options,
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-typescript`,
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-theme-ui`,
    ],
  }
}
