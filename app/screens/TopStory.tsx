import React from 'react';
import {STORY_FILTER} from '../constants/config';
import Container from './components/Container';

const TopStory = () => {
  return <Container type={STORY_FILTER.TOP} />;
};

export default TopStory;
