import React from 'react'

const Icon = ( {id} ) => (
  <svg
    viewBox="0 0 96 96"
    className="icon"
    width="24"
    height="24">
    <use xlinkHref={`#${id}`}></use>
  </svg>
)

export default Icon
