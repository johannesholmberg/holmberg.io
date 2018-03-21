import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const CaseItem = ({ post }) => {
  const { title, image } = post.frontmatter
  return (
    <div className="case-item">
      <div className="case-item__text">
        <h2 className="case-item__title">{title}</h2>
        <p className="case-item__slogan" />
      </div>
      <Link to={post.fields.slug} className="case-item__image-wrap">
        <img
          className="case-item__image"
          src={`https://res.cloudinary.com/johannesholmberg/image/upload/c_scale,w_1400/v1520835525/work/${image}.jpg`}
          srcSet={`
            https://res.cloudinary.com/johannesholmberg/image/upload/c_scale,w_400/v1520835525/work/${image}.jpg 400w,
            https://res.cloudinary.com/johannesholmberg/image/upload/c_scale,w_800/v1520835525/work/${image}.jpg 800w,
            https://res.cloudinary.com/johannesholmberg/image/upload/c_scale,w_1400/v1520835525/work/${image}.jpg 1400w
          `}
          alt={title}
        />
      </Link>
    </div>
  )
}

CaseItem.propTypes = {
  post: PropTypes.any,
}

export default CaseItem
