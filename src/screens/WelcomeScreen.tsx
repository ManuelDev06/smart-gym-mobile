import React, { useRef,useEffect } from 'react'
import { Animated, ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../App';
import Button from '../components/Button';
import LogoAnimated from '../components/LogoAnimated';

interface Props extends StackScreenProps<RootStackParams, 'WelcomeScreen'>{}

export const WelcomeScreen = ({navigation}:Props) => {
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
   

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true
      }
    ).start();
  }, [])

  return (
    <View
      style={styles.container}
    >
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={require('../assets/background.jpeg')}
      >
        <LogoAnimated/>
        <Animated.View
          style={
          {
            ...styles.textContainer,
            opacity: fadeAnim
          }}
        >
          <Text
            style={styles.text}
          >
            Welcome
          </Text>
        </Animated.View>
        <Animated.View
          style={
          {
            ...styles.buttonContainer,
            opacity: fadeAnim
          }}
        >
          <Button
            text='Let´s get start'
            onPress={() => {navigation.navigate('SigninScreen')}}
          />
        </Animated.View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1
    },
    image:{
      flex:1,
      alignItems: 'center'
    },
    textContainer:{
      borderBottomColor: 'white',
      borderBottomWidth: 2,
      top: Dimensions.get('window').height/3
    },
    text:{
      color:'white',
      fontSize: 50,
      fontWeight: '700'
    },
    buttonContainer:{
      top: Dimensions.get('window').height/2
    }
});