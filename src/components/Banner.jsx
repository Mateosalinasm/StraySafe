import React from 'react';
import {Image, Text, View} from 'react-native';

const Banner = () => {
  return (
    <View className="justify-end ">
      <View className='flex-row justify-center ml-4'>
        <Text className="text-center text-beige-500 font-extrabold text-5xl">
          Stray Safe
        </Text>
        <Image
          className="w-5 h-5 rotate-20 relative top-6 opacity-90"
          source={require('../assets/images/paw-print-3.png')}
        />
      </View>
    </View>
  );
};

export default Banner;
