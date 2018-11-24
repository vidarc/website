import * as React from 'react'

import { loader } from 'graphql.macro'

import SpeciesInfo from '../components/SpeciesInfo'
import withQuery from './withQuery'

const query = loader('../schemas/getSpecies.graphql')

const SpeciesWithQuery = withQuery(query, ({ getSpecies }) => (
  <SpeciesInfo {...getSpecies} />
))

export default SpeciesWithQuery
