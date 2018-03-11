import React from 'react'
import Link from 'gatsby-link'

const ArticleItem = ({ post }) => {

  return (

    <li className="c-article-list__item c-article-item">
      <Link to={post.fields.slug} className="c-article-item__link">
        <h2 className="c-article-item__title">
          { post.frontmatter.title }
        </h2>
        <p className="c-article-item__date">
          {post.frontmatter.date}
        </p>
      </Link>

      {/* {post.frontmatter.tags.map(tag => {
        return (
          <li>
            <Link to={`/tags/${tag}`}>
              {tag}
            </Link>
          </li>
        )
      })} */}
    </li>

  )
}

export default ArticleItem;