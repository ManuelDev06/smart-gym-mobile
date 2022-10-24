import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeScreen } from './src/screens/SafeScreen';
import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { setNavigator, navigate } from './src/navRef';
import { SigninScreen } from './src/screens/SigninScreen';
import { CustomerScreen } from './src/screens/CustomerScreen';
import ClassesScreen from './src/screens/ClassesScreen';
import ClassScreen from './src/screens/ClassScreen';

export type RootStackParams = {
  SafeScreen:undefined,
  WelcomeScreen: undefined,
  SigninScreen: undefined,
  CustomerScreen: undefined,
  ClassesScreen: undefined,
  ClassScreen: undefined
}

const Stack = createStackNavigator<RootStackParams>();

export default function App() {
  
  return (
    <NavigationContainer
      ref={(navigate) => {setNavigator(navigate)}}
    >
      <Stack.Navigator
        initialRouteName='SafeScreen'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="WelcomeScreen" options={{title: 'Welcome'}} component={WelcomeScreen}/>
        <Stack.Screen name="SigninScreen" options={{title: 'Signin'}} component={SigninScreen}/>
        <Stack.Screen name="CustomerScreen" options={{title: 'Customer'}} component={CustomerScreen}/>
        <Stack.Screen name='ClassesScreen' options={{title: 'Classes'}} component={ClassesScreen}/>
        <Stack.Screen name='ClassScreen' options={{title: 'Class'}} component={ClassScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}