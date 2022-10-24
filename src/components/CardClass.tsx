import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RootStackParams } from '../../App';
import { navigate } from '../navRef';

interface CardClassProps {
  name: string,
  schedule: string,
  available: string
}


const CardClass = ({name,schedule,available}:CardClassProps) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => {navigate('ClassScreen')}}
    >
      <Image
        resizeMode='stretch'
        style={styles.img}
        source={{
          uri: 'https://thumbs.dreamstime.com/z/cartoon-background-gym-room-hand-drawn-fitness-center-interior-fitness-79995047.jpg'
        }}
      />
      <View style={styles.descriptionContainer}>
       <Text
        style={styles.title}
       >
          {name}
      </Text>
      <Text
        style={styles.description}
       >
          {schedule}
      </Text>
      <Text
        style={styles.description}
       >
          Available: {available}
      </Text> 
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: '#D2D2D2',
      height: 170,
      width: 230,
      borderRadius: 10
    },
    img: {
      width: '100%',
      height: 90,
      borderRadius: 10
    },
    descriptionContainer:{
      padding: 5
    },
    title: {
      color: 'black',
      fontWeight: '800'
    },
    description:{
      color: 'black'
    }
});

export default CardClass