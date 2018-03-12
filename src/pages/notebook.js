import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import ArticleItem from '../components/article-item'

const NotebookPage = ({ data }) => (
  <div>
    <Helmet title={`Notebook – Holmberg.io`} />

    <h1 className="page-title">Notebook</h1>

    <div className="c-article-list">
      <div className="c-article-list__section">
        <ul className="c-article-list__holder">
          {data.allMarkdownRemark.edges.map(({node}) =>
            <ArticleItem key={node.id} post={node} />
          )}
        </ul>
      </div>
    </div>


  </div>
)

export default NotebookPage

export const query = graphql`
  query NotebookQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "post" } } },
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          id
          frontmatter {
            layout
            title
            category
            date(formatString: "MMMM DD YYYY")
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
`;