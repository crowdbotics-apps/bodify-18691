import { StyleSheet, Image, View, Text, TouchableOpacity, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';

const NEXT_SCREEN_NAME = "Onboard5"

export default function Onboard4({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(NEXT_SCREEN_NAME)
    }, 3000)
  }, [])
  return (
    <>
    <StatusBar hidden />
    
    <View style={styles.container}>
      <Image
        source={require("../assets/O4.png")}
        style={styles.imageStyle}
      />

      <View style={{position:'absolute', top: hp('90%'), flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Onboard5')}><Text style={{color: '#fff', fontSize: 16, marginRight: '40%', marginLeft: '5%'}}>Skip</Text></TouchableOpacity>
          <Text style={{color: '#fff', fontSize: 16, marginLeft: '30%'}}>04
            <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: '400'}}>/05</Text>
          </Text>
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
  imageStyle: {
    width: wp("100%"), 
    height: hp("100%")
  }
});
