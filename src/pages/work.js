import React from 'react'
import Link from 'gatsby-link'
import CaseListing from '../components/CaseListing'

const WorkPage = ({ data }) => (
  <div>
    <h1 className="page-title">Work</h1>
    <div className="c-case-list">
      {data.allMarkdownRemark.edges.map(({node}) =>
        <CaseListing key={node.id} post={node} />
      )}
    </div>

  </div>
)

export default WorkPage

export const query = graphql`
  query WorkQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: {
      fields: [frontmatter___date], order: DESC
    }) {
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