import {useRef, useState} from 'react';
import StoryService from '../../service/StoryService';
const PAGE_SIZE = 20;
const useStory = () => {
  const offset = useRef<number>(0);
  const [masterData, setMasterData] = useState<number[]>([]);
  const [data, setData] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const storyService = new StoryService();

  const getStory = (type: string) => {
    storyService
      .getStory({type: type})
      .then(res => {
        setMasterData(res.data);
        setData(res.data.slice(0, PAGE_SIZE));
        offset.current = PAGE_SIZE;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const loadMore = () => {
    let newD = [...data, ...masterData.slice(offset.current, offset.current + PAGE_SIZE)];
    setData(newD);
    offset.current += PAGE_SIZE;
  };
  return {
    data,
    getStory,
    isLoading,
    loadMore,
  };
};

export default useStory;
