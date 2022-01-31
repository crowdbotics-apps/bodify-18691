import 'react-native-gesture-handler';
import React, { useContext, useEffect, useMemo, useState, useReducer } from "react"
import { Provider } from "react-redux"
import { NavigationContainer } from "@react-navigation/native"
import {
  configureStore,
  createReducer,
  combineReducers
} from "@reduxjs/toolkit"

//import { screens } from "@screens"
import { modules, reducers, hooks, initialRoute } from "@modules"
import { connectors } from "@store"
import { AuthContext } from "./utils/context"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalOptionsContext, OptionsContext, getOptions } from "@options"
//import CustomNavigation from "./screens/navigation/customNavigation"
import { ActivityIndicator, View } from "react-native";
import { OnboardStackNavigator } from "./screens/navigation/stackNavigator";
import DrawerNavigation from './screens/navigation/drawerNavigation';
//import { BASE_URL } from "./utils/http";



const getStore = (globalState) => {
  const appReducer = createReducer(globalState, _ => {
    return globalState
  })

  const reducer = combineReducers({
    app: appReducer,
    ...reducers,
    ...connectors
  })

  return configureStore({
    reducer: reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
  })
}

const App = () => {
  const global = useContext(GlobalOptionsContext)
  const store = getStore(global)
  const screenOptions = { headerShown: false };
  const [isLoading, setIsLoading] = useState(true)
  const initialLoginState = {
    isLoading: true,
    email: null,
    userToken: null,
  }

  const loginReducer = (prevState, action) => {
    switch(action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        }
      case 'LOGIN':
        return {
          ...prevState,
          user: action.id,
          userToken: action.token,
          isLoading: false
        }
      case 'LOGOUT':
        return {
          ...prevState,
          user: null,
          userToken: null,
          isLoading: false
        }
      case 'REGISTER':
        return {
          ...prevState,
          user: action.id,
          userToken: action.token,
          isLoading: false
        }
    }
  }

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState)
  const [user, setUser] = useState('')

  const authContext = useMemo(() => {
  return {
    signIn: async (token, data) => {
      let userToken
        try {
          userToken = token
          const userData = JSON.stringify(data)
          await AsyncStorage.setItem('userToken', userToken)
          if(data){
       
           // fetch(`${BASE_URL}/api/users/${data.id}`)
           // .then(response => response.json())
          //  .then(json => setUser(json))
            
        }
          dispatch({ type: 'LOGIN', id: data.id, token: userToken})
        } catch(e) {
          console.log(e)
        }
    },
    signUp: () => {
      //setUserToken('token')
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken')
        await AsyncStorage.removeItem('user')
        dispatch({ type: 'LOGOUT'})
      } catch(e) {
        console.log(e)
      }
    },
    user,
    setUser
  }
}, [user])
  
  useEffect(() => {
    setTimeout(async() => {
      let userToken
      userToken = null
      let id 
      try {
        userToken = await AsyncStorage.getItem('userToken')
        if(user == '') {
          const jsonValue = await AsyncStorage.getItem('user')
          id = setUser(JSON.parse(jsonValue))
          //console.log('empty')
        }
        
      } catch(e) {
        // error reading value
        console.log(e)
      }
      dispatch({ type: 'LOGIN', id: id, token: userToken})
      
    
    }, 1000)
    if (user) {
      const storeData = async (user) => {
        try {
          const userData = JSON.stringify(user)
          await AsyncStorage.setItem('user', userData)
        } catch (e) {
          // saving error
        }
      }
      storeData(user)
      //console.log(user)
    }
  }, [user])
  //console.log(user)
    

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
        <ActivityIndicator size="large" />
      </View>
    )
  }
  

  let effects = {}
  hooks.map(hook => {
    effects[hook.name] = hook.value()
  })

  return (
    <AuthContext.Provider value={authContext}>
    <Provider store={store}>
      <NavigationContainer>
      { loginState.userToken ? (
          <DrawerNavigation/>
        ) : (
        <OnboardStackNavigator/>
        )}
      </NavigationContainer>
    </Provider>
    </AuthContext.Provider>
  )
}

export default App
