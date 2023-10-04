import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
const SocialMediaButton = ({text, onPress, image}) => {
  return (
    <View className="relative my-1 bottom-4">
      <TouchableOpacity className="items-center justify-center bg-white w-80 h-12 rounded-2xl border border-beige-900">
        <View className="flex-row justify-between w-56">
          <Image className="h-6 w-6 " source={image} />
          <View className=" w-44">
            <Text
              className="font-semibold text-beige-900 text-base text-left"
              onPress={onPress}>
              {text}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SocialMediaButton;
