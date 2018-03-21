import React, { Component } from 'react'
import Helmet from 'react-helmet'
import PageHeader from '../components/page-header'

export default class PagePage extends Component {
  render() {
    const { data } = this.props
    const { markdownRemark: post } = data
    const { title } = post.frontmatter
    return (
      <article>
        <Helmet
          title={`${title} – ${data.site.siteMetadata.name}`}
          meta={[{ name: 'description', content: post.excerpt }]}
        />
        <PageHeader title={title} />
        <div className="main-content">
          <div
            dangerouslySetInnerHTML={{
              __html: post.html,
            }}
          />
        </div>
      </article>
    )
  }
}

export const pageQuery = graphql`
  query pageQuery($slug: String!) {
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
        date(formatString: "MMMM DD YYYY")
      }
    }
  }
`
