import React, {useState} from 'react'
import {View, Text, TextInput, Button, Alert, Linking, StyleSheet} from 'react-native'
import Register from './Register'

const Login = ({navigation}) => {
    console.log(navigation)

   

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailValidation = (text) => {

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (reg.test(text) === false) {

            console.log("Email is Not Correct");

            setEmail({ email: text })

            return false;
        }
        else {
            setEmail({ email: text })

            console.log("Email is Correct");

            Alert.alert("Email Validated")

            }
        }
   
    const passowrdValidation = (password) =>{
        if(password.lenght < 8){
            Alert.alert("Entered password is correct")
        }else{
            
            Alert.alert("Minimu 8 Charecters allowed")
            return false
        }
    }

    const registerNavigator = () => {
        navigation.navigate('register')
    }

    const forgetNavigator = () => {
        navigation.navigate('forgetpassword')
    }

    const loginbutton = () =>{
        if(email.length > 5 && password.length > 7){
            Alert.alert("Your Details are correct you are redirecting to the another page !!")
            Linking.openURL('https://www.mplussoft.com/')
        }else{
            Alert.alert("Please Enter Valid Details")
            return false
        }
    }   


  return (
    <View>
        <Text style={styles.heading}>Login</Text>

        <Text style={styles.label}>Enter the Email</Text>
        <TextInput autoCapitalize="none" placeholder='Enter the Email' autoCorrect={false} style={styles.input} onChangeText={(email) => emailValidation(email)}
         />

        <Text style={styles.label}>Enter the password</Text>
        <TextInput secureTextEntry autoCapitalize="none" placeholder='Enter Password' autoCorrect={false} style={styles.input} onChangeText={(password) => passowrdValidation(password)} />

        <View style={styles.loginBtn}>
            <View style={styles.ForgetAndSign}>
            <Text onPress={registerNavigator}>Register?</Text>
            <Text> or</Text>
            <Text style={styles.Forget} onPress={forgetNavigator}>forget?</Text>  
            
            </View>
        <Button title='login' onPress={loginbutton}  />
        
        </View>
        {/* <Register /> */}
    </View>
  )
}

const styles = StyleSheet.create({
    heading : {
        fontSize : 20,
        textAlign : 'center',
        margin : 20
    },
    label : {
        fontSize : 15,
        marginLeft : 10
    },
    input : {
        height: 40,
        width: "90%",
        borderColor: 'gray', 
        borderWidth: 1,  
        marginBottom: 10, 
        margin : 10, 
        padding : 5,
        borderRadius : 10
    },
    ForgetAndSign : {
        
        display : 'flex',
        flexDirection : 'row',
        padding : 10,
        justifyContent : 'center'
        
    },
    Forget : {
        marginHorizontal : 10
    },
    loginBtn :{
        margin : 15,
        borderRadius : 20
    }
})

export default Login