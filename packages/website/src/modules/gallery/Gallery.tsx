import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import firebase from 'firebase/app'

interface Props extends RouteComponentProps {}

const Gallery: React.SFC<Props> = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    async function getImages() {
      const ref = firebase.storage().ref('images')
      const images = await ref.listAll()
      const paths = images.items.map(item => item.getDownloadURL())
      setItems(await Promise.all(paths))
    }

    getImages()
  }, [])

  return (
    <div>
      <h2>The Gallery App</h2>
      {items.map(item => (
        <img key={item} src={item} alt={item} />
      ))}
    </div>
  )
}

export default Gallery
