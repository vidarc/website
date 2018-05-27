// @flow

import * as React from 'react'
import PropTypes from 'prop-types'

export type Props = {
  active: boolean,
  children: React.Node,
  onClick: Function,
}

const Link = ({ active, children, onClick }: Props) => {
  if (active) {
    return <span>{children}</span>
  }
  return <button onClick={() => onClick()}>{children}</button>
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Link
