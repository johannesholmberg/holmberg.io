import React, { Component } from 'react';
import Helmet from 'react-helmet';
import AuthorCard from "../components/author-card";
import PageHeader from "../components/page-header";
import Icon from '../components/icon'
require("prismjs/themes/prism-solarizedlight.css");

export default class PostPage extends Component {

  render() {
    const { data } = this.props;
    const { markdownRemark: post } = data;
    const {
      title,
      date,
      category,
      ref_url
    } = post.frontmatter;

    return (
      <article>
        <Helmet title={`${title} – Holmberg.io`} />

        <PageHeader
          title={title}
          description={date}
          category={category}
        />

        <div className="main-content">
          <div
            dangerouslySetInnerHTML={{
              __html: post.html
            }}
          />

          { category == "links" &&
            <section className="footer-content">
              <p>
                 <a
                  href={ ref_url }
                  className="button button--primary">
                  <Icon id="link" />
                  Permalink
                </a>
              </p>
            </section>
          }
        </div>

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
        ref_url
      }
    }
  }
`;