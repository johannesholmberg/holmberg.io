import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import PageHeader from '../components/page-header'
import Icon from '../components/icon'

export default class PostPage extends Component {
  static get propTypes() {
    return {
      data: PropTypes.any,
      location: PropTypes.any,
    }
  }

  render() {
    const { data } = this.props
    const { location } = this.props
    const { markdownRemark: post } = data
    const { title, date, category, ref_url } = post.frontmatter

    let canonical
    if (category == 'links') {
      canonical = ref_url
    } else {
      canonical = `${data.site.siteMetadata.siteUrl}${
        location.pathname
      }`
    }

    return (
      <article>
        <Helmet
          title={`${title} – ${data.site.siteMetadata.title}`}
          link={[{ rel: 'canonical', href: canonical }]}
          meta={[{ name: 'description', content: post.excerpt }]}
        />

        <PageHeader
          title={title}
          description={date}
          category={category}
        />

        <div
          className="content-wrap"
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        />

        {category == 'links' && (
          <section className="footer-content">
            <p>
              <a href={ref_url} className="button button--primary">
                <Icon id="link" />
                Permalink
              </a>
            </p>
          </section>
        )}
      </article>
    )
  }
}

export const postQuery = graphql`
  query BlogPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        category
        date(formatString: "MMMM DD, YYYY")
        ref_url
      }
    }
  }
`
