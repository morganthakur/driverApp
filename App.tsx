import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Hos from './src/screens/Hos';
const App = () => {

const Stack = createNativeStackNavigator();


  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}  >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Hos" component={Hos} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App

const styles = StyleSheet.create({





})