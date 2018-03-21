import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ id }) => (
  <span className="svg-icon">
    <svg viewBox="0 0 96 96" className="icon" width="24" height="24">
      <use xlinkHref={`#${id}`} />
    </svg>
  </span>
)

Icon.propTypes = {
  id: PropTypes.string,
}

export default Icon
