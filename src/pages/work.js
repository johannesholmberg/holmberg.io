import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet';
import CaseItem from '../components/case-item'
import PageHeader from "../components/page-header"

const WorkPage = ({ data }) => (
  <section>
    <Helmet title={`Work – Holmberg.io`} />
    <PageHeader title="Work" />
    {data.allMarkdownRemark.edges.map(({node}) =>
      <CaseItem key={node.id} post={node} />
    )}
  </section>
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