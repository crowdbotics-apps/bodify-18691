import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../splash';
import Onboard1 from '../onboard1';
import Onboard2 from '../onboard2';
import Onboard3 from '../onboard3';
import Onboard4 from '../onboard4';
import Onboard5 from '../onboard5';
import Signup from '../signup';
import SignupSuccess from '../user/signupsuccess';
import Login from '../login';
import Home from '../user/home';



const Stack = createStackNavigator();

  const OnboardStackNavigator = () => {
    return (
      <Stack.Navigator
      screenOptions={{headerShown: false}}
    >
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="Onboard1" component={Onboard1}/>
        <Stack.Screen name="Onboard2" component={Onboard2}/>
        <Stack.Screen name="Onboard3" component={Onboard3}/>
        <Stack.Screen name="Onboard4" component={Onboard4}/>
        <Stack.Screen name="Onboard5" component={Onboard5}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="SignupSuccess" component={SignupSuccess}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
    );
    
  }


  
  

  export { OnboardStackNavigator }
