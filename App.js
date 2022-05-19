import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'


import Navigation from './utils/navigation'
import { store } from './utils/redux/store'
import { setupHttpConfig } from './utils/http'
import { AppContext } from './utils/context';
import { StatusBar } from 'react-native';


const initialState = {
  // set initial state here
};

const App = () => {
  useEffect(() => {
    setupHttpConfig()
  }, [])

  return (
    <AppContext.Provider value={initialState}>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </AppContext.Provider>
  )
}

export default App;  