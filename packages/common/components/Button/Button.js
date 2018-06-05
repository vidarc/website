// @flow

import React from 'react'
import { css } from 'emotion'

type Props = {
  text: string,
  type: string,
  onClick: Function,
}

const style = css`
  border-radius: 5px;
  padding: 5px 10px;
`

const Button = ({ text, type, onClick }: Props) => (
  <button className={style} type={type} onClick={onClick}>
    {text}
  </button>
)

export default Button
