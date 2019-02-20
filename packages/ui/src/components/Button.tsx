/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import theme from '../theme'

export interface ButtonProps {
  children: React.ReactChild
  type?: 'button' | 'submit'
  primary?: boolean
  secondary?: boolean
  onClick: () => void
}

const Button = ({ children, type, primary, secondary, onClick }: ButtonProps) => {
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
      <button css={className} type='submit' onClick={onClick}>
        {children}
      </button>
    )
  }

  return (
    <button css={className} type='button' onClick={onClick}>
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
