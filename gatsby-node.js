// See: https://www.gatsbyjs.org/docs/node-apis/
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// onCreateNode runs on every page, this will check if page is MD file, create slug for each page
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'posts',
    })
    createNodeField({
      node,
      name: 'slug',
      value: `/posts${slug}`,
    })
  }
}

// create blog post pages
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  // create promise to get slugs
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      // create new page for each slug found
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          // can use this fnc to create pages outside of promises
          path: node.fields.slug,
          component: path.resolve('./src/components/Posts/PostPage.js'),
          context: {
            // variable you assign to graphql to pass
            slug: node.fields.slug,
          },
        })
      })
    })
    resolve()
  })
}
