import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { navigate } from '../navRef';

const ItemClass = () => {
  return (
    <TouchableOpacity 
        style={styles.container}
        onPress={() => {navigate('ClassScreen')}}
    >
        <Image
            resizeMode='stretch'
            source={{uri: 'https://thumbs.dreamstime.com/z/cartoon-background-gym-room-hand-drawn-fitness-center-interior-fitness-79995047.jpg'}}
            style={styles.image}
        />
        <View style={styles.InfoContainer}>
            <Text style={styles.title}>Class</Text>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.description}>Monday November 13 2022</Text>
            <Text style={styles.description}>Available: 1</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#D2D2D2',
        height: 120,
        borderRadius: 10,
        flexDirection: 'row'
    },
    image: {
        height: '100%',
        width: 150,
        borderRadius: 10
    },
    InfoContainer:{
        marginLeft: 10,
        marginTop: 10
    },
    title:{
        fontSize: 18,
        color: 'black',
        fontWeight: '700'
    },
    description:{
        fontSize:15,
        color: 'black',
        marginTop: 5
    }
});

export default ItemClass