import * as React from 'react'

import styled from '@emotion/styled'
import { RouteComponentProps } from '@reach/router'

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const NotFound: React.SFC<RouteComponentProps> = () => (
  <ImageContainer>
    <img src='https://http.cat/404' alt='404 cat' />
  </ImageContainer>
)

export default NotFound
