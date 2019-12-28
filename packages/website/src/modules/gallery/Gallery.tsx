import React, { useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import styled from '@emotion/styled'

import Loading from '../../components/Loading'
import Error from '../../components/Error'
import ImageGrid from './ImageGrid'
import useImagesFromStorage from './useImagesFromStorage'

interface Props extends RouteComponentProps {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Gallery: React.SFC<Props> = () => {
  const [nextPageToken, setNextPageToken] = useState('')
  const [images, loading, error, pageToken] = useImagesFromStorage(nextPageToken)

  const handleClick = () => setNextPageToken(pageToken)

  return (
    <Container>
      <h2>The Gallery App</h2>
      {loading && <Loading />}
      {error && <Error />}
      <ImageGrid images={images} />
      {pageToken !== undefined && (
        <button type="button" style={{ alignItems: 'center' }} onClick={handleClick}>
          Show more
        </button>
      )}
    </Container>
  )
}

export default Gallery
