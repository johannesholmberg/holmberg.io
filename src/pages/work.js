import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet';
import CaseListing from '../components/case-listing'

const WorkPage = ({ data }) => (
  <div>
    <Helmet title={`Work – Holmberg.io`} />
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
  query workQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          layout: {
            eq: "case"
          }
        }
      }
      sort: {
        fields: [frontmatter___date], order: DESC
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            layout
            title
            date(formatString: "MMMM DD YYYY")
            image
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