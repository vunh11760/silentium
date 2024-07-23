import {Colors} from 'app/assets';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {STORY_FILTER} from '../../constants/config';
import useStory from '../hooks/useStory';
import ListStory from './ListStory';
import LoadingItem from './LoadingItem';

type ListStoryProps = {
  type: STORY_FILTER.NEW | STORY_FILTER.BEST | STORY_FILTER.TOP;
};
const Container = ({type}: ListStoryProps) => {
  const {isLoading, data, getStory, loadMore} = useStory();
  useEffect(() => {
    if (!!type) {
      let typePayload = '';
      switch (type) {
        case STORY_FILTER.BEST:
          typePayload = 'beststories';
          break;
        case STORY_FILTER.NEW:
          typePayload = 'newstories';
          break;
        case STORY_FILTER.TOP:
          typePayload = 'topstories';
          break;
        default:
          break;
      }
      if (!!type) getStory(typePayload);
    }
  }, [type]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <>
          {Array.from({length: 10}).map(item => {
            return <LoadingItem />;
          })}
        </>
      ) : (
        <ListStory data={data} testID={`list_${type}`} loadMore={loadMore} />
      )}
    </View>
  );
};

export default Container;
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.white},
});
