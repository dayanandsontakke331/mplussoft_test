import React, {useState} from 'react'
import {View, Text, Button,TextInput, Alert, StyleSheet} from 'react-native'

const ForgetPassword = ({navigation}) => {
    const [mobile, setSetMobile] = useState()
    const [otp, setOtp] = useState()

    const varifyOtp = () => {
            if(mobile.length == 0 || mobile.length == 9 ){
                if(otp.length == 0 | otp.length ==3){
                    Alert.alert("Enter the mobile number and otp")
                    return false
                }
            }else{
                Alert.alert("Varified")
                navigation.navigate('login')
                
            }
    }

  return (
    <View>
        <Text>Forget Pass</Text>

        <View>
            <Text style={styles.label}>Enter Mobile Number</Text>

        <TextInput 
            style={styles.numericInput}
            keyboardType='numeric'
            onChangeText={(text)=> (text)}
            maxLength={10}  
            onChange={(mobile)=> setSetMobile(mobile)}
        />

        <Text style={styles.label}>Enter OTP</Text>

        <TextInput 
            style={styles.numericInput}
            keyboardType='numeric'
            onChangeText={(text)=> (text)}
            maxLength={6} 
            onChange={(otp) => setOtp(otp)}
        />

        <Button title='Varify OTP' onPress={varifyOtp}  />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    label : {
        fontSize : 15,
        marginLeft : 10
    },
    numericInput : {
        height: 40,
        width: "90%",
        borderColor: 'gray', 
        borderWidth: 1,  
        marginBottom: 10, 
        margin : 10, 
        padding : 5,
        borderRadius : 10
    }
})
export default ForgetPassword