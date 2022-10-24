import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { RootStackParams } from '../../App';
import Button from '../components/Button';
import { Input } from '../components/Input';
import Logo from '../components/Logo';

interface Props extends StackScreenProps<RootStackParams, 'SigninScreen'>{}

export const SigninScreen = ({navigation}:Props) => {
  return (
    <SafeAreaView
        style={styles.container}
    >
        <Logo/>
        <View
            style={styles.containerLogin}
        >
            <Text
                style={styles.loginText}
            >
                Login
            </Text>
            <Input
                text='Username'
            />
            <Input
                text='Password'
            />
            <Button
              text='Signin'
              onPress={() => {navigation.navigate('CustomerScreen')}}
            />
        </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerLogin:{
    },
    loginText:{
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
        color: '#0F87AB'
    }
});