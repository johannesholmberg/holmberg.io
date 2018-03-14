import React from 'react'
import Link from 'gatsby-link'

const PageHeader = ({
  title,
  description
}) => {
  return (
    <header className="page-header">
      <h1 className="page-header__title">
        { title }
      </h1>
      <p className="page-header__subtitle">
        { description }
      </p>
    </header>
  )
}

export default PageHeader;



