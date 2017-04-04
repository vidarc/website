import React, { Component } from 'react'
import { Card, Dimmer, Image, Loader } from 'semantic-ui-react'

export default class ArtCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      image: '',
      loading: true
    }
  }

  getImage() {
    let url = 'http://www.mattailes.net/art/images/' + this.props.art.id + '.jpg'
    fetch(url)
      .then((response) => {
        if (response.ok) {
          this.setState({
            image: url,
            loading: false
          })
        }
        else {
          this.setState({
            image: 'http://placehold.it/350x350',
            loading: false
          })
        }
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <Card color='blue' centered>
        <Dimmer active={this.state.loading}>
          <Loader content='Loading Art Information' />
        </Dimmer>
        <Image src={this.state.image} />
        <Card.Content>
          {this.props.art.title ? <Card.Header content={this.props.art.title} /> : null}
          {this.props.art.department ? <Card.Meta content={this.props.art.department} /> : null}
          <Card.Description>
            {this.props.art.artist ? <div>Artist: {this.props.art.artist}</div> : null}
            {this.props.art.artist_bio ? <div>Bio: {this.props.art.artist_bio}</div> : null}
            {this.props.art.date ? <div>Date: {this.props.art.date}</div> : null}
            {this.props.art.medium ? <div>Medium: {this.props.art.medium}</div> : null}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}
