import * as React from 'react'

import styled from '@emotion/styled'

export interface Props {
  onClick: () => void
  completed?: boolean
  text?: string
}

interface StyledLiProps {
  completed: boolean
}
const StyledLi = styled.li<StyledLiProps>`
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  cursor: pointer;
`

const Todo = ({ onClick, completed, text }: Props) => (
  <StyledLi onClick={onClick} onKeyDown={onClick} completed={completed}>
    {text}
  </StyledLi>
)

export default Todo
