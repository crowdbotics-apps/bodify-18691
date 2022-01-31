import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideMenu from '../user/sidemenu';
//import TabNavigator from './tabNavigator';
import { OnboardStackNavigator } from './stackNavigator';
import Home from '../user/home';
import SignupSuccess from '../user/signupsuccess';
import ManualMeasurement from '../user/manual_measurement';
import PhotoMeasurement from '../user/photo_measurement';
import Match from '../user/match';
import Loading from '../user/loading';

const Drawer = createDrawerNavigator()
export default function DrawerNavigation() {
    return (
        <Drawer.Navigator initialRouteName="Home"
        screenOptions={{headerShown: false}}
        drawerContent={props => <SideMenu {...props}/>}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="SignupSuccess" component={SignupSuccess} />
        <Drawer.Screen name="ManualMeasurement" component={ManualMeasurement} />
        <Drawer.Screen name="PhotoMeasurement" component={PhotoMeasurement} />
        <Drawer.Screen name="Match" component={Match} />
        <Drawer.Screen name="Load" component={Loading} />
      </Drawer.Navigator>
    )
}
