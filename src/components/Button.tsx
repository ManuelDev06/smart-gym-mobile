import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ButtonProps {
    text: string,
    onPress: Function
}

const Button = ({text,onPress}:ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {onPress()}}
    >
        <Text
          style={styles.text}
        >
          {text}
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: '#12A3CE',
      width: 300,
      height: 55,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20
    },
    text:{
      fontSize: 20,
      color: 'white',
      fontWeight: '700'
    }
});

export default Button