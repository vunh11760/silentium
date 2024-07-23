import React from 'react';
import {STORY_FILTER} from '../constants/config';
import Container from './components/Container';

const BestStory = () => {
  return <Container type={STORY_FILTER.BEST} />;
};

export default BestStory;
