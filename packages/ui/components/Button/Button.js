// @flow

import * as React from 'react'
import { css } from 'emotion'

import theme from '../../theme'

type ButtonProps = {
  text: string,
  type?: 'button' | 'submit',
  primary?: boolean,
  cancel?: boolean,
  onClick: Function
}

const Button = ({ text, type, primary, cancel, onClick }: ButtonProps) => {
  let color
  if (primary) color = theme.colors.blue
  if (cancel) color = '#e0184a'

  const className = css`
    background-color: ${color};
    border-radius: 5px;
    font-size: 0.8em;
    padding: 5px 10px;

    :focus {
      outline: 0;
    }
  `

  if (type === 'submit') {
    return (
      <button className={className} type="submit" onClick={onClick}>
        {text}
      </button>
    )
  }

  return (
    <button className={className} type="button" onClick={onClick}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  primary: false,
  cancel: false,
  type: 'button'
}

export default Button
