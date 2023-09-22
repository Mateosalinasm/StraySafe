/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';

import Home from './src/screens/Home';

function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  //   flex: 1
  // };

  return (
    <SafeAreaView className='bg-beige-200'>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        
        contentContainerStyle={{flexGrow: 1}}>
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
