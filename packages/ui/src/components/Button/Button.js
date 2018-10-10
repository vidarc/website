// @flow

import * as React from 'react'
import { css } from 'emotion'

import theme from '../../theme'

export type ButtonProps = {
  children: React.Node,
  type?: 'button' | 'submit',
  primary?: boolean,
  cancel?: boolean,
  onClick: Function
}

const Button = ({
  children, type, primary, cancel, onClick,
}: ButtonProps) => {
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
  cancel: false,
  type: 'button',
}

export default Button
