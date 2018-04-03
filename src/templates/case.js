import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import PageHeader from '../components/page-header'
import Img from 'gatsby-image'

export default class CasePage extends Component {
  static get propTypes() {
    return {
      data: PropTypes.any,
    }
  }

  render() {
    const { data } = this.props
    const { markdownRemark: post } = data
    const {
      title,
      featuredImage,
      description,
      role,
      tech,
      client,
      website,
    } = post.frontmatter

    return (
      <article>
        <Helmet
          title={`${title} – ${data.site.siteMetadata.title}`}
          meta={[{ name: 'description', content: post.excerpt }]}
        />
        <PageHeader title={title} description={description} />
        <figure>
          <Img sizes={featuredImage.childImageSharp.sizes} />
        </figure>

        <div
          className="content-wrap"
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        />
        <aside className="sidebar">
          <ul className="sidebar__meta">
            <li className="sidebar__meta-item">
              <strong>Role:</strong> {role}
            </li>
            <li className="sidebar__meta-item">
              <strong>Tech:</strong> {tech}
            </li>
            <li className="sidebar__meta-item">
              <strong>Client:</strong> {client}
            </li>
            <li className="sidebar__meta-item">
              <strong>Website: </strong>
              <a href={website}>{website}</a>
            </li>
          </ul>
        </aside>
      </article>
    )
  }
}

export let caseQuery = graphql`
  query caseQuery($slug: String!) {
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
        description
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 1000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        role
        tech
        client
        website
      }
    }
  }
`
