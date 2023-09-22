import React from 'react'
import { View } from 'react-native'

const HomeDog = () => {
  return (
    <View className="items-center">
      <Image
        className="mt-10 w-80 h-96  justify-center"
        source={require('../assets/images/pitbull-puppy.png')}
      />
    </View>
  );
}

export default HomeDog
