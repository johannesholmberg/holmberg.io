import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ArticleItem from '../components/article-item'
import PageHeader from '../components/page-header'

const NotebookPage = ({ data }) => (
  <section>
    <Helmet
      title={`Notebook – ${data.site.siteMetadata.name}`}
      meta={[
        {
          name: 'description',
          content:
            'A collection of my writing, ideas and links over the years.',
        },
      ]}
    />
    <PageHeader title="Notebook" />
    <ul className="article-list">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <ArticleItem key={node.id} post={node} />
      ))}
    </ul>
  </section>
)

NotebookPage.propTypes = {
  data: PropTypes.any,
}

export default NotebookPage

export const query = graphql`
  query NotebookQuery {
    site {
      siteMetadata {
        name
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
