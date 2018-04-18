import React from 'react'
import Navigation from './navigation'

const Header = () => (
  <header className="header-global">
    <div className="header-global__text">
      <h1 className="header-global__title">
        <span>Johannes </span>
        <span>Holmberg</span>
      </h1>
      <p className="header-global__description">
        UI developer & designer
      </p>
    </div>

    <Navigation />
  </header>
)

export default Header
