import React from 'react'
import Link from 'gatsby-link'
import Navigation from './navigation'

const Header = () => (
  <header className="header-global">

    <div>
      <h1 className="header-global__title">
        <span>johannes</span>
        <span>holmberg</span>
      </h1>
      <p className="header-global__description">
        frontend developer, ux designer, minimalist
      </p>
    </div>

    <Navigation />
  </header>
)

export default Header
