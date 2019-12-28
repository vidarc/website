/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import { ImageState } from './gallery.types'
import { breakpoints, keyframes } from '../../utils'

type Props = {
  images: ImageState[]
}

const Container = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: auto;
  grid-column-gap: 25px;

  ${breakpoints.small} {
    grid-template-columns: 1fr;
  }

  ${breakpoints.medium} {
    grid-template-columns: 1fr 1fr;
  }

  ${breakpoints.large} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const OverlayImage = styled.img`
  z-index: 999;
  position: absolute;
  left: 0;
`

const Image = styled.img`
  cursor: pointer;
  :hover {
    animation: ${keyframes.bounce} 1000ms ease infinite;
  }
`

const ImageGrid: React.FunctionComponent<Props> = ({ images }) => {
  const [overlay, setOverlay] = useState('')

  const handleClick = (url: string) => setOverlay(url)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return

      setOverlay('')
    }

    window.addEventListener('keydown', handleEscape)

    return function cleanup() {
      window.removeEventListener('keydown', handleEscape)
    }
  })

  return (
    <Container>
      {overlay && <OverlayImage src={overlay} alt="fullsized gallery item" />}
      {images.map(({ thumbPath, fullPath }) => (
        <Image
          key={thumbPath}
          src={thumbPath}
          alt="gallery item"
          onClick={() => handleClick(fullPath)}
        />
      ))}
    </Container>
  )
}

ImageGrid.defaultProps = {
  images: []
}

export default ImageGrid
