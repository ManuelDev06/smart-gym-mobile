import React from 'react'
import { Text, View, SafeAreaView, StyleSheet, Image } from 'react-native';
import Header from '../components/Header';
import { styles as app } from '../themes/appTheme';

const ClassScreen = () => {
  return (
    <SafeAreaView>
      <Header/>
      <View style={styles.container}>
        <Text style={app.title}>Class Name</Text>
        <Image
            resizeMode='stretch'
            source={{uri: 'https://thumbs.dreamstime.com/z/cartoon-background-gym-room-hand-drawn-fitness-center-interior-fitness-79995047.jpg'}}
            style={styles.image}
        />
        <Text style={styles.titleDescription}>Description</Text>
        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Maecenas hendrerit diam vel erat posuere, 
              vitae hendrerit felis mattis. Integer posuere ac 
              sem et tempor. Praesent ornare consectetur mi, 
              tincidunt tristique velit commodo a.
        </Text>
        <Text style={styles.scheduleTitle}>Schedule</Text>
        <Text style={styles.schedule}>September 14th 2022</Text>
        <Text style={styles.schedule}>Monday: 10:00 am</Text>
        <Text style={styles.schedule}>Available: 4</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
      padding: 10
    },
    image: {
      marginTop: 10,
      height:300,
      width: '100%',
      borderRadius: 10
  },
    titleDescription:{
      marginTop: 10,
      color: '#656565',
      fontSize: 25,
      fontWeight: 'bold'
    },
    description:{
      color: '#656565',
      fontSize: 18
    },
    scheduleTitle:{
      fontSize: 20,
      fontWeight: '700',
      color: 'black',
      marginTop: 10
    },
    schedule:{
      fontSize: 20,
      color: 'black',
      marginTop: 5
    },
    available: {
      
    }
});

export default ClassScreen