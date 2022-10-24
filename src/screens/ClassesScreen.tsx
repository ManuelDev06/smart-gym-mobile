import React from 'react'
import { Text, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ItemClass from '../components/ItemClass';
import { styles as app} from '../themes/appTheme';

const ClassesScreen = () => {
  return (
    <SafeAreaView>
        <Header/>
        <View
            style={{padding: 10}}
        >
            <Text style={app.subText}>Classes</Text>
            <ScrollView style={styles.list}>
                <ItemClass/>
            </ScrollView>
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    list:{
        marginTop: 10
    }
});

export default ClassesScreen
