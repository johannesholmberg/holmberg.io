import React from 'react'
import NavLink from 'gatsby-link'

const Navigation = () => {
  // If the permalink starts with a date then make notebook active
  const checkPost = (match, location) => {
    if (
      location.pathname.startsWith('/2') ||
      location.pathname == '/notebook'
    ) {
      return true
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
            Home
          </NavLink>
        </li>

        <li className="nav-global__item">
          <NavLink
            to="/about"
            exact={true}
            className="nav-global__link"
            activeClassName="nav-global__link--active"
          >
            About
          </NavLink>
        </li>

        <li className="nav-global__item">
          <a
            href="https://johanneswrites.com"
            className="nav-global__link"
            isActive={checkPost}
            activeClassName="nav-global__link--active"
          >
            Blog
          </a>
        </li>

        <li className="nav-global__item">
          <NavLink
            to="/work"
            className="nav-global__link "
            activeClassName="nav-global__link--active"
          >
            Work
          </NavLink>
        </li>

        <li className="nav-global__item">
          <NavLink
            to="/projects"
            className="nav-global__link "
            activeClassName="nav-global__link--active"
          >
            Projects
          </NavLink>
        </li>

        <li className="nav-global__item">
          <NavLink
            to="/contact"
            className="nav-global__link "
            activeClassName="nav-global__link--active"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
