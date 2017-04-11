import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import '../style/semantic/semantic.min.css'
import Art, { ArtCard, ArtInfo } from '../components/Projects/Art'

const art = {
  object_id: '33',
  title: 'Some Thing',
  department: 'Testing Department',
  artist: 'Matthew Ailes',
  artist_bio: 'A man living in Richmond, VA',
  date: 'September 25, 2017',
  medium: 'Bronze',
}

storiesOf('Met Museum Art', module)
  .add('Art card', () => (
    <ArtCard art={art} />
  ))
  .add('Art page', () => (
    <Art />
  ))
  .add('Art Info', () => (
    <ArtInfo title='A Title' content='Some Content' />
  ))
