import React from 'react'

const BznsHeader = (props) => {
  return <h1>Hello, {props.name}</h1>
}

BznsHeader.propTypes = {
  name: React.PropTypes.string.isRequired
}

export default BznsHeader
