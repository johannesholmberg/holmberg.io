import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import PageHeader from '../components/page-header'

export default class ProjectPage extends Component {
  static get propTypes() {
    return {
      data: PropTypes.any,
    }
  }

  render() {
    const { data } = this.props
    const { markdownRemark: post } = data
    const { title } = post.frontmatter

    return (
      <section>
        <Helmet
          title={`Projects – ${data.site.siteMetadata.title}`}
          meta={[
            {
              name: 'description',
              content: 'Things created just for the fun of it.',
            },
          ]}
        />

        <PageHeader title={title} />

        <div
          className="content-wrap"
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        />

        {data.allMarkdownRemark.edges.map(({ node }) => {
          const { title, url, featuredImage } = node.frontmatter
          return (
            <div className="project-item" key={node.id}>
              <h2 className="project-item__title">
                <a href={url}>{title}</a>
              </h2>
              <a href={url} className="project-item__image-wrap">
                <Img
                  className="project-item__image"
                  sizes={featuredImage.childImageSharp.sizes}
                />
              </a>
              <div
                className="content-wrap"
                dangerouslySetInnerHTML={{
                  __html: node.html,
                }}
              />
            </div>
          )
        })}
      </section>
    )
  }
}

export const query = graphql`
  query projectQuery($slug: String!) {
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
      filter: { frontmatter: { layout: { eq: "project" } } }
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
            url
          }
          html
          excerpt
        }
      }
    }
  }
`
