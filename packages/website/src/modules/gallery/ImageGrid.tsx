/* eslint-disable react/prop-types */
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

const Image = styled.img`
  cursor: pointer;
  :hover {
    animation: ${keyframes.bounce} 1000ms ease infinite;
  }
`

const ImageGrid: React.FunctionComponent<Props> = ({ images }) => (
  <Container>
    {images.map(({ thumbPath }) => (
      <Image key={thumbPath} src={thumbPath} alt="gallery item" />
    ))}
  </Container>
)

ImageGrid.defaultProps = {
  images: [],
}

export default ImageGrid
