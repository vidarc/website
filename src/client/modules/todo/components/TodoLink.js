// @flow

import * as React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

export type Props = {
  active: boolean,
  children: React.Node,
  onClick: Function,
}

const Link = ({ active, children, onClick }: Props) => {
  if (active) {
    return <span>{children}</span>
  }
  return <Button onClick={() => onClick()}>{children}</Button>
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Link
