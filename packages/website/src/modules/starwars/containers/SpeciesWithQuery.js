import * as React from 'react'

import { loader } from 'graphql.macro'

import SpeciesInfo from '../components/SpeciesInfo'
import withQuery from './withQuery'

const query = loader('../schemas/getSpecies.graphql')

export default withQuery(query, ({ getSpecies }) => (
  <SpeciesInfo {...getSpecies} />
))
