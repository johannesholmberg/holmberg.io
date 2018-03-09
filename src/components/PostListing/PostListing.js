import React from 'react'
import Link from 'gatsby-link'

const PostListing = ({ post }) => {

  return (
    <article>
      <p>{post.frontmatter.date}</p>
      <h3>
        <Link to={post.fields.slug}>
          {post.frontmatter.title}
        </Link>
      </h3>
      <p>{post.excerpt}</p>
      {/* {post.frontmatter.tags.map(tag => {
        return (
          <li>
            <Link to={`/tags/${tag}`}>
              {tag}
            </Link>
          </li>
        )
      })} */}
    </article>
  )
}

export default PostListing;