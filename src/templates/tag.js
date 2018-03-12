import React from "react";
import Link from "gatsby-link";

const Tags = ({ pathContext }) => {
  const { posts, tagName } = pathContext;

  if (posts) {
    return (
      <div>
        Posts about {tagName}

        <ul>
          {posts.map(post => {
            return (
              <li>
                <Link to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Tags;