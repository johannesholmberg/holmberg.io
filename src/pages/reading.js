import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/PostListing'

const ReadingPage = ({ data }) => (
  <div>
    <h1>Reading</h1>
    {data.allMarkdownRemark.edges.map(({node}) =>
      <PostListing key={node.id} post={node} />
    )}
  </div>
)

export default ReadingPage

export const query = graphql`
  query ReadingQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            layout
            title
            date(formatString: "MMMM DD YYYY")
          }
          html
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;