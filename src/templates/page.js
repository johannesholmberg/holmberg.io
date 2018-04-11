import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

export default class StandardPage extends Component {
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
      <article>
        <Helmet
          title={`${title} – ${data.site.siteMetadata.title}`}
          meta={[{ name: 'description', content: post.excerpt }]}
        />

        <div
          className="content-wrap"
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        />
      </article>
    )
  }
}

export const pageQuery = graphql`
  query pageQuery($slug: String!) {
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
  }
`
