import React from "react";
import Link from "gatsby-link";

const AllTags = ({ pathContext }) => {
  const { posts, tagName } = pathContext;

  if (posts) {
    return (
      <div>
        Posts about {tagName}
      </div>
    )
  }
}

export default Tags;