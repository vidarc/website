import { useEffect, useState } from 'react'
import firebase from 'firebase/app'

import { ImageState } from './gallery.types'

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

const useImagesFromStorage = (pageToken = ''): [ImageState[], boolean, boolean, string] => {
  const [images, setImages] = useState<ImageState[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [nextToken, setNextPageToken] = useState(pageToken)

  useEffect(() => {
    async function getImages() {
      try {
        const { items, nextPageToken } = await firebase
          .storage()
          .ref('images')
          .list({ maxResults: 5, pageToken })

        const imageMap = items
          .map(({ fullPath }) => ({
            fullPath,
            thumbPath: pathToThumb(fullPath)
          }))
          .map(image => getUrls(image))

        const nextSet = await Promise.all(imageMap)
        setImages(i => [...i, ...nextSet])
        setNextPageToken(nextPageToken)
      } catch (_) {
        setError(true)
      }

      setLoading(false)
    }

    getImages()
  }, [pageToken])

  return [images, loading, error, nextToken]
}

export default useImagesFromStorage
