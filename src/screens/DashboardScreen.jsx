import {View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';

export default function DashboardScreen({navigation}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <SafeAreaView className="bg-beige-200 h-screen">
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{flexGrow: 1}}>
        <TouchableOpacity className='px-6 py-4' onPress={() => navigation.toggleDrawer()}>
          <Image
            className="h-[26px] w-[28px] relative"
            source={require('../assets/images/paw-print-2.png')}
            alt=""
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
