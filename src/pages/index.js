import React from 'react'
import Helmet from 'react-helmet'
import ArticleItem from '../components/article-item'

const IndexPage = ({ data }) => (
  <section>
    <Helmet
      title={`Home – ${data.site.siteMetadata.name}`}
      meta={[
        {
          name: 'description',
          content: data.site.siteMetadata.description,
        },
      ]}
    />

    <h1 className="c-home-section__title">Hello, welcome.</h1>

    <div className="main-content">
      <div>
        <p>
          I’m Johannes, a frontend designer located in beautiful Basel
          at the northwest of Switzerland. Over the last 10 years I’ve
          been working on designing and developing usable online
          solutions. My job is to make technology and design work
          together, to form an experience that looks and functions
          beautifully on a never-ending stream of connected devices.
        </p>
        <p>
          I partner up with agencies and IT companies who need a hand
          in bringing their creative visions to life. I’ve
          collaborated with development teams from all over the world
          incorporating designs for their platforms. I’ve got a
          passion for writing standards-compliant code that is
          responsive, accessible and performant.
        </p>
        <p>
          Specialties: Responsive Web Design, Mobile Web Strategy,
          Standards-Compliant HTML5, Well-Organized CSS, JavaScript,
          UX Design, Sass, Git and Gulp workflows.
        </p>
      </div>
    </div>

    <h2>From the Notebook</h2>
    <ul className="article-list">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <ArticleItem key={node.id} post={node} />
      ))}
    </ul>
  </section>
)

export default IndexPage

export const indexQuery = graphql`
  query indexQuery {
    site {
      siteMetadata {
        name
        description
      }
    }
    profile: imageSharp(id: { regex: "/johannes-rectangle.jpg/" }) {
      sizes(maxWidth: 1040) {
        ...GatsbyImageSharpSizes
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
