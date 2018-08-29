module.exports = {
  siteMetadata: {
    title: 'Gatsby Level Up Blog',
    description: 'Tester blog with Gatsby',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp', // allows images
    'gatsby-plugin-sharp',
  ],
}
