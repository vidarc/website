import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Container, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { loadRandomArt } from '../../../actions/artActions'
import ArtCard from './ArtCard'
import './Art.css'

class Art extends Component {
  componentDidMount() {
    this.props.dispatch(loadRandomArt())
  }

  render() {
    return (
      <Container className='artContainer'>
        {/* <Loader active={loading} content='Loading the Art' /> */}
        <Card.Group className='cardGroup'>
          {this.props.randomArtCollection.map(art => <ArtCard key={art.object_id} art={art} />)}
        </Card.Group>
      </Container>
    )
  }
}

Art.propTypes = {
  randomArtCollection: PropTypes.arrayOf(
    PropTypes.shape({
      object_id: PropTypes.number.isRequired,
      department: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      artist_bio: PropTypes.string.isRequired,
      date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      medium: PropTypes.string.isRequired,
    }),
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state, props) {
  return {
    randomArtCollection: state.randomArtCollection,
  }
}

export default connect(mapStateToProps)(Art)
