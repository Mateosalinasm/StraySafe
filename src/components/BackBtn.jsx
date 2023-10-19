import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

export default function BackBtn() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="absolute top-2 h-5 w-5 left-4"
      onPress={() => navigation.goBack()}>
      <Image
        source={require('../assets/images/back-icon.png')}
        className="h-5 w-5"
      />
    </TouchableOpacity>
  );
}
