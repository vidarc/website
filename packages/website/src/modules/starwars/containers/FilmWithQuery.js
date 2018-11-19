import * as React from 'react'

import { loader } from 'graphql.macro'

import FilmInfo from '../components/FilmInfo'
import withQuery from './withQuery'

const query = loader('../schemas/getFilm.graphql')

export default withQuery(query, ({ getFilm }) => <FilmInfo {...getFilm} />)
