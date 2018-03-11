import React from 'react'
import Link from 'gatsby-link'

const CaseListing = ({ post }) => {
  const { title } = post.frontmatter;
  return (
    <Link to={post.fields.slug} className="c-case-item">
      <img
        className="c-case-item__image"
        src="https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?url=https://holmberg.io/uploads/work/chemistry-interaction.jpg&container=focus&resize_w=1200&refresh=2592000"
        alt={ title }
      />
      <div className="c-case-item__text">
        <h2 className="c-case-item__title">{ title }</h2>
        <p className="c-case-item__slogan"></p>
      </div>
    </Link>
  )
}

export default CaseListing;


