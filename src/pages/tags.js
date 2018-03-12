import React from "react";
import Link from "gatsby-link";

const AllTags = ({ pathContext }) => {
  const { tags } = pathContext;

  if (tags) {
    return (
      <div>
        {tags.map(tag => {
          return (
            <li>
              <Link to={`/tags/${tag}`}>
                {tag}
              </Link>
            </li>
          )
        })}
      </div>
    )
  }
}

export default AllTags;