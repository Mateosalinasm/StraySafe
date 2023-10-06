import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import RegisterForm from '../components/RegisterForm';

const RegisterScreen = () => {
  return (
    <SafeAreaView className="bg-beige-200 h-screen">
        <RegisterForm />
    </SafeAreaView>
  );
};

export default RegisterScreen;
