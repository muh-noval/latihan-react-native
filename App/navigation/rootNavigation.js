import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Detail from '../screens/detail';
import Flatlist from '../screens/flatlist';
import PickUp from '../screens/Minta PickUp';
import Profil from '../screens/Profil';
import CekStatus from '../screens/Cek Status';

const Stack = createNativeStackNavigator();

const RootNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{title: 'Beranda'}}
      />
      <Stack.Screen
        name="DetailScreen"
        component={Detail}
        options={{title: 'Detail Kota'}}
      />
      <Stack.Screen
        name="FlatlistScreen"
        component={Flatlist}
        options={{title: 'Daftar Kota'}}
      />
      <Stack.Screen
        name="PickUpScreen"
        component={PickUp}
        options={{title: 'Daftar PickUp'}}
      />
      <Stack.Screen
        name="ProfilScreen"
        component={Profil}
        options={{title: 'Galeri'}}
      />
      <Stack.Screen
        name="StatusScreen"
        component={CekStatus}
        options={{title: 'Cek Status'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigation;
