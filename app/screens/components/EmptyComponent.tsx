import React from 'react';
import {Dimensions, Text, View} from 'react-native';

const EmptyComponent = () => {
  return (
    <View
      style={{
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>EmptyComponent</Text>
    </View>
  );
};

export default EmptyComponent;
