import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../themes/LogoTheme';

const Logo = () => {
  return (
    <View>
         <Text
            style={styles.LogoFirst}
        >
            SMART
        </Text>
        <Text
            style={styles.LogoSecond}
        >
            GYM
        </Text>
    </View>
  )
}

export default Logo