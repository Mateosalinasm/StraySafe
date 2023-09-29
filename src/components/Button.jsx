import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
const Button = ({ text, onPress }) => {
  return (
    <View className="relative">
      <TouchableOpacity className="items-center justify-center bg-beige-100 w-40 h-12 rounded-full border border-beige-900">
        <Text
          className="font-extrabold text-beige-900 text-xl text-center"
          onPress={onPress}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button
