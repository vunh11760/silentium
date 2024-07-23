import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import ItemStory from '../components/ItemStory';
import EmptyComponent from './EmptyComponent';

type ListStoryProps = {
  data: number[];
  testID: string;
  loadMore: () => void;
};
const ListStory = ({data, testID, loadMore}: ListStoryProps) => {
  const renderItem = ({item, index}: any) => {
    return <ItemStory storyId={item} />;
  };
  return (
    <FlatList
      testID={testID}
      showsVerticalScrollIndicator={false}
      style={{flex: 1}}
      data={data}
      renderItem={renderItem}
      maxToRenderPerBatch={10}
      updateCellsBatchingPeriod={50}
      onEndReached={loadMore}
      onEndReachedThreshold={0.7}
      ListEmptyComponent={EmptyComponent}
    />
  );
};

export default ListStory;
