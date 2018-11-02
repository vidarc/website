// @flow

import * as React from 'react'
import styled from 'react-emotion'

const ContainerDiv = styled('div')`
  display: flex;
`

const ItemDiv = styled('div')`
  flex: 1 1 100%;
  max-width: ${props => props.width};
`

const FilmDisplay = ({
  title,
  content,
}: {
  title: string,
  content: string | number
}) => (
  <ContainerDiv>
    <ItemDiv width='25%'>{title}</ItemDiv>
    <ItemDiv width='75%'>{content}</ItemDiv>
  </ContainerDiv>
)

export default FilmDisplay
