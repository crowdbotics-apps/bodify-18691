import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import React, {useEffect} from 'react';


export default function SignupSuccess({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/onboard1.png")}
      />
    <View style={{position:'absolute', top: '6%', right: '10%'}}>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
     <Image
        source={require("../../assets/nav.png")}
      />
      </TouchableOpacity>
      </View>

      <View style={{position: 'absolute', top: '10%', alignSelf: 'center', marginLeft: 30}}>
          <Text style={{fontSize: 40, color: '#fff', alignSelf: 'center'}}>Account</Text>
          <Text style={{fontSize: 40, color: '#fff', alignSelf: 'center'}}>successfully</Text>
          <Text style={{fontSize: 40, color: '#fff', alignSelf: 'center'}}>created!</Text>
        <Text style={{fontSize: 23, color: '#fff', marginTop: 20, alignSelf: 'center'}}>Now, let's find the best </Text>
        <Text style={{fontSize: 23, color: '#fff', alignSelf: 'center'}}>brands for you!!!</Text>
      </View>

      <View style={{position:'absolute', top: '80%'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.optionTab}>Get My Measurements</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={{alignSelf: 'center', marginTop: 20, color: '#fff'}}>Skip</Text></TouchableOpacity>
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
