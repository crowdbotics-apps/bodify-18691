/* eslint-disable no-unused-vars */
import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useDispatch, useSelector } from 'react-redux';
import { OnboardStackNavigator } from '../screens/navigation/stackNavigator';
import DrawerNavigation from '../screens/navigation/drawerNavigation';
import StorageUtils from './storage'
import { addTokenToHttp } from './http';
import { setUser } from './redux/auth/actions';
import { getProfile } from './redux/app/actions';


const isReadyRef = React.createRef();
const navigationRef = React.createRef();

const Stack = createStackNavigator()

const Navigation = () => {
  const dispatch = useDispatch();

  let token = null;
  const [isMounted, setIsMounted] = useState(null);
  const accessToken = useSelector((state) => state.Auth.accessToken);
  const profile = useSelector((state) => state.App.profile)
  
  useEffect(() => () => {
    isReadyRef.current = false
  }, []);
  
  useEffect(() => {
    (async () => {
      try {
        token = await StorageUtils.getAccessToken();
        const email = await StorageUtils.getUser();
        dispatch(setUser(email, token))
        addTokenToHttp(token)
        if (token) {
          dispatch(getProfile())
        }
      } catch (e) {
        console.log('e', e)
      }
    })()
    
    setTimeout(() => {
      setIsMounted(true)
    }, 2000);
  }, [])

  const isLogggedIn = Boolean(accessToken || token)

  return (
    <NavigationContainer >
      {isLogggedIn || !isMounted ? (
        <DrawerNavigation/>
      ) : (
        <OnboardStackNavigator/>
      )
      }
    </NavigationContainer>
  )
};
export function navigate (name, params) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
}
export default Navigation;