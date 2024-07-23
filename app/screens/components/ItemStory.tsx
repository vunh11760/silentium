import {useNavigation} from '@react-navigation/core';
import {Colors} from 'app/assets';
import {SCREEN_NAME} from 'app/constants/ScreenName';
import {NavigationTypes} from 'app/types/RootStackParamList';
import ImageUtil from 'app/utils/ImageUtil';
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useStoryDetail from '../hooks/useStoryDetail';
import ItemComment from './ItemComment';
import LoadingItem from './LoadingItem';
import StoryDescription from './StoryDescription';

type ItemStoryProps = {
  storyId: number;
};

const ItemStory = ({storyId}: ItemStoryProps) => {
  const navigation = useNavigation<NavigationTypes>();
  const {isLoading, storyDetail, getDetailStory} = useStoryDetail();
  useEffect(() => {
    if (!!storyId) {
      getDetailStory(storyId);
    }
  }, [storyId]);

  if (isLoading)
    return (
      <View style={{minHeight: 200}}>
        <LoadingItem />
      </View>
    );
  const goToDetail = () => {
    navigation.navigate(SCREEN_NAME.STORY_DETAIL, {storyId: storyId});
  };
  return (
    <View style={styles.container}>
      <StoryDescription storyDetail={storyDetail} />
      {storyDetail?.kids &&
        storyDetail?.kids?.length > 0 &&
        storyDetail?.kids?.slice(0, 2).map(item => {
          return <ItemComment storyId={item} />;
        })}
      {storyDetail?.kids && storyDetail?.kids?.length > 2 && (
        <TouchableOpacity
          testID={`load_more_comment_${storyId}`}
          onPress={goToDetail}
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 4}}>
          <Text style={{fontSize: 11}}>Load more comment</Text>
          <Image source={ImageUtil.images.ic_arrow_right} style={{width: 8, height: 8}} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ItemStory;
const styles = StyleSheet.create({
  container: {
    marginTop: 9,
    marginHorizontal: 8,
    padding: 4,
    borderRadius: 4,
    backgroundColor: Colors.neutral_1,
  },
});
