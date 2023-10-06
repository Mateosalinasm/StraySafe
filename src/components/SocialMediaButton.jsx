import React from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
const SocialMediaButton = ({text, onPress, image}) => {
  return (
    <View className="relative my-1">
      <TouchableOpacity
        style={styles.dropShadow}
        onPress={onPress}
        className="items-center justify-center bg-white w-36  h-12 rounded-2xl border border-beige-900">
        <View className="flex-row justify-between px-4">
          <Image className="h-6 w-6" source={image} />
          <View className="ml-5">
            <Text className="font-medium text-beige-900 text-base text-left">
              {text}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dropShadow: {
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});

export default SocialMediaButton;
