import React from 'react'
import NavLink from 'gatsby-link'
import Link from 'gatsby-link'
import Icon from './icon'

const Navigation = ({ data }) => {

  // If the permalink starts with a date then make notebook active
  const checkPost = (match, location) => {
    if(location.pathname.startsWith('/2') || location.pathname == '/notebook') {
      return true;
    }
  }

  return (
    <nav className="nav-global">

    <ul className="nav-global__list">

      <li className="nav-global__item">
        <NavLink
          to="/"
          exact={true}
          className="nav-global__link"
          activeClassName="nav-global__link--active"
        >
          home
        </NavLink>
      </li>

      <li className="nav-global__item">
        <NavLink
          to="/about"
          exact={true}
          className="nav-global__link"
          activeClassName="nav-global__link--active"
        >
          about
        </NavLink>
      </li>

      <li className="nav-global__item">
        <NavLink
          to="/notebook"
          className="nav-global__link"
          isActive={checkPost}
          activeClassName="nav-global__link--active"
        >
          notebook
        </NavLink>
      </li>

      <li className="nav-global__item">
        <NavLink
          to="/work"
          className="nav-global__link "
          activeClassName="nav-global__link--active"
        >
          work
        </NavLink>
      </li>

      <li className="nav-global__item">
        <NavLink
          to="/contact"
          className="nav-global__link "
          activeClassName="nav-global__link--active"
        >
          contact
        </NavLink>
      </li>

    </ul>
  </nav>
  )


}

export default Navigation
