import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet';
import Icon from '../components/icon'
import Img from "gatsby-image";

const IndexPage = ({ data }) => (
  <section>
    <Helmet
      title={`Home – ${data.site.siteMetadata.name}`}
      meta={[
        { property: 'description', content: data.site.siteMetadata.description },
      ]}
    />

    <h1 className="c-home-section__title">
      Hello there.<br /> I’m Johannes.
    </h1>

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
    profile: imageSharp(id: {regex: "/johannes-rectangle.jpg/"}) {
      sizes(maxWidth: 1040) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
