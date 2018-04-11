import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import CaseItem from '../components/case-item'

export default class WorkPage extends Component {
  static get propTypes() {
    return {
      data: PropTypes.any,
    }
  }

  render() {
    const { data } = this.props
    const { markdownRemark: post } = data

    return (
      <section>
        <Helmet
          title={`Work – ${data.site.siteMetadata.title}`}
          meta={[
            {
              name: 'description',
              content: 'Project and case studies.',
            },
          ]}
        />
        <div
          className="content-wrap"
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        />

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <CaseItem post={node} />
          </div>
        ))}
      </section>
    )
  }
}

export const query = graphql`
  query workQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
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
