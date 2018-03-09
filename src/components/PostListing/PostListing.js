import React from 'react'
import Link from 'gatsby-link'

const PostListing = ({ post }) => {

  return (
    <article>
      <p>{post.frontmatter.date}</p>
      <h3>

          {post.frontmatter.title}

      </h3>
      <p>{post.excerpt}</p>
    </article>
  )
}

export default PostListing;