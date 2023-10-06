import {View, Text, Image, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

export default function RegisterForm() {
  return (
    <View className="items-center">
      <View>
        <Text
          className="text-beige-500 text-6xl font-extrabold my-10 "
          style={styles.dropShadow}>
          Register
        </Text>
        <Image
          className="h-5 w-5 absolute left-[245] top-[72] opacity-90 rotate-20"
          source={require('../assets/images/paw-print-3.png')}
          alt=""
        />
      </View>
      <View className="justify-center ">
        <View>
          <TextInput
            className="h-12 p-4 block w-80 mt-3 rounded-2xl border border-beige-900 text-beige-900 shadow-sm  bg-beige-100"
            //   onChangeText={setEmail}
            //   value={email}
            style={styles.dropShadow}
            placeholder="First Name"
            placeholderTextColor="#b08968"
          />
          {/* <Image className="h-4 w-5 absolute top-6 right-4" source={mailIcon} /> */}
        </View>
        <View>
          <TextInput
            className="h-12 p-4 block w-80 mt-3 rounded-2xl border border-beige-900 text-beige-900 shadow-sm  bg-beige-100"
            //   onChangeText={setEmail}
            //   value={email}
            style={styles.dropShadow}
            placeholder="Last Name"
            placeholderTextColor="#b08968"
          />
          {/* <Image className="h-4 w-5 absolute top-6 right-4" source={mailIcon} /> */}
        </View>
        <View>
          <TextInput
            className="h-12 p-4 block w-80 mt-3 rounded-2xl border border-beige-900 text-beige-900 shadow-sm  bg-beige-100"
            //   onChangeText={setEmail}
            //   value={email}
            style={styles.dropShadow}
            keyboardType="email-address"
            autoCompleteType="email"
            placeholder="Email"
            placeholderTextColor="#b08968"
          />
          {/* <Image className="h-4 w-5 absolute top-6 right-4" source={mailIcon} /> */}
        </View>

        {/* <Text className="text-sm text-beige-900 mt-1">Password</Text> */}
        <View>
          <TextInput
            className="h-12 p-4 mt-3 mb-8 block w-80 rounded-2xl border border-beige-900 text-beige-900 shadow-sm  bg-beige-100"
            //   onChangeText={setPassword}
            //   value={password}
            style={styles.dropShadow}
            secureTextEntry
            autoCompleteType="password"
            placeholder="Password"
            placeholderTextColor="#b08968"
          />
          {/* <Image
          className="h-5 w-5 absolute top-6 right-4 opacity-80"
          source={lockIcon}
        /> */}
        </View>
        <TouchableOpacity
          //   onPress={handleSignIn}
          style={styles.dropShadow}
          className=" mb-10 items-center justify-center bg-beige-900 w-80 h-12 rounded-2xl border border-beige-900">
          <Text className="text-beige-100 font-semibold text-base">
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.dropShadow}
        className="h-[320] w-[300] relative -bottom-[20px]"
        source={require('../assets/images/Kittens.png')}
        alt=""
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fontText: {
    fontFamily: 'Poppins',
    fontSize: 55,
    fontWeight: '700',
  },
  dropShadow: {
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});