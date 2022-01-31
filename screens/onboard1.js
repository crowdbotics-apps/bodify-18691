import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import React, {useEffect} from 'react';

const NEXT_SCREEN_NAME = "Onboard2"

export default function Onboard1({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(NEXT_SCREEN_NAME)
    }, 3000)
  }, [])
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/onboard1.png")}
      />
      <View style={{position:'absolute', width: '100%', top: 50, flexDirection: 'row'}}>
        <View style={{backgroundColor: '#F4FEE7', borderColor: '#F4FEE7', borderWidth: 0.5, width: "10%", height: 0}}></View>
        <View style={{backgroundColor: '#fff', borderColor: '#fff', borderWidth: 1, width: "15%", height: 0}}></View>
        <View style={{backgroundColor: '#F4FEE7', borderColor: '#F4FEE7', borderWidth: 0.5, width: "75%", height: 0}}></View>
      </View>

      <View style={{position: 'absolute', top: '15%'}}>
        <Text style={{fontSize: 30, color: '#fff'}}>Need to add</Text>
        <Text style={{fontSize: 70, color: '#fff', lineHeight: 60, marginTop: 10}}>something{"\n"}new</Text>
        <Text style={{fontSize: 30, color: '#fff'}}>to your{"\n"}wardrope?</Text>
      </View>

      <View style={{position:'absolute', top: '88%', flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Onboard5')}><Text style={{color: '#fff', fontSize: 16, marginRight: '40%', marginLeft: '5%'}}>Skip</Text></TouchableOpacity>
          <Text style={{color: '#fff', fontSize: 16, marginLeft: '30%'}}>01
            <Text style={{color: 'darkgrey', fontSize: 16}}>/05</Text>
          </Text>
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
