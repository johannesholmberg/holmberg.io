import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import CaseItem from '../components/case-item'
import PageHeader from '../components/page-header'

const WorkPage = ({ data }) => (
  <section>
    <Helmet
      title={`Work – ${data.site.siteMetadata.name}`}
      meta={[
        { name: 'description', content: 'Project and case studies.' },
      ]}
    />
    <PageHeader title="Work" />

    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <CaseItem post={node} />
      </div>
    ))}
  </section>
)

WorkPage.propTypes = {
  data: PropTypes.any,
}

export default WorkPage

export const query = graphql`
  query workQuery {
    site {
      siteMetadata {
        name
      }
    }

    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "case" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            layout
            title
            date(formatString: "MMMM DD YYYY")
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 1000) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
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
`
