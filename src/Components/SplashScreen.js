import React from 'react'
import {View, Text,Image, StyleSheet} from 'react-native'
import splashlogo from '../../assets/Splash1.jpg'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.spalshContainer}>
        <Image source={splashlogo} style={styles.image} />
        <Text>Mplussoft</Text>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        
        justifyContent : 'center',
        alignItems : 'center',
        margin : 'auto'
    },
    spalshContainer : {
        marginTop : '50%',
        justifyContent : 'center',
        alignItems : 'center',
       

    },
    image : {
       justifyContent : 'center',
       margin : 'auto',
        height : 100,
        width : 100,
        borderRadius : 50  
    }
})

export default SplashScreen