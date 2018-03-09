import React, { Component } from 'react';
import Helmet from 'react-helmet';
import AuthorCard from "../components/author-card";

export default class CasePage extends Component {
  render() {
    const { data } = this.props;
    const { markdownRemark: post } = data;
    const {
      title,
      date,
      cover,
      description,
      role,
      website,
      meta,
      output,
      techniques,
      client,
    } = post.frontmatter;
    return (

      <article className="o-main-layout">
        <Helmet title={`${title}`} />

        <header className="c-page-header">
          <h1 className="c-page-header__title">
            { title }
          </h1>
          <p className="c-page-header__meta">
            { meta }
          </p>
        </header>

        <div
          className="s-main-content s-main-content--intro"
          dangerouslySetInnerHTML={{
            __html: post.html
          }} />


        <aside className="o-sidebar">
          <AuthorCard />
          <aside>
            <ul className="o-sidebar__meta">
              <li className="o-sidebar__meta-item">
                <strong>Production:</strong> { meta }
                </li>
              <li className="o-sidebar__meta-item">
                <strong>Role:</strong> { role }
              </li>
              <li className="o-sidebar__meta-item">
                <strong>Output:</strong> { output }
              </li>
              <li className="o-sidebar__meta-item">
                <strong>Techniques:</strong> { techniques }
              </li>
              <li className="o-sidebar__meta-item">
                <strong>Client:</strong> { client }
              </li>

              <li className="o-sidebar__meta-item">
                <strong>Website:</strong>
                <a href="{{ page.website }}">
                  { website }
                </a>
              </li>
            </ul>
          </aside>

        </aside>

      </article>
    )
  }
}

export const caseQuery = graphql`
  query caseQuery($slug: String!) {
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        date
        cover
        description
        role
        website
        meta
        output
        techniques
        client
      }
    }
  }
`;