import React, {useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import SplashScreen from './src/Components/SplashScreen';
import Login from './src/Components/Login';
import Register from './src/Components/Register';
import { ScreenStackHeaderLeftView } from 'react-native-screens';
import ForgetPassword from './src/Components/ForgetPassword';

const Stack = createNativeStackNavigator();


const App = () => {

  const [showSplashScreen, setShowSplashScreen] = useState(true)

  useEffect(() => {
    
    setTimeout(() => {

      setShowSplashScreen(false)

    }, 5000);
   
  }, [])

  return (
  
    // <View>
    //   <Text>
    //     ijsjilaeflij
    //   </Text>
    // </View>


      <NavigationContainer>
       
        <Stack.Navigator>
        {
          showSplashScreen ? <Stack.Screen name='splashcreen'  component={SplashScreen} /> : null
        }
        <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='splashscreen' component={SplashScreen} />  
          <Stack.Screen name='register' component={Register} />
          <Stack.Screen name='forgetpassword' component={ForgetPassword} />

        </Stack.Navigator>


      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop : 30,
   
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
});

export default App;