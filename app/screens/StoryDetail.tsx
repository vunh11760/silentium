import {Colors} from 'app/assets';
import {SCREEN_NAME} from 'app/constants/ScreenName';
import {ScreenProps} from 'app/types/RootStackParamList';
import dayjs from 'dayjs';
import React, {useEffect} from 'react';
import {View, FlatList, TouchableOpacity, Image, Text} from 'react-native';

import LoadingItem from './components/LoadingItem';
import StoryDescription from './components/StoryDescription';
import useStoryDetail from './hooks/useStoryDetail';
import ItemComment from './components/ItemComment';
import ImageUtil from 'app/utils/ImageUtil';
import color from 'app/assets/styles/color';
import {useNavigation} from '@react-navigation/core';

const StoryDetail = ({route}: ScreenProps<SCREEN_NAME.STORY_DETAIL>) => {
  const {isLoading, storyDetail, getDetailStory} = useStoryDetail();
  const navigation = useNavigation();
  const {storyId = ''} = route.params;
  useEffect(() => {
    if (!!storyId) {
      getDetailStory(route.params?.storyId);
    }
  }, [storyId]);
  if (isLoading)
    return (
      <View style={{minHeight: 200}}>
        <LoadingItem />
      </View>
    );
  const renderItem = ({item, index}: any) => {
    return <ItemComment storyId={item} />;
  };
  const goBack = () => {
    navigation.goBack();
  };
  const Header = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: color.white,
          alignItems: 'center',
          paddingBottom: 4,
        }}>
        <TouchableOpacity
          onPress={goBack}
          style={{
            padding: 5,
            marginRight: 10,
            marginLeft: 5,
          }}>
          <Image style={{width: 10, height: 10}} source={ImageUtil.images.ic_arrow_left} />
        </TouchableOpacity>
        <StoryDescription storyDetail={storyDetail} />
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      {Header()}
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{flex: 1, paddingHorizontal: 10}}
        data={storyDetail?.kids}
        renderItem={renderItem}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={50}
        // onEndReached={loadMore}
        onEndReachedThreshold={0.7}
        // ListEmptyComponent={EmptyComponent}
      />
    </View>
  );
};

export default StoryDetail;
