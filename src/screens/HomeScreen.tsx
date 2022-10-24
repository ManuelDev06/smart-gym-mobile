import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import ButtonMenu from '../components/ButtonMenu';
import Carrousel from '../components/Carrousel';
import Header from '../components/Header';
import { styles } from '../themes/appTheme';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Header/>
        <View
            style={styles.container}
        >
            <Carrousel/>
            <ButtonMenu
                name='Benchmark'
                description='Description'
            />
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen
