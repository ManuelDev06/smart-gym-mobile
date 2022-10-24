import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { styles as logo} from '../themes/LogoMiniTheme';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
                <Text
            style={logo.LogoFirst}
        >
            SMART
        </Text>
        <Text
            style={logo.LogoSecond}
        >
            GYM
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      alignItems: 'flex-start',
      borderBottomColor: '#E5E5E5',
      borderBottomWidth: 3,
      height: 50,
      justifyContent: 'center'
    }
});

export default Header