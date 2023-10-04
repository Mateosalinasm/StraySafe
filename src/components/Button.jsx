import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
const Button = ({ text, onPress }) => {
  return (
    <View className="relative my-1">
      <TouchableOpacity className="items-center justify-center bg-beige-100 w-80 h-12 rounded-2xl border border-beige-900">
        <Text
          className="font-bold text-beige-900 text-base text-center"
          onPress={onPress}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button
