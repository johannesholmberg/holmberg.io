import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ArticleItem from '../components/article-item'

export default class NotebookPage extends Component {
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
          title={`Notebook – ${data.site.siteMetadata.title}`}
          meta={[
            {
              name: 'description',
              content:
                'A collection of my writing, ideas and links over the years.',
            },
          ]}
        />

        <div
          className="content-wrap"
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        />

        <ul className="article-list">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <ArticleItem key={node.id} post={node} />
          ))}
        </ul>
      </section>
    )
  }
}

export const pageQuery = graphql`
  query NotebookQuery($slug: String!) {
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
      filter: { frontmatter: { layout: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            layout
            title
            category
            date(formatString: "MMMM DD, YYYY")
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
