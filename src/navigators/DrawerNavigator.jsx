import {View, Text} from 'react-native';
import React from 'react';
import Home from '../screens/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardScreen from '../screens/DashboardScreen';
import CustomDrawerComponent from '../components/CustomDrawerComponent';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        // headerBackground: '1px, black',
        headerShown: false,
        headerStyle: {
          borderColor: 'black',
          borderWidth: 1,
        },
        // drawerType: 'slide',
        drawerStyle: {
          width: 200,
          backgroundColor: '#ddb892',
        },
      }}
      drawerContent={props => <CustomDrawerComponent {...props} />}>
      <Drawer.Screen className="bg-black border" name="Dashboard">
        {({navigation}) => <DashboardScreen navigation={navigation} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}
