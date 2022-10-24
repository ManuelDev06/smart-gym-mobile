import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, Dimensions, Image, View } from 'react-native';


interface ButtonMenuProps {
    name: string,
    description: string
}

const ButtonMenu = ({name,description}:ButtonMenuProps) => {


  return (
    <TouchableOpacity
        style={styles.container}
    >
        <Image
            resizeMode='stretch'
            style={styles.img}
            source={require('../assets/womangym.png')}
        />
        <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#0F87AB',
        width: Dimensions.get('window').width-20,
        height: 100,
        borderRadius: 10,
        flexDirection:'row',
        marginTop: 15
    },
    img:{
        width: 100,
        height: 100
    },
    title:{
        color: 'white',
        fontSize: 20,
        marginTop: 5,
        fontWeight: '800'
    },
    description:{
        marginTop: 5,
        color: 'white'
    }
});

export default ButtonMenu