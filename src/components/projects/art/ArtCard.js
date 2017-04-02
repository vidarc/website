import React, { Component } from 'react'
import { Card, Dimmer, Image, Loader } from 'semantic-ui-react'

const api = 'https://metmuseum.org/api/Collection/additionalImages?crdId='

export default class ArtCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      image: '',
      loading: true
    }
  }

  componentDidMount() {
    fetch(api + this.props.art.id)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          image: response.webImageUrl,
          visible: false
        })
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <Card color='blue' centered>
        <Dimmer active>
          <Loader />
        </Dimmer>
        {this.state.loading ? <Image src='http://placehold.it/350x350' /> : <Image src={this.state.image} />}
        <Loader as='Img' />
        <Card.Content>
          <Card.Header content={this.props.art.title} />
          <Card.Meta content={this.props.art.department} />
          <Card.Description>
            <div>Artist: {this.props.art.artist}</div>
            <div>Bio: {this.props.art.artist_bio}</div>
            <div>Date: {this.props.art.date}</div>
            <div>Medium: {this.props.art.medium}</div>
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}
