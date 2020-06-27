import React from 'react'
import { RouteComponentProps } from '@reach/router'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

interface Props extends RouteComponentProps {}

const Mashin: React.FC<Props> = () => {
  return (
    <Container>
      <iframe
        title="mashin"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allow="accelerometer; autoplay; muted; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Container>
  )
}

export default Mashin
