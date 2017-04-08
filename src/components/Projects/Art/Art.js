import React, { Component } from 'react'
import { Card, Container, Dimmer, Loader } from 'semantic-ui-react'
import ArtCard from './ArtCard'
import './Art.css'

const api = 'https://www.mattailes.net/art/images'

export default class Art extends Component {

  state = {
    artArray: [],
    loading: true
  }

  componentDidMount() {
    fetch(api)
      .then(response => response.json())
      .then(data => this.setState({ artArray: data, loading: false }))
      .catch(err => console.log(err))
  }

  render() {
    const { loading } = this.state

    return (
      <Dimmer.Dimmable blurring as={Container} className='artContainer' active={loading}>
        <Dimmer active={loading}>
          <Loader content='Loading the Art' />
        </Dimmer>
        <Card.Group className='cardGroup'>
          {this.state.artArray.map((art) => (
            <ArtCard key={art.id} art={art} />
          ))}
        </Card.Group>
      </Dimmer.Dimmable>
    )
  }
}
