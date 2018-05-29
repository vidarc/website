// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

type Props = {
  text: string,
  type: string,
}

const style = css`
  border-radius: 5px;
  padding: 5px 10px;
`

const Button = ({ text, type }: Props) => (
  <button className={style} type={type}>
    {text}
  </button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default Button
