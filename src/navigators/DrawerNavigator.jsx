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
        headerTitle: '',
        headerTintColor: '#7f5539',
        headerLeftContainerStyle: {
          paddingLeft: 10,
        },
        headerStyle: {
          backgroundColor: '#e6ccb2',
        },
        drawerType: 'slide',
        drawerStyle: {
          width: 210,
          backgroundColor: '#ddb892',
        },
      }}
      drawerContent={props => <CustomDrawerComponent {...props} />}>
      <Drawer.Screen className="bg-black border" name="DashboardDrawerScreen">
        {({navigation}) => <DashboardScreen navigation={navigation} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}
