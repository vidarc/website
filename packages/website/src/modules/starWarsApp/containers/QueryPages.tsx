import { Router } from '@reach/router'
import { loader } from 'graphql.macro'

import FilmInfo from '../components/FilmInfo'
import PersonInfo from '../components/PersonInfo'
import PlanetInfo from '../components/PlanetInfo'
import SpeciesInfo from '../components/SpeciesInfo'
import StarshipInfo from '../components/StarshipInfo'
import VehicleInfo from '../components/VehicleInfo'
import withQuery from './withQuery'

const filmQuery = loader('../schemas/getFilm.graphql')
const speciesQuery = loader('../schemas/getSpecies.graphql')
const personQuery = loader('../schemas/getPerson.graphql')
const planetQuery = loader('../schemas/getPlanet.graphql')
const starshipQuery = loader('../schemas/getStarship.graphql')
const vehicleQuery = loader('../schemas/getVehicle.graphql')

const FilmInfoWithQuery = withQuery(filmQuery, ({ getFilm }) => <FilmInfo {...getFilm} />)
const SpeciesInfoWithQuery = withQuery(speciesQuery, ({ getSpecies }) => (
  <SpeciesInfo {...getSpecies} />
))
const PersonInfoWithQuery = withQuery(personQuery, ({ getPerson }) => <PersonInfo {...getPerson} />)
const PlanetInfoWithQuery = withQuery(planetQuery, ({ getPlanet }) => <PlanetInfo {...getPlanet} />)
const StarshipInfoWithQuery = withQuery(starshipQuery, ({ getStarship }) => (
  <StarshipInfo {...getStarship} />
))
const VehicleInfoWithQuery = withQuery(vehicleQuery, ({ getVehicle }) => (
  <VehicleInfo {...getVehicle} />
))

const QueryPages = () => (
  <Router>
    <FilmInfoWithQuery path="film/*" defaultId={2} />
    <SpeciesInfoWithQuery path="species/*" defaultId={5} />
    <PersonInfoWithQuery path="person/*" defaultId={1} />
    <PlanetInfoWithQuery path="planet/*" defaultId={2} />
    <StarshipInfoWithQuery path="starship/*" defaultId={41} />
    <VehicleInfoWithQuery path="vehicle/*" defaultId={6} />
  </Router>
)

export default QueryPages
