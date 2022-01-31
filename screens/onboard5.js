import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Onboard5({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/onboard1.png")}
      />
      <View style={{position:'absolute', width: '100%', top: 50, flexDirection: 'row'}}>
        <View style={{backgroundColor: '#F4FEE7', borderColor: '#F4FEE7', borderWidth: 0.5, width: "10%", height: 0}}></View>
        <View style={{backgroundColor: '#fff', borderColor: '#fff', borderWidth: 1, width: "80%", height: 0}}></View>
        <View style={{backgroundColor: '#F4FEE7', borderColor: '#F4FEE7', borderWidth: 0.5, width: "10%", height: 0}}></View>
      </View>

      <View style={{position: 'absolute', top: '15%', alignSelf: 'flex-start', marginLeft: 30}}>
      <Text style={{fontSize: 30, color: '#fff'}}>Ready to get</Text>
        <Text style={{fontSize: 70, color: '#fff', lineHeight:70, marginTop: 0}}>started?</Text>
        <Text style={{fontSize: 30, color: '#fff'}}>Still curious?{"\n"}Tap on learn {"\n"}more.</Text>
      </View>

      <View style={{position:'absolute', top: '80%'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.optionTab}>Get Started</Text></TouchableOpacity>
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
  },
  optionTab: {
    width: 250, 
    height: 60,
    padding: 20,
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "normal",
    backgroundColor: "#F68974",
    overflow: "hidden",
    borderRadius: 30
  }
});
