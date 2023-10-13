import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';

export default function CustomDrawerComponent() {
  return (
    <DrawerContentScrollView style={[styles.dropShadow]}>
      <View className="ml-[20px] my-[10px]">
        <Image source={require('../assets/images/smiling-girl.jpg')} className='h-[70px] w-[70px] rounded-full'/>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  dropShadow: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
});