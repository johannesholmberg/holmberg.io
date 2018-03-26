import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const CaseItem = ({ post }) => {
  const { title, featuredImage } = post.frontmatter
  return (
    <div className="case-item">
      <div className="case-item__text">
        <h2 className="case-item__title">{title}</h2>
        <p className="case-item__slogan" />
      </div>
      <Link to={post.fields.slug} className="case-item__image-wrap">
        <Img sizes={featuredImage.childImageSharp.sizes} />
      </Link>
    </div>
  )
}

CaseItem.propTypes = {
  post: PropTypes.any,
}

export default CaseItem
