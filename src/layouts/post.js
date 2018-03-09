import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class PostPage extends Component {
  render() {
    const { data } = this.props;
    const { markdownRemark: post } = data;
    const { title, date } = post.frontmatter;
    return (
      <div>
        <Helmet title={`${title}`} />
        <p>{date}</p>
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: post.html
          }}
        />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;