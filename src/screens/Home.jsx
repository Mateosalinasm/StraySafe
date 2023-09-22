import React from 'react';
import {View, Text, Image} from 'react-native';
import Banner from '../components/Banner';
import Button from '../components/Button';
import SwipeButton from '../components/SwipeButton';

const Home = () => {
  return (
    <View className="bg-beige-200 h-screen justify-center">
      <View className="items-center ">
        <Image
          className=" w-52 h-12 -rotate-20 absolute -top-12 left-20 justify-center"
          source={require('../assets/images/straysafe-quote.png')}
        />
        <Image
          className="m-6 w-80 h-96 justify-center"
          source={require('../assets/images/pitbull-puppy.png')}
        />
      </View>
      <Banner />
      <View className='flex-row justify-around mt-4'>
        <SwipeButton />
      </View>
    </View>
  );
};

export default Home;
