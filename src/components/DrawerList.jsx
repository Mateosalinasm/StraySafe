import {View, Text, Image, StyleSheet} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

export default function DrawerList() {
  const navigation = useNavigation();
  return (
    <View className="">
      <DrawerItem
        label="ADOPTION"
        onPress={() => navigation.navigate('')}
        icon={() => (
          <Image
            source={require('../assets/images/paw-icon.png')}
            className="w-[22px] h-[20px]"
          />
        )}
      />
      <DrawerItem
        label="ADD PET"
        onPress={() => navigation.navigate('Dashboard')}
        icon={() => (
          <Image
            source={require('../assets/images/solid-plus-icon.png')}
            className="w-[22px] h-[20px]"
          />
        )}
      />
      <DrawerItem
        className="text-white"
        label="FAVORITES"
        onPress={() => navigation.navigate('Dashboard')}
        icon={() => (
          <Image
            source={require('../assets/images/heart-icon.png')}
            className="w-[23px] h-[20px]"
          />
        )}
      />
      <DrawerItem
        label="PROFILE"
        onPress={() => navigation.navigate('AuthScreen')}
        icon={() => (
          <Image
            source={require('../assets/images/profile-icon.png')}
            className="w-[22px] h-[20px]"
          />
        )}
      />
    </View>
  );
}

