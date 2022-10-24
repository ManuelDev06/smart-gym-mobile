import React, {useEffect, useRef} from 'react'
import { View, Text, Dimensions, Animated } from 'react-native';
import { styles } from '../themes/LogoTheme';


const LogoAnimated = () => {
  const heightWindows =  Dimensions.get('window').height/2.5;
  const topAnim = useRef(new Animated.Value(heightWindows)).current; 

    useEffect(()=>{
        Animated.timing(
            topAnim,
            {
                toValue:Dimensions.get('window').height/6,
                duration:2000,
                useNativeDriver: false
            }
          ).start();
    },[])

  return (
    <Animated.View style={{
        top:topAnim
    }}>
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
    </Animated.View>
  )
}

export default LogoAnimated