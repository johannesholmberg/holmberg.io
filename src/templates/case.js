import React, { Component } from 'react';
import Helmet from 'react-helmet';
import AuthorCard from "../components/author-card";
import PageHeader from "../components/page-header";

export default class CasePage extends Component {
  render() {
    const { data } = this.props;
    const { markdownRemark: post } = data;
    const {
      title,
      date,
      image,
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

        <PageHeader title={title} description={description} />

        <div className="s-main-content s-main-content--intro">
          <figure>
            <img
              src={`https://res.cloudinary.com/johannesholmberg/image/upload/c_scale,w_1400/v1520835525/work/${image}.jpg`}
              srcSet={`
                https://res.cloudinary.com/johannesholmberg/image/upload/c_scale,w_400/v1520835525/work/${image}.jpg 400w,
                https://res.cloudinary.com/johannesholmberg/image/upload/c_scale,w_800/v1520835525/work/${image}.jpg 800w,
                https://res.cloudinary.com/johannesholmberg/image/upload/c_scale,w_1400/v1520835525/work/${image}.jpg 1400w
              `}
              alt={title}
            />
          </figure>

          <div dangerouslySetInnerHTML={{
            __html: post.html
          }} />
        </div>

        <aside className="o-sidebar">
          <p>
            &nbsp;
          </p>
          <aside>
            <ul className="o-sidebar__meta">
              <li className="o-sidebar__meta-item">
                <strong>Production:</strong> { meta }
                </li>
              <li className="o-sidebar__meta-item">
                <strong>Role:</strong> { role }
              </li>
              <li className="o-sidebar__meta-item">
                <strong>Techniques:</strong> { techniques }
              </li>
              <li className="o-sidebar__meta-item">
                <strong>Client:</strong> { client }
              </li>
              <li className="o-sidebar__meta-item">
                <strong>Website: </strong>
                <a href={ website }>
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
        image
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