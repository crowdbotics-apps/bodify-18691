import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

export default function Match({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginBottom: 0, top: 50, alignItems: 'flex-end', marginRight: 20}}>
          <Image source= {require("../../assets/close.png")}/>
        </TouchableOpacity>
        
        <View style={{alignItems: "center", marginTop: "50%"}}>
        <Text style={{color: '#fff', fontSize: 95}}>All Set!</Text>
        <Text style={{color: '#fff', fontSize: 30}}>Check out what we </Text>
        <Text style={{color: '#fff', fontSize: 30}}>found for you.</Text>
        </View>

        <View style={styles.btn}>
            <TouchableOpacity><Text style={styles.optionTab}>Show Me My Matches</Text></TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: 'center',
    backgroundColor: "#0078ED"
  },
  optionTab: {
    width: 250, 
    height: 60,
    padding: 20,
    textAlign: "center",
    color: "#0078ED",
    fontSize: 16,
    fontWeight: "normal",
    backgroundColor: "#fff",
    overflow: "hidden",
    borderRadius: 30
  },
  btn: {
      marginTop: "20%",
      alignItems: 'center'
  },


});
