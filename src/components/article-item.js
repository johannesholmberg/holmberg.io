import React from 'react'
import Link from 'gatsby-link'

const ArticleItem = ({ post }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <li className="article-list__item article-item">
      <Link to={post.fields.slug} className="article-item__link">
        <h3 className="article-item__title">
          { post.frontmatter.title }
        </h3>
      </Link>

      <span style={{"color": "red"}}>

      </span>

      <p className="article-item__date">
        {post.frontmatter.date}

        { post.frontmatter.category &&
          <span> – <span className="article-item__category">
              { capitalizeFirstLetter(post.frontmatter.category) }
            </span>
          </span>
        }
      </p>
    </li>
  )
}

export default ArticleItem;