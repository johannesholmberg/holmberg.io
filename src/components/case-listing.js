import React from 'react'
import Link from 'gatsby-link'

const CaseListing = ({ post }) => {
  const {
    title,
    image
  } = post.frontmatter;
  return (
    <Link to={post.fields.slug} className="c-case-item">
      <img
        className="c-case-item__image"
        src={`https://res.cloudinary.com/johannesholmberg/image/upload/c_scale,w_1400/v1520835525/work/${image}.jpg`}
        srcSet={`
          https://res.cloudinary.com/johannesholmberg/image/upload/c_scale,w_400/v1520835525/work/${image}.jpg 400w,
          https://res.cloudinary.com/johannesholmberg/image/upload/c_scale,w_800/v1520835525/work/${image}.jpg 800w,
          https://res.cloudinary.com/johannesholmberg/image/upload/c_scale,w_1400/v1520835525/work/${image}.jpg 1400w
        `}
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


