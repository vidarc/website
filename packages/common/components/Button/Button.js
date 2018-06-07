// @flow

import React from 'react'
import { css } from 'emotion'

type Props = {
  text: string,
  type: string,
  primary: ?boolean,
  cancel: ?boolean,
  onClick: Function,
}

const Button = ({
  text, type, primary, cancel, onClick,
}: Props) => {
  let color
  if (primary) color = '#4286f4'
  if (cancel) color = '#e0184a'

  const style = css`
    background-color: ${color};
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.8em;
    padding: 5px 10px;
  `

  return (
    <button className={style} type={type} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
