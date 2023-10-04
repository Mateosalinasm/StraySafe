import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const mailIcon = require('../assets/images/mail.png');
const lockIcon = require('../assets/images/lock.png');

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Handle sign in logic here
  };

  return (
    <View className="bottom-10">
      {/* <Text className="text-sm text-beige-900">Email address</Text> */}
      <View>
        <TextInput
          className="h-12 p-4 my-2 block w-80 rounded-2xl border border-beige-900 py-1.5 text-beige-900 shadow-sm  bg-beige-100"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCompleteType="email"
          placeholder="Email"
          placeholderTextColor="#b08968"
        />
        <Image className="h-4 w-5 absolute top-6 right-4" source={mailIcon} />
      </View>

      {/* <Text className="text-sm text-beige-900 mt-1">Password</Text> */}
      <View>
        <TextInput
          className="h-12 p-4 mt-2 block w-80 rounded-2xl border border-beige-900 py-1.5 text-beige-900 shadow-sm  bg-beige-100"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          autoCompleteType="password"
          placeholder="Password"
          placeholderTextColor="#b08968"
        />
        <Image
          className="h-5 w-5 absolute top-6 right-4 opacity-80"
          source={lockIcon}
        />
      </View>
      <View className="items-center mt-5">
        <TouchableOpacity
          onPress={handleSignIn}
          className="items-center justify-center bg-beige-900 w-80 h-12 rounded-2xl border border-beige-900">
          <Text className="text-beige-100 font-semibold text-base">
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default SignInForm;
