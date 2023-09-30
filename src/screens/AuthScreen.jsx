import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
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

  const handlePress = () => {
     console.log(WEB_CLIENT_ID)
  }

  return (
    <SafeAreaView className="bg-beige-200">
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{flexGrow: 1}}> */}
        <View className="bg-beige-200 h-screen justify-center">
          <View className="relative bottom-24 -rotate-15">
            <Text style={styles.fontText} className="font-bold text-center pt-3 text-beige-500 text-5xl">
              Welcome to Stray Safe!
            </Text>
          </View>
          <View className="items-center ">
            <Image
            style={styles.dropShadow}
              className="h-80 w-96 relative bottom-24"
              source={require('../assets/images/dogs.png')}
              alt=""
            />
          </View>
          <View className="items-center border">
            <Button text="Sign in" onPress={handlePress} />
            <Button text="Sign up" />
            <Button />
          </View>
        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fontText: {
    fontFamily: 'Poppins',
    fontSize: 50,
    fontWeight: '700',
  },
  dropShadow: {
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 6},
    shadowOpacity: 0.09,
    shadowRadius: 3,
  },
});

export default AuthScreen;
