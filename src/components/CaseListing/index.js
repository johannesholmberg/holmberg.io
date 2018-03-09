import React from 'react'
import Link from 'gatsby-link'

const CaseListing = ({ post }) => {
  const { title } = post.frontmatter;
  return (
    <Link to={post.fields.slug} className="c-case-item">
      <div className="c-case-item__text">
        <h2 className="c-case-item__title">{ title }</h2>
        <p className="c-case-item__slogan"></p>
      </div>
    </Link>
  )
}

export default CaseListing;


