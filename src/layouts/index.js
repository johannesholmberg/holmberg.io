import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import Icons from '../components/icons'
import Icon from '../components/icon'

import '../assets/styles/style.scss'
//import '../assets/styles/index.css'

const TemplateWrapper = ({ children, data }) => (
  <div className="wrap">
    <Helmet title={data.site.siteMetadata.title} />
    <div style={
      {
        height: '0',
        width: '0',
        position: 'absolute',
        visibility: 'hidden'
      }
    }>
      <Icons />
      <a href="#main-content">Skip to content</a>
    </div>

    <Header />
    <main className="main-layout">
      {children()}
    </main>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
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
  # background: imageSharp(id: {regex: "/bg.jpeg/"}) {
  #   sizes(maxWidth: 1240) {
  #     ...GatsbyImageSharpSizes
  #   }
  # }
}
`;