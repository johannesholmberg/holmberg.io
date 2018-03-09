import React from 'react'
import Link from 'gatsby-link'

const AuthorCard = () => {
  return (
    <aside className="c-author-card">
      <a href="#">
        <div className="c-author-card__meta">
          <h3 className="c-author-card__title">
            Johannes Holmberg
          </h3>
          <p className="c-author-card__description">
            I’m a consultant front-end web designer based in Basel, Switzerland.
            I’m doing design and interaction work for the web.
            Get in touch if you would like to work together, or just say hi :)
          </p>
        </div>
      </a>
    </aside>
  )
}

export default AuthorCard;

