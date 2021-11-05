module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "edmon-rober",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
