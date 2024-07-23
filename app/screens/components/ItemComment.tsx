import dayjs from 'dayjs';
import {useEffect, useMemo, useState} from 'react';
import {
  Dimensions,
  Image,
  LayoutChangeEvent,
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import useStoryDetail from '../hooks/useStoryDetail';
import LoadingItem from './LoadingItem';
import ImageUtil from 'utils/ImageUtil';
import {Colors} from 'app/assets';
import color from 'app/assets/styles/color';

type ItemCommentProps = {
  storyId: number;
};
const MAX_HEIGHT = 200;
const ItemComment = ({storyId}: ItemCommentProps) => {
  const {isLoading, storyDetail, getDetailStory} = useStoryDetail();
  const [height, setHeight] = useState<number>(0);
  const [isFull, setIsFull] = useState<boolean>(false);

  useEffect(() => {
    if (!!storyId) {
      getDetailStory(storyId);
    }
  }, [storyId]);
  const onLayout = (e: LayoutChangeEvent) => {
    setHeight(e.nativeEvent.layout.height);
  };
  const checkShowButtonSeeMore = useMemo(() => {
    if (height > MAX_HEIGHT) return true;
    return false;
  }, [height]);
  const {width} = Dimensions.get('window');

  if (isLoading) return <LoadingItem />;
  if (storyDetail?.type === 'comment')
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={ImageUtil.images.ic_user} style={styles.avt} resizeMode="contain" />
          <Text style={{fontWeight: '500', fontSize: 12}}>{storyDetail?.by}</Text>
        </View>
        <View
          style={{
            overflow: 'hidden',
          }}>
          <View
            style={{
              height: checkShowButtonSeeMore ? (isFull ? height : MAX_HEIGHT) : height,
            }}></View>
          <View onLayout={onLayout} style={{position: 'absolute'}}>
            <RenderHTML
              // renderersProps={renderersProps}
              contentWidth={width}
              source={{html: storyDetail?.text || ''}}
              // tagsStyles={tagsStyles}
            />
          </View>
        </View>

        {checkShowButtonSeeMore && (
          <TouchableOpacity
            testID={`see_more_button_${storyId}`}
            style={{marginTop: 5}}
            onPress={() => {
              setIsFull(pre => !pre);
              LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            }}>
            <Text style={{color: color.link}}>{isFull ? 'Close' : 'See more'}</Text>
          </TouchableOpacity>
        )}
        <Text style={{fontSize: 11}}>{dayjs(storyDetail?.time).format('MM/DD: mm:ss A')}</Text>
      </View>
    );
  return null;
};

export default ItemComment;
const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    padding: 4,
    borderRadius: 4,
    backgroundColor: Colors.neutral_2,
  },
  avt: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
});
