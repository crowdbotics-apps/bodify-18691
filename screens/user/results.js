import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import React, {useState} from 'react';
import Header from './header';

export default function Results({navigation}) {
    const [show, setShow] = useState(true)
    const [show1, setShow1] = useState(false)

    const handleToggle = (val) => {
        if (val == 'fit') {
            setShow(!show)
            setShow1(!show1)
        } else {
            setShow1(!show1)
            setShow(!show)
        }
    }
  return (
      <View style={styles.container}>
        <SafeAreaView>
             <Header />
             <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                 <View>
                <TouchableOpacity onPress={() => handleToggle('fit')}><Text style={{marginLeft: 20, color: show ? '#0078ED' : '#000'}}>Perfect Fit</Text></TouchableOpacity>
                {show && (<View
              style={{
                backgroundColor: "#0078ED",
                borderColor: "#0078ED",
                borderWidth: 1,
                width: 6,
                height: 6,
                borderRadius: 20,
                alignSelf:'center',
                marginLeft: 20,
                marginTop: 5
              }}
            />)}</View>
            <View>
                <TouchableOpacity onPress={() => handleToggle('brand')}><Text style={{marginRight: 20, color: show1 ? '#0078ED' : '#000'}}>Brand Partners</Text></TouchableOpacity>
                {show1 && (<View
              style={{
                backgroundColor: "#0078ED",
                borderColor: "#0078ED",
                borderWidth: 1,
                width: 6,
                height: 6,
                borderRadius: 20,
                alignSelf:'center',
                marginRight: 20,
                marginTop: 5
              }}
            />)}</View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>

{show && (
            <View>
            <Text style={styles.signText}>Perfect Fit </Text>
            <Text style={{fontSize: 16, color: '#979797', marginLeft: 20, marginTop: 10}}>We think you'll love these, {"\n"}but we may be a little biased...</Text>
            
            <View style={{marginTop: 40, marginLeft: 20, marginRight: 20}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Image source={require("../../assets/fit-jean.png")} style={{width: "100%"}}/>
                </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                <TouchableOpacity ><Text style={{marginLeft: 20, fontSize: 24}}>Wide {"\n"}Leg Jeans</Text></TouchableOpacity>
                <TouchableOpacity ><Text style={{marginTop: 35, color: '#8C8C8C'}}>Zara</Text></TouchableOpacity>
                <TouchableOpacity ><Text style={{marginTop: 35, color: '#8C8C8C'}}>Size 6</Text></TouchableOpacity>
                <TouchableOpacity ><Text style={{marginRight: 20, marginTop: 35, color: '#8C8C8C'}}>Blue </Text></TouchableOpacity>
            </View>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: 10
                }}
                />

            <View style={{marginTop: 40, marginLeft: 20, marginRight: 20}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Image source={require("../../assets/wide-jean.png")} style={{width: "50%"}}/>
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
                    <Image source={require("../../assets/green-jean.png")} style={{width: "50%"}}/>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Image source={require("../../assets/skinny-jean.png")} style={{width: "50%"}}/>
                    <View style={{marginTop: 40, width: "50%", alignItems: "center"}}>
                        <Text style={{fontSize: 24}}>Tommy {"\n"}Jeans</Text>
                        <TouchableOpacity><Text style={styles.underline}>See {"\n"}more</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
            </View>
       )}     
           
{show1 && (
    <View>
            <Text style={styles.signText}>Brand Partners </Text>
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
            </View>
                )}

            </ScrollView>
            
        </SafeAreaView>
     </View>
  );
}

const styles = StyleSheet.create({
    signText: {
        marginLeft: 20,
        marginTop: 20,
        fontSize: 40,
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
