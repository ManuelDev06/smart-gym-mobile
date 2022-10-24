import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';
import ProfileScreen from './ProfileScreen';
import { Text } from 'react-native';


const Tab = createBottomTabNavigator();
export const CustomerScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route})=>({
        headerShown:false,
        tabBarStyle:{backgroundColor: '#656565', borderTopLeftRadius: 15, borderTopRightRadius: 15},
        lazy: true,
        tabBarIcon: ({focused}) => {
          let iconName='';
          switch(route.name){
            case 'Home':
              iconName = 'home';
              break;
            case 'Chat':
              iconName = 'message1'
              break;
            case 'Profile':
              iconName = 'user'
              break;
          }
          return <AntDesign name={iconName} size={25} color={focused ?'#12A3CE' :'white'}/>;
        },
        tabBarLabel: ({focused}) => {
          return <Text style={{color: focused ?'#12A3CE' :'white'}}>{route.name}</Text>
        }
      })}
      
    >
      <Tab.Screen name='Home' component={HomeScreen}/>
      <Tab.Screen name='Chat' component={ChatScreen}/>
      <Tab.Screen name='Profile' component={ProfileScreen}/>
    </Tab.Navigator>
  )
}
