import {useState} from 'react';
import StoryService from '../../service/StoryService';
import {IStoryDetail} from './../../types/Story';

const useStoryDetail = () => {
  const [storyDetail, setStoryDetail] = useState<IStoryDetail>({
    by: '',
    descendants: 0,
    id: 0,
    kids: [0],
    score: 0,
    text: '',
    time: 0,
    title: '',
    type: '',
    url: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const storyService = new StoryService();

  const getDetailStory = (storyId: number) => {
    storyService
      .getDetailStory({storyId: storyId})
      .then(res => {
        setStoryDetail(res.data);
        setIsLoading(false);
      })
      .catch(err => {});
  };
  return {storyDetail, getDetailStory, isLoading};
};

export default useStoryDetail;
