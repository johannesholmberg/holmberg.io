import React from 'react'
import Link from 'gatsby-link'

const Navigation = () => (
  <nav className="c-nav-primary">
    <Link to="/" className="c-nav-primary__brand">
      <svg viewBox="0 0 96 96" className="icon" width="24" height="24">

      </svg>
    </Link>
    <ul className="c-nav-primary__list">

      <li className="c-nav-primary__item">
        <Link to="/" className="c-nav-primary__link ">
          About
        </Link>
      </li>

      <li className="c-nav-primary__item">
        <Link to="/notebook" className="c-nav-primary__link ">
          Notebook
        </Link>
      </li>

      <li className="c-nav-primary__item">
        <Link to="/work" className="c-nav-primary__link ">
          Work
        </Link>
      </li>

      <li className="c-nav-primary__item">
        <Link to="/reading" className="c-nav-primary__link ">
          Reading
        </Link>
      </li>

    </ul>
  </nav>

)

export default Navigation
