// @flow

import * as React from 'react'
import { css } from 'emotion'

export type ButtonProps = {
  text: string,
  type: string,
  primary?: boolean,
  cancel?: boolean,
  onClick: Function,
}

const Button = ({
  text, type, primary, cancel, onClick,
}: ButtonProps) => {
  let color
  if (primary) color = '#4286f4'
  if (cancel) color = '#e0184a'

  const style = css`
    background-color: ${color};
    border-radius: 5px;
    font-size: 0.8em;
    padding: 5px 10px;

    :focus {
      outline: 0;
    }
  `

  return (
    <button className={style} type={type} onClick={onClick}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  primary: false,
  cancel: false,
}

export default Button
