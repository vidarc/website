import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Art from '../components/playground/art/Art'

storiesOf('Met Museum Art', module)
  .add('Art card', () => (
    <Art />
  ));
