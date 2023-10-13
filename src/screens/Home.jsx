import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Banner from '../components/Banner';
import Button from '../components/Button';
import SwipeButton from '../components/SwipeButton';
import {SafeAreaView, ScrollView} from 'react-native';

const Home = ({navigation}) => {
  return (
    <SafeAreaView className="bg-beige-200">
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{flexGrow: 1}}> */}
      <View className="bg-beige-200 h-screen justify-center ">
        <View className="items-center ">
          <Image
            className=" w-52 h-12 -rotate-20 absolute -top-12 left-20  justify-center"
            source={require('../assets/images/straysafe-quote.png')}
          />
          <Image
            style={styles.dropShadow}
            className="m-6 w-80 h-96 justify-center "
            source={require('../assets/images/pitbull-puppy.png')}
          />
        </View>
        <Banner />
        <View className='items-center top-1'>
          <Text className="text-beige-900 text-[13px] font-[Poppins]">
            Bringing strays home
          </Text>
        </View>
        <View className="flex-row justify-around top-16 relative">
          <SwipeButton navigation={navigation} />
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dropShadow: {
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 6},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

export default Home;
