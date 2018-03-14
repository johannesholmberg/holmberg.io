import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Img from "gatsby-image";
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
      <article>
        <Helmet title={`${title}`} />
        <PageHeader title={title} description={description} />

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

          <div className="main-content"
            dangerouslySetInnerHTML={{
            __html: post.html
          }} />


        <aside className="sidebar">

          <ul className="sidebar__meta">
            <li className="sidebar__meta-item">
              <strong>Production:</strong> { meta }
              </li>
            <li className="sidebar__meta-item">
              <strong>Role:</strong> { role }
            </li>
            <li className="sidebar__meta-item">
              <strong>Techniques:</strong> { techniques }
            </li>
            <li className="sidebar__meta-item">
              <strong>Client:</strong> { client }
            </li>
            <li className="sidebar__meta-item">
              <strong>Website: </strong>
              <a href={ website }>
                { website }
              </a>
            </li>
          </ul>

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