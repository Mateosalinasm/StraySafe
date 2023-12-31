import React from 'react';
import {View, Text} from 'react-native';

const Separator = () => (
  <View className="flex-row items-center justify-center my-4 top-1">
    <View className="w-24 h-px bg-beige-900 m-2" />
    <Text className="text-center opacity-80 text-sm">or continue with</Text>
    <View className="w-24 h-px bg-beige-900 m-2" />
  </View>
);


export default Separator;