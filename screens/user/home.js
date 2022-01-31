import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import React, {useState} from 'react';
import Header from './header';

export default function Home({navigation}) {
  return (
      <View style={styles.container}>
        <SafeAreaView>
             <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.signText}>Brand{"\n"}Partners </Text>
            <Text style={{fontSize: 16, color: '#979797', marginLeft: 20}}>We work with a lot of partners and are {"\n"}expanding daily. Want to know which brands {"\n"}are right for you?</Text>
            <Text style={{fontSize: 16, color: '#979797', marginLeft: 20, marginTop: 10}}>Click below to get started finding the best {"\n"}brands for your body.</Text>

            <View style={styles.btn}>
                    <TouchableOpacity onPress={() => navigation.navigate("ManualMeasurement")}><Text style={styles.optionTab}>Tailor your Fit</Text></TouchableOpacity>
            </View>

            <View style={{marginTop: 40, marginLeft: 20, marginRight: 20}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Image source={require("../../assets/tommy.png")} style={{width: "50%"}}/>
                    <View style={{marginTop: 40, width: "50%", alignItems: "center"}}>
                        <Text style={{fontSize: 24}}>Tommy {"\n"}Jeans</Text>
                        <TouchableOpacity><Text style={styles.underline}>See {"\n"}more</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <View style={{marginTop: 40, width: "50%", alignItems: "center"}}>
                        <Text style={{fontSize: 24}}>Zara {"\n"}Clothes</Text>
                       <TouchableOpacity><Text style={styles.underline}>See {"\n"}more</Text></TouchableOpacity>
                    </View>
                    <Image source={require("../../assets/zara.png")} style={{width: "50%"}}/>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Image source={require("../../assets/levi.png")} style={{width: "50%"}}/>
                    <View style={{marginTop: 40, width: "50%", alignItems: "center"}}>
                        <Text style={{fontSize: 24}}>Tommy {"\n"}Jeans</Text>
                        <TouchableOpacity><Text style={styles.underline}>See {"\n"}more</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
                

            </ScrollView>
            
        </SafeAreaView>
     </View>
  );
}

const styles = StyleSheet.create({
    signText: {
        marginLeft: 20,
        marginTop: 40,
        marginBottom: 40,
        fontSize: 45,
        color: "#0078ED"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'flex-start',
        backgroundColor: "#fff"
      },
      label: {
        //width: 300,
        height: 25,
        fontSize: 16,
        color: '#979797',
    },
    underline: {
        textDecorationLine: 'underline',
        color: '#8C8C8C',
        fontSize: 16,
        right: 20,
        //height: 25
    },

    inputView: {
        marginTop: 10,
        marginBottom: 40,
        marginLeft: 20
    },

    TextInput: {
        borderColor: '#fff',
        borderBottomColor: '#979797',
        borderWidth: 1,
        fontSize: 20,
        width: '100%',
        height: 30,
        color: "#000"
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 15,
        marginLeft: 20
    },
    optionTab: {
        width: 250, 
        height: 60,
        padding: 20,
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        fontWeight: "normal",
        backgroundColor: "#0078ED",
        overflow: "hidden",
        borderRadius: 30
      },
      btn: {
          marginTop: 40,
          alignItems: 'center'
      },

})
