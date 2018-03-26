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
      website,
      meta,
      techniques,
      client,
    } = post.frontmatter

    return (
      <article>
        <Helmet
          title={`${title} – ${data.site.siteMetadata.name}`}
          meta={[{ name: 'description', content: post.excerpt }]}
        />
        <PageHeader title={title} description={description} />
        <Img sizes={featuredImage.childImageSharp.sizes} />
        <figure>
          {/* <img
            src={`https://res.cloudinary.com/johannesholmberg/image/upload/c_scale,w_1400/v1520835525/work/${image}`}
            srcSet={`
              https://res.cloudinary.com/johannesholmberg/image/upload/c_scale,w_400/v1520835525/work/${image} 400w,
              https://res.cloudinary.com/johannesholmberg/image/upload/c_scale,w_800/v1520835525/work/${image} 800w,
              https://res.cloudinary.com/johannesholmberg/image/upload/c_scale,w_1400/v1520835525/work/${image} 1400w
            `}
            alt={title}
          /> */}
        </figure>

        <div className="main-content">
          <div
            dangerouslySetInnerHTML={{
              __html: post.html,
            }}
          />
          <aside className="sidebar">
            <ul className="sidebar__meta">
              <li className="sidebar__meta-item">
                <strong>Production:</strong> {meta}
              </li>
              <li className="sidebar__meta-item">
                <strong>Role:</strong> {role}
              </li>
              <li className="sidebar__meta-item">
                <strong>Techniques:</strong> {techniques}
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
        </div>
      </article>
    )
  }
}

export let caseQuery = graphql`
  query caseQuery($slug: String!) {
    site {
      siteMetadata {
        name
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 1000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        description
        role
        website
        meta
        output
        techniques
        client
      }
    }
  }
`
