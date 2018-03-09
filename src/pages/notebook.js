import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/PostListing'

const NotebookPage = ({ data }) => (
  <div>
    <h1>Notebook</h1>
    {data.allMarkdownRemark.edges.map(({node}) =>
      <PostListing key={node.id} post={node} />
    )}
  </div>
)

export default NotebookPage

export const query = graphql`
  query NotebookQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "post" } } },
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
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