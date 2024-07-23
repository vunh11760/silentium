import React from 'react';
import {STORY_FILTER} from '../constants/config';
import Container from './components/Container';

const NewStory = () => {
  return <Container type={STORY_FILTER.NEW} />;
};

export default NewStory;
