import React from 'react';
import {Image, Text, View} from 'react-native';
import {SafeAreaView, ScrollView} from 'react-native';
import { WEB_CLIENT_ID }  from '@env'
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import Button from '../components/Button';

GoogleSignin.configure({
  webClientId:
    WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
});

const AuthScreen = () => {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setState({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <SafeAreaView className="bg-beige-200">
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{flexGrow: 1}}>
        <View className="bg-beige-200 h-screen justify-center">
          <View className="items-center ">
            <Image
              className="h-96 w-96 relative bottom-24"
              source={require('../assets/images/dogs.png')}
              alt=""
            />
          </View>
          <View className="flex-row justify-around">
            <Button text="Log in" />
            <Button text="Sign up" />

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthScreen;
