module.exports = {
  siteMetadata: {
    title: 'Gatsby Level Up Blog',
    description: 'Tester blog with Gatsby',
  },
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
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp', // allows images
    'gatsby-plugin-sharp',
  ],
}
