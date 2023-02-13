import { StyleSheet, Image, View, StatusBar } from 'react-native';
import React, {useEffect} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const NEXT_SCREEN_NAME = "Login"
const NEXT_SCREEN_NAME_ONBOARD = "Onboard1"
const NEXT_SCREEN_HOME = "Home"

export default function Splash({navigation, isLogggedIn}) {
  
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(isLogggedIn ? NEXT_SCREEN_HOME : NEXT_SCREEN_NAME_ONBOARD)
    }, 3000)
  }, [])

  return (
    <>
    <StatusBar hidden />
    
    <View style={styles.container}>
      <Image
        source={require("../assets/Bodify_Home.png")}
        style={styles.imageStyle}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#F2F2F2",
  },
  imageStyle: {
    width: wp("100%"), 
    height: hp("100%")
  }
});
