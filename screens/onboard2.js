import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import React, {useEffect} from 'react';

const NEXT_SCREEN_NAME = "Onboard3"

export default function Onboard2({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(NEXT_SCREEN_NAME)
    }, 3000)
  }, [])
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/onboard2.png")}
      />
      <View style={{position:'absolute', width: '100%', top: 50, flexDirection: 'row'}}>
        <View style={{backgroundColor: '#F4FEE7', borderColor: '#F4FEE7', borderWidth: 0.5, width: "10%", height: 0}}></View>
        <View style={{backgroundColor: '#fff', borderColor: '#fff', borderWidth: 1, width: "30%", height: 0}}></View>
        <View style={{backgroundColor: '#F4FEE7', borderColor: '#F4FEE7', borderWidth: 0.5, width: "60%", height: 0}}></View>
      </View>

      <View style={{position: 'absolute', top: '30%', alignSelf: 'flex-start', marginLeft: 30}}>
        <Text style={{fontSize: 30, color: '#fff'}}>Not sure</Text>
        <Text style={{fontSize: 70, color: '#fff', lineHeight: 60, marginTop: 10}}>where{"\n"}to start?</Text>
        <Text style={{fontSize: 30, color: '#fff'}}>Feeling{"\n"}overwhelmed?</Text>
      </View>

      <View style={{position:'absolute', top: '88%', flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Onboard5')}><Text style={{color: '#fff', fontSize: 16, marginRight: '40%', marginLeft: '5%'}}>Skip</Text></TouchableOpacity>
          <Text style={{color: '#fff', fontSize: 16, marginLeft: '30%'}}>02
            <Text style={{color: 'darkgrey', fontSize: 16}}>/05</Text>
          </Text>
      </View>
      
      <View style={{position: 'absolute', alignSelf: 'flex-start', top: '55%'}}>
      <TouchableOpacity>
      <Image
        source={require("../assets/arrow.png")}
      />
      </TouchableOpacity>
      </View>
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
