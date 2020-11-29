import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const NotFound: FunctionComponent<RouteComponentProps> = () => (
  <ImageContainer>
    <Helmet>
      <title>404 - Not Found</title>
    </Helmet>
    <img src="https://http.cat/404" alt="404 cat" />
  </ImageContainer>
)

export default NotFound
