module.exports = {
  siteMetadata: {
    title: 'Gatsby Level Up Blog',
    description: 'Tester blog with Gatsby',
  },
  pathPrefix: '/gatsby-levelup',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      // Make files available to graphql
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`,
      },
    },
    {
      // Make images available to graphql
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: `<!-- end -->`, // provides way to manually set excerpt range
      },
    },
    'gatsby-transformer-sharp', // allows images
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify-cms', // plugin to add netlify cms you idiot
  ],
}
