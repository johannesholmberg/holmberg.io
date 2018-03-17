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
    <p className="c-home-section__meta">
      Consultant front-end web designer
    </p>

    <div className="main-content">
      <div>
        <h2>A little bit on me</h2>
        <p>
          I’m Johannes Holmberg and I work on the web.
          I’m a consultant front-end web designer living and working out of beautiful <a href="https://www.google.com/search?q=basel+switzerland&espv=2&biw=2290&bih=1316&site=webhp&source=lnms&tbm=isch&sa=X&sqi=2&ved=0ahUKEwi2u7--647QAhWHWxQKHRSgCVIQ_AUIBigB">Basel, Switzerland</a>.
        </p>
        <p>
          I’ve been working on the web for the last 9 years, designing and developing usable online solutions. What I do is making design and technology work together on the web.
        </p>
        <p>
          My services include interaction design, information architecture and front-end development. I work together with teams from companies all over the world to provide responsive and optimized user interfaces.
        </p>
        <p>
          You can contact me by email at <a href="mailto:johannes@holmberg.io">johannes@holmberg.io</a>.
        </p>
      </div>
    </div>

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
