import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Dimmer, Image, Loader } from 'semantic-ui-react'
import { ArtInfo } from './'
import placeholder from '../../../images/placeholder.png'

export default class ArtCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: placeholder,
      loading: true,
    }
  }

  componentDidMount() {
    const url = `https://www.mattailes.net/art/image/${this.props.art.object_id}`

    fetch(url)
      .then(response => response.json())
      .then((response) => {
        this.setState({
          image: response.webImageUrl,
          loading: false,
        })
      })
      .catch(err => this.setState({ loading: false }))
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
            <ArtInfo title='Artist' content={this.props.art.artist} />
            <ArtInfo title='Bio' content={this.props.art.artist_bio} />
            <ArtInfo title='Date' content={this.props.art.date} />
            <ArtInfo title='Medium' content={this.props.art.medium} />
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

ArtCard.propTypes = {
  art: PropTypes.object.isRequired,
}
