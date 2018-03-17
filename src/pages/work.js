import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet';
import Img from "gatsby-image";
import CaseItem from '../components/case-item'
import PageHeader from "../components/page-header"

const WorkPage = ({ data }) => (
  <section>
    <Helmet
      title={`Work – ${data.site.siteMetadata.name}`}
      meta={[
        { property: 'description', content: "Project and case studies." },
      ]}
    />
    <PageHeader title="Work" />
    {data.allMarkdownRemark.edges.map(({node}) =>
    <div>
      <CaseItem key={node.id} post={node} />
    </div>
    )}
  </section>
)

export default WorkPage

export const query = graphql`
  query workQuery {
    site {
      siteMetadata {
        name
      }
    }
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