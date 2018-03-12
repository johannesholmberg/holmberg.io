import React from 'react'
import NavLink from 'gatsby-link'
import Icon from './icon'

const Navigation = ({ data }) => (
  <nav className="c-nav-primary">
    <NavLink to="/" className="c-nav-primary__brand">
      <Icon id="logo" />
    </NavLink>
    <ul className="c-nav-primary__list">

      <li className="c-nav-primary__item">
        <NavLink
          to="/"
          exact={true}
          className="c-nav-primary__link"
          activeClassName="c-nav-primary__link--active"
        >
          Home
        </NavLink>
      </li>

      <li className="c-nav-primary__item">
        <NavLink
          to="/about"
          exact={true}
          className="c-nav-primary__link"
          activeClassName="c-nav-primary__link--active"
        >
          About
        </NavLink>
      </li>

      <li className="c-nav-primary__item">
        <NavLink
          to="/notebook"
          className="c-nav-primary__link"
          activeClassName="c-nav-primary__link--active"
        >
          Notebook
        </NavLink>
      </li>

      <li className="c-nav-primary__item">
        <NavLink
          to="/work"
          className="c-nav-primary__link "
          activeClassName="c-nav-primary__link--active"
        >
          Work
        </NavLink>
      </li>

      <li className="c-nav-primary__item">
        <NavLink
          to="/contact"
          className="c-nav-primary__link "
          activeClassName="c-nav-primary__link--active"
        >
          Contact
        </NavLink>
      </li>

    </ul>
  </nav>

)

export default Navigation
