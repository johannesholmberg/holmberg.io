import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ArticleItem from '../components/article-item'

export default class IndexPage extends Component {
  static get propTypes() {
    return {
      data: PropTypes.any,
    }
  }

  render() {
    const { data } = this.props

    return (
      <section>
        <Helmet
          title={`Home – ${data.site.siteMetadata.title}`}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
          ]}
        />

        <h1>Hello.</h1>

        <div className="content-wrap">
          <p>
            I’m Johannes, a UI developer located in beautiful Basel at
            the northwest of Switzerland. I’ve been creating on the
            web for the last 10 years and have become pretty good at
            it. I love working at the intersection of design and
            technology. My job is to create digital experiences that
            looks and functions beautifully on a never-ending stream
            of connected devices.
          </p>
          <p>
            I partner up with agencies and IT companies who need a
            hand in bringing their creative visions to life. I’ve
            collaborated with development teams from all over the
            world incorporating designs for their platforms. I’ve got
            a passion for writing standards-compliant code that is
            responsive, accessible and performant.
          </p>
          <p>
            Specialties: Responsive Web Design, Mobile Web Strategy,
            Standards-Compliant HTML5, Well-Organized CSS, JavaScript,
            Design Systems, Webpack and Git workflows.
          </p>
        </div>

        <h2>From the Notebook</h2>
        <ul className="article-list">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <ArticleItem key={node.id} post={node} />
          ))}
        </ul>
      </section>
    )
  }
}

export const indexQuery = graphql`
  query indexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "post" } } }
      limit: 5
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
