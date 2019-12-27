import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import firebase from 'firebase/app'

import Loading from '../../components/Loading'
import Error from '../../components/Error'
import ImageGrid from './ImageGrid'
import { ImageState } from './gallery.types'

interface Props extends RouteComponentProps {}

const pathToThumb = (path: string) => {
  const array = path.split('/')
  const fileName = array.pop()
  return [...array, 'thumbnails', `thumb_${fileName}`].join('/')
}

const getDownloadURL = async (ref: string) =>
  firebase
    .storage()
    .ref(ref)
    .getDownloadURL()

const getUrls = async (image: ImageState): Promise<ImageState> => {
  const fullPath = await getDownloadURL(image.fullPath)
  const thumbPath = await getDownloadURL(image.thumbPath)

  return { fullPath, thumbPath }
}

const Gallery: React.SFC<Props> = () => {
  const [images, setImages] = useState<ImageState[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function getImages() {
      try {
        const { items } = await firebase
          .storage()
          .ref('images')
          .listAll()

        const imageMap = items
          .map(({ fullPath }) => ({
            fullPath,
            thumbPath: pathToThumb(fullPath)
          }))
          .map(image => getUrls(image))

        setImages(await Promise.all(imageMap))
      } catch (_) {
        setError(true)
      }

      setLoading(false)
    }

    getImages()
  }, [])

  return (
    <div>
      <h2>The Gallery App</h2>
      {loading && <Loading />}
      {error && <Error />}
      <ImageGrid images={images} />
    </div>
  )
}

export default Gallery
