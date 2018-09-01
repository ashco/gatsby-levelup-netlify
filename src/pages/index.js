import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/Posts/PostListing'

const IndexPage = ({ data }) => (
  <div>
    <h2>Posts</h2>
    {data.allContentfulBlogPost.edges.map(({ node }) => (
      <PostListing post={node} key={node.id} />
    ))}
  </div>
)

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          createdAt(formatString: "MMMM DD, YYYY")
          body {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
    # allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    #   # sort md files by date
    #   edges {
    #     node {
    #       id
    #       frontmatter {
    #         title
    #         date(formatString: "MMMM DD YYYY")
    #       }
    #       html
    #       excerpt(pruneLength: 280)
    #       fields {
    #         slug
    #       }
    #     }
    #   }
    # }
  }
`
