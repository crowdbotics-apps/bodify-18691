import { StyleSheet, Image, View } from 'react-native';
import React, {useEffect} from 'react';

const NEXT_SCREEN_NAME = "Login"
const NEXT_SCREEN_HOME = "Home"

export default function Splash({navigation, isLogggedIn}) {
  
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(isLogggedIn ? NEXT_SCREEN_HOME : NEXT_SCREEN_NAME)
    }, 3000)
  }, [])
  
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Bodify_Home.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#F2F2F2"
  }
});
