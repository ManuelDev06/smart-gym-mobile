import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Logo from '../components/LogoAnimated';

export const SafeScreen = () => {
  return (
    <View
      style={styles.container}
    >
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={require('../assets/background.jpeg')}
      >
        <Logo/>
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
      alignItems: 'center',
      justifyContent: 'center'
    }
});