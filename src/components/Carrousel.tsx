import React from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { styles as app} from '../themes/appTheme';
import CardClass  from './CardClass';
import { navigate } from '../navRef';

const Carrousel = () => {
  return (
    <View>
        <Text style={app.subText}>Classes</Text>
        <ScrollView
            horizontal
        >
            <CardClass
              name='Class 1'
              available='1'
              schedule='Monday November 12 2022'
            />
        </ScrollView>
        <TouchableOpacity style={styles.container}
          onPress={() => {navigate('ClassesScreen')}}
        >
          <Text style={styles.text}>View more</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      alignItems:'flex-end',
      marginRight: 20,
      marginTop: 10
    },
    text:{
      color: '#0F87AB',
      fontSize: 18,
      fontWeight: '700',
    }
});

export default Carrousel