import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface InputProps {
    text: string
}

export const Input = ({text}:InputProps) => {
  return (
    <View
        style={styles.container}
    >
        <Text
            style={styles.text}
        >
            {text}
        </Text>
        <TextInput
            style={styles.input}
        />
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        marginBottom: 15
    },
    text:{
        fontSize: 17,
        color: '#656565'
    },
    input:{
        borderBottomWidth: 1,
        borderColor: '#656565',
        height: 30,
    }
});