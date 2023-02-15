import { StyleSheet, Image, View, StatusBar } from 'react-native';
import React, {useEffect} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import StorageUtils from '../utils/storage';

const NEXT_SCREEN_NAME = "Login"
const NEXT_SCREEN_NAME_ONBOARD = "Onboard1"
const NEXT_SCREEN_HOME = "Home"
const NEXT_SIGNED_UP = "SignupSuccess"

export default function Splash({navigation}) {
  
  useEffect(() => {

    (async () => {
      try {
        const signedUp = await StorageUtils.getSignedUp();
        const firstVisit = await StorageUtils.getFirstVisit();
        const token = await StorageUtils.getAccessToken();
        // console.log(signedUp, firstVisit);

        setTimeout(() => {
          if(token) {
            navigation.navigate(signedUp == 'true' ?  NEXT_SIGNED_UP : NEXT_SCREEN_HOME)
          }else {
            navigation.navigate(firstVisit == 'true' ?  NEXT_SCREEN_NAME_ONBOARD : NEXT_SCREEN_NAME)
          }
        }, 3000)

      } catch (e) {
        console.log('e', e)
      }
    })()

  }, []);
  

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
