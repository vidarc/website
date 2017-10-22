import React from 'react'
import PropTypes from 'prop-types'
import { Card, Image } from 'semantic-ui-react'
import { ArtInfo } from './'

const ArtCard = ({ art }) => (
  <Card color='blue' centered>
    <Image src={art.image_url} />
    <Card.Content>
      {art.title ? <Card.Header content={art.title} /> : null}
      {art.department ? <Card.Meta content={art.department} /> : null}
      <Card.Description>
        <ArtInfo title='Artist' content={art.artist} />
        <ArtInfo title='Bio' content={art.artist_bio} />
        <ArtInfo title='Date' content={art.date} />
        <ArtInfo title='Medium' content={art.medium} />
      </Card.Description>
    </Card.Content>
  </Card>
)
export default ArtCard

ArtCard.propTypes = {
  art: PropTypes.shape({
    title: PropTypes.string,
    department: PropTypes.string,
    artist: PropTypes.string,
    artist_bio: PropTypes.string,
    date: PropTypes.string,
    medium: PropTypes.string,
  }),
}
