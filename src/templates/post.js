import React, { Component } from 'react';
import Helmet from 'react-helmet';
import AuthorCard from "../components/author-card";
import PageHeader from "../components/page-header";
require("prismjs/themes/prism-solarizedlight.css");

export default class PostPage extends Component {

  render() {
    const { data } = this.props;
    const { markdownRemark: post } = data;
    const { title, date, category } = post.frontmatter;

    return (
      <article className="o-main-layout">
        <Helmet title={`${title} – Holmberg.io`} />

        <PageHeader title={title} description={date} />

        <div
          className="s-main-content"
          dangerouslySetInnerHTML={{
            __html: post.html
          }}
        />

      </article>
    )
  }
}

export const postQuery = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        category
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;