import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import DrawerList from './DrawerList';

export default function CustomDrawerComponent() {
  return (
    <DrawerContentScrollView>
      <View className=" my-[10px] items-center">
        <View style={[styles.dropShadow]}>
          <Image
            source={require('../assets/images/smiling-girl.jpg')}
            className="h-[80px] w-[80px] rounded-full"
          />
        </View>
      </View>
      <DrawerList />
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
