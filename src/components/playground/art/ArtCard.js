import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const api = 'http://metmuseum.org/api/Collection/additionalImages?crdId='

const ArtCard = (props) => {
  fetch(api + props.art.id)
    .then((response) => {
      console.log(response)
    })

  return (
    <Card color='blue'>
      <Image src={props.art.image} />
      <Card.Content>
        <Card.Header content={props.art.title} />
        <Card.Meta content={props.art.department} />
        <Card.Description>
          <div>Artist: {props.art.artist}</div>
          <div>Bio: {props.art.artist_bio}</div>
          <div>Date: {props.art.date}</div>
          <div>Medium: {props.art.medium}</div>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default ArtCard
