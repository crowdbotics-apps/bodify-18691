import { StyleSheet, Image, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import StorageUtils from '../utils/storage';

export default function Onboard5({navigation}) {

  useEffect(() => {
    (async () => {
      try {
        const firstVisit = await StorageUtils.getFirstVisit();
        if (firstVisit == 'true') {
          StorageUtils.setFirstVisit('false');
        }
      } catch (e) {
        console.log('e', e)
        StorageUtils.removeFirstVisit();
      }
    })()
  },[])

  return (
    <>
    <StatusBar hidden />
   
    <View style={styles.container}>
      <Image
        source={require("../assets/O5.png")}
        style={styles.imageStyle}
      />
      
      <View style={{position:'absolute', top: hp('80%')}}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.optionTab}>Get Started</Text></TouchableOpacity>
      </View>
      
     
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#F2F2F2"
  },
  optionTab: {
    width: 244, 
    height: 45,
    paddingHorizontal: 20,
    paddingVertical: 12,
    textAlign: "center",
    color: "#0078ED",
    fontSize: 16,
    fontWeight: "normal",
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    borderRadius: 20,
    fontSize: 18,
    fontWeight: "700"
  },
  imageStyle: {
    width: wp("100%"), 
    height: hp("100%")
  }
});
