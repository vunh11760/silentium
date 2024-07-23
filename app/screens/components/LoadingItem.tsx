import React from 'react';
import {View, Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const LoadingItem = () => {
  const {width} = Dimensions.get('window');
  return (
    <View style={{marginTop: 8, paddingLeft: 10}}>
      <SkeletonPlaceholder borderRadius={4}>
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
          <SkeletonPlaceholder.Item width={60} height={60} borderRadius={50} />
          <SkeletonPlaceholder.Item marginLeft={20}>
            <SkeletonPlaceholder.Item width={width - 140} height={20} />
            <SkeletonPlaceholder.Item marginTop={6} width={140} height={20} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};

export default LoadingItem;
