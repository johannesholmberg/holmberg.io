import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import ArticleItem from '../components/article-item'
import PageHeader from "../components/page-header"

const NotebookPage = ({ data }) => (
  <section>
    <Helmet title={`Notebook – Holmberg.io`} />

    <PageHeader title="Notebook" />
    <ul className="article-list">
      {data.allMarkdownRemark.edges.map(({node}) =>
        <ArticleItem key={node.id} post={node} />
      )}
    </ul>

  </section>
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
`;