import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <footer className="c-site-footer">
    <ul className="c-site-footer__list">
      <li className="c-site-footer__item">
        Copyright &copy; 2007–
      </li>
      <li className="c-site-footer__item">
        You can subscribe to the content on this site through the
        <a href="{{ site.url }}/feed.xml" className="c-site-footer__link">
          RSS feed
        </a>.
      </li>
      <li className="c-site-footer__item">
        Interested in how this site is made?
        <a href="{{ site.url }}/colophon/" className="c-site-footer__link">
          Check this out
        </a>.
      </li>
    </ul>
  </footer>

)

export default Footer


