import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Typekit from 'react-typekit'

import Header from '../components/header'
import Footer from '../components/footer'
import Icons from '../components/icons'
import picture from '../assets/images/johannes.jpg'

import '../assets/styles/styles.scss'

const TemplateWrapper = ({ children, data }) => (
  <div className="page">
    <Typekit kitId="fyg1ntw" />
    <Helmet
      title={`Home – ${data.site.siteMetadata.title}`}
      description={data.site.siteMetadata.description}
      meta={[
        {
          property: 'og:image',
          content: picture,
        },
      ]}
    />

    <div className="a11y">
      <div
        style={{
          height: '0',
          width: '0',
          position: 'absolute',
          visibility: 'hidden',
        }}
      >
        <Icons />
      </div>

      <a href="#main" className="skip-content visuallyhidden">
        Skip to content
      </a>
    </div>

    <div className="layout-wrap">
      <Header />
      <main id="main" className="main-global">
        {children()}
      </main>
      <Footer />
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.any,
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
