// @flow

import * as React from 'react'
import styled from 'react-emotion'

const Container = styled.div`
  display: flex;
`

const Item = styled.div`
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
  <Container>
    <Item width='25%'>{title}</Item>
    <Item width='75%'>{content}</Item>
  </Container>
)

export default FilmDisplay
