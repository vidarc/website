import React, { Component } from 'react'
import ArtCard from './ArtCard'

const api = 'https://www.mattailes.net/art/images'

export default class Art extends Component {

  componentDidMount() {
    fetch(api)
      .then(r => r.json())
      .then(data => console.log(data))
      .catch(e => console.log(e))
  }

  render() {
    return (
      <div>
        hello
      </div>
    )
  }
}
