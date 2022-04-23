import React, {useState} from 'react'
import {View, Text, TextInput, SafeAreaView,TouchableOpacity,Alert, StyleSheet} from 'react-native'
import DatePicker from 'react-native-datepicker';
import style from 'react-native-datepicker/style';
import { Button } from 'react-native-web';

const Register = ({navigation}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dob, setDob] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword] = useState('')

    const [date, setDate] = useState('09-10-21')

    const registerHandler = () => {
        if(firstName.length && lastName.length == 3){
            if(dob.length && password.length == 6){
                Alert.alert("Your all details should be grter than six charecters")
            }
        }else{
            Alert.alert('You are Redirecting to the Login')
            navigation.navigate('login')
        }
    }

  return (
    <View>

        <Text style={styles.registerHeading}>Register</Text>

        <View style={styles.BirthDate}>
            <Text style={styles.label}>Enter the First Name</Text>
            <TextInput placeholder='Enter the First Name' style={styles.input} />

            <Text style={styles.label}>Enter The Last Name</Text>
            <TextInput placeholder='Enter the Last Name' style={styles.input} />

            <View>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.text}>Birth Date :</Text>
                    <DatePicker
                    style={styles.datePickerStyle}
                    date={date}
                    mode="date"
                    placeholder="select date"
                    format="DD/MM/YYYY"
                    minDate="01-01-1900"
                    maxDate="01-01-2000"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                        position: 'absolute',
                        right: -5,
                        top: 4,
                        marginLeft: 0,
                        },
                        dateInput: {
                            borderColor : "gray",
                            alignItems: "flex-start",
                            borderWidth: 0,
                            borderBottomWidth: 1,
                        },
                        placeholderText: {
                            fontSize: 17,
                            color: "gray"
                        },
                        dateText: {
                            fontSize: 17,
                        }
                        }}
                        onDateChange={(date) => {
                        setDate(date);
                        }}
                    />
                    </View>
                </SafeAreaView>
                </View>
                    
                <Text style={styles.label}>Set Passowrd</Text>
                <TextInput placeholder='Enter the passord' secureTextEntry  style={styles.input} />

                <Text style={styles.label}>Set Confirm Password</Text>
                <TextInput placeholder='Confirm  passord' secureTextEntry  style={styles.input} />

                <TouchableOpacity
                    style={styles.button}
                    
                    >
                    <Text onPress={registerHandler}>Register</Text>
                </TouchableOpacity>
                       
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    registerHeading : {
      fontSize : 25,
      textAlign : 'center',
      marginBottom : 20
      
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
    datePickerStyle: {
        width: 230,
      },
      text: {
        textAlign: 'left',
        width: 230,
        fontSize: 16,
        color : "#000"
      },
      BirthDate : {
          marginLeft : 30
      },
      button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        margin : 20
      }
})

export default Register