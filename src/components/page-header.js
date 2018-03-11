import React from 'react'
import Link from 'gatsby-link'

const PageHeader = ({
  title,
  description
}) => {
  return (
    <header className="c-page-header">
      <h1 className="c-page-header__title">
        { title }
      </h1>
      <p className="c-page-header__meta">
        { description }
      </p>
    </header>
  )
}

export default PageHeader;



