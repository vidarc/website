// @flow

import * as React from 'react'
import { css } from 'emotion'

import theme from '../../theme'

export type ButtonProps = {
  children: React.Node,
  type?: 'button' | 'submit',
  primary?: boolean,
  secondary?: boolean,
  onClick: Function
}

const Button = ({
  children,
  type,
  primary,
  secondary,
  onClick,
}: ButtonProps) => {
  let color
  if (primary) color = theme.colors.blue
  if (secondary) color = theme.colors.red

  const className = css`
    color: ${theme.colors.white};
    background-color: ${color};
    border-radius: 5px;
    font-size: 1em;
    padding: 0.75em 2em;
    cursor: pointer;

    :focus {
      outline: 0;
    }
  `

  if (type === 'submit') {
    return (
      <button className={className} type='submit' onClick={onClick}>
        {children}
      </button>
    )
  }

  return (
    <button className={className} type='button' onClick={onClick}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  primary: false,
  secondary: false,
  type: 'button',
}

export default Button
