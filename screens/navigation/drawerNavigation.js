import React, { useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideMenu from '../user/sidemenu';
//import TabNavigator from './tabNavigator';
// import { OnboardStackNavigator } from './stackNavigator';
import Splash from '../splash';
import Home from '../user/home';
import SignupSuccess from '../user/signupsuccess';
import ManualMeasurement from '../user/manual_measurement';
import PhotoMeasurement from '../user/photo_measurement';
import Match from '../user/match';
import Loading from '../user/loading';
import Results from '../user/results';
import Profile from '../user/profile';
import PasswordReset from '../user/password-reset';
import Closet from '../user/closet';
import Privacy from '../user/privacy';
import Terms from '../user/terms';
import About from '../user/about';
import FAQ from '../user/faq';

const NEXT_SCREEN_HOME = "Home"

const Drawer = createDrawerNavigator()
export default function DrawerNavigation() {

    return (
        <Drawer.Navigator initialRouteName={NEXT_SCREEN_HOME}
        screenOptions={{headerShown: false}}
        drawerContent={props => <SideMenu {...props}/>}>
        <Drawer.Screen name="Splash" component={Splash} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="SignupSuccess" component={SignupSuccess} />
        <Drawer.Screen name="ManualMeasurement" component={ManualMeasurement} />
        <Drawer.Screen name="PhotoMeasurement" component={PhotoMeasurement} />
        <Drawer.Screen name="Match" component={Match} />
        <Drawer.Screen name="Load" component={Loading} />
        <Drawer.Screen name="Results" component={Results} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="PasswordReset" component={PasswordReset} />
        <Drawer.Screen name="Closet" component={Closet} />
        <Drawer.Screen name="Privacy" component={Privacy} />
        <Drawer.Screen name="Terms" component={Terms} />
        <Drawer.Screen name="FAQ" component={FAQ} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    )
}
