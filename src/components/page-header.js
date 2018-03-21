import React from 'react'
import PropTypes from 'prop-types'

const PageHeader = ({ title, description, category }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <header className="page-header">
      <h1 className="page-header__title">{title}</h1>
      {description && (
        <p className="page-header__subtitle">
          {description}

          {category && (
            <span>
              {' '}
              –{' '}
              <span className="page-header__category">
                {capitalizeFirstLetter(category)}
              </span>
            </span>
          )}
        </p>
      )}
    </header>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
}

export default PageHeader
