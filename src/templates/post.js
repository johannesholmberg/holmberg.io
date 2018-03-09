import React, { Component } from 'react';
import Helmet from 'react-helmet';
import AuthorCard from "../components/author-card";

export default class PostPage extends Component {
  render() {
    const { data } = this.props;
    const { markdownRemark: post } = data;
    const { title, date } = post.frontmatter;
    return (
      <article className="o-main-layout">
        <Helmet title={`${title}`} />
        POSSSSSTTTTT
        <header className="c-page-header">
          <h1 className="c-page-header__title">
            { title }
          </h1>
          <p className="c-page-header__meta">
            { date }
          </p>
        </header>


        <div
          className="s-main-content"
          dangerouslySetInnerHTML={{
            __html: post.html
          }}
        />
        <aside className="o-sidebar">
          <AuthorCard />
        </aside>
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
        date(formatString: "MMMM DD YYYY")
      }
    }
  }
`;