/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
  ],
  siteMetadata: {
    title: "Net Ninja",
    description: "web dev portfolio",
    copyright: "This website is copyright 2022 Net Ninja",
    contact: "me@netninjaind.com",
  },
}
