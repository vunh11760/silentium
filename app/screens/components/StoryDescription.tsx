import {Colors} from 'app/assets';
import {IStoryDetail} from 'app/types/Story';
import dayjs from 'dayjs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
type StoryDescriptionProps = {
  storyDetail: IStoryDetail | undefined;
};
const StoryDescription = ({storyDetail}: StoryDescriptionProps) => {
  if (!!storyDetail)
    return (
      <View style={styles.container}>
        <Text testID={`title_${storyDetail.id}`} style={{fontWeight: '600'}}>
          {storyDetail?.title}
        </Text>
        <Text style={{fontSize: 11}}>
          {storyDetail?.by} {dayjs(storyDetail?.time).format('MM/DD : mm:ss A')}
        </Text>
      </View>
    );
  return null;
};

export default StoryDescription;
const styles = StyleSheet.create({
  container: {backgroundColor: Colors.white, flex: 1},
});
