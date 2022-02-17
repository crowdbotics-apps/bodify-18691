import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import React, {useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header2 from './header2';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {Picker} from '@react-native-picker/picker';
import { BASE_URL } from '../../utils/http';

export default function Closet({navigation}) {
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [drop, setDrop] = useState(false)
    const pickerRef = useRef()

    const handleToggle = (val) => {
        if (val == '1') {
            setShow(!show)
        } else {
            setShow1(!show1)
        }
    }
    
  return (
      <View style={{flex: 1, backgroundColor: "#fff"}}>
        <SafeAreaView>
             <Header2 />
             <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.signText}>My Closet</Text>
            <Text style={{fontSize: 16, color: '#979797', marginLeft: 20, marginTop: 10}}>
                Here's everything you've purchased{"\n"}through Bodify!</Text>
                
                <View style={{marginTop: 20}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20, marginBottom: 10}}>
                            <Image source={require("../../assets/Rectangle85.png")} />
                            <View style={{marginTop: 0}}>
                                <Text style={{fontSize: 18}}>Previews Purchase</Text>
                                <TouchableOpacity><Text style={styles.underline}>RATE THIS ITEM</Text></TouchableOpacity>
                                <View style={{flexDirection: 'row', marginTop: 5}}>
                                <Image source={require("../../assets/filled-star.png")} style={{marginRight: 5}} />
                                <Image source={require("../../assets/filled-star.png")} style={{marginRight: 5}}/>
                                <Image source={require("../../assets/filled-star.png")} style={{marginRight: 5}}/>
                                <Image source={require("../../assets/filled-star.png")} style={{marginRight: 5}}/>
                                <Image source={require("../../assets/unfilled-star.png")} style={{marginRight: 5}}/>
                                </View>
                                { show && (
                                <View style={{marginTop: 5}}>
                                <Text style={{fontSize: 14, color: '#979797'}}>Snag up to 45 points by {'\n'}leaving a review.</Text>
                                <Text style={{fontSize: 14, color: '#979797', textDecorationLine: 'underline'}}>Click here for more {'\n'}details!</Text>
                                </View>
                                )}
                            </View>
                            <View>
                            <Icon name="angle-down" size={30} color="#000" 
                                style={{
                                    alignSelf: "center",
                                    right: '10%',
                                    position: "absolute"
                                    }}
                                    onPress={() => handleToggle('1')}
                                    />
                            </View>
                        </View>
                        <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            marginLeft: 20,
                            marginRight: 20,
                        }}
                        />
                </View>

                <View style={{marginTop: 20}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20, marginBottom: 10}}>
                            <Image source={require("../../assets/Rectangle86.png")} />
                            <View style={{marginTop: 0}}>
                                <Text style={{fontSize: 18}}>Previews Purchase</Text>
                                <TouchableOpacity><Text style={styles.underline}>RATE THIS ITEM</Text></TouchableOpacity>
                                <View style={{flexDirection: 'row', marginTop: 5}}>
                                <Image source={require("../../assets/unfilled-star.png")} style={{marginRight: 5}} />
                                <Image source={require("../../assets/unfilled-star.png")} style={{marginRight: 5}}/>
                                <Image source={require("../../assets/unfilled-star.png")} style={{marginRight: 5}}/>
                                <Image source={require("../../assets/unfilled-star.png")} style={{marginRight: 5}}/>
                                <Image source={require("../../assets/unfilled-star.png")} style={{marginRight: 5}}/>
                                </View>
                                { show1 && (
                                <View style={{marginTop: 5}}>
                                <Text style={{fontSize: 14, color: '#979797'}}>Snag up to 45 points by {'\n'}leaving a review.</Text>
                                <Text style={{fontSize: 14, color: '#979797', textDecorationLine: 'underline'}}>Click here for more {'\n'}details!</Text>
                                </View>
                                )}
                            </View>
                            <View>
                            <Icon name="angle-down" size={30} color="#000" 
                                style={{
                                    alignSelf: "center",
                                    right: '10%',
                                    position: "absolute"
                                    }}
                                    onPress={() => handleToggle('2')}
                                    />
                                    
                            </View>
                        </View>
                        <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            marginLeft: 20,
                            marginRight: 20,
                        }}
                        />
                </View>

                <View style={{marginTop: 20}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20, marginBottom: 10}}>
                            <Image source={require("../../assets/Rectangle87.png")} />
                            <View style={{marginTop: 0}}>
                                <Text style={{fontSize: 18}}>Previews Purchase</Text>
                                <TouchableOpacity><Text style={styles.underline}>RATE THIS ITEM</Text></TouchableOpacity>
                                <View style={{flexDirection: 'row', marginTop: 5}}>
                                <Image source={require("../../assets/filled-star.png")} style={{marginRight: 5}} />
                                <Image source={require("../../assets/filled-star.png")} style={{marginRight: 5}}/>
                                <Image source={require("../../assets/filled-star.png")} style={{marginRight: 5}}/>
                                <Image source={require("../../assets/filled-star.png")} style={{marginRight: 5}}/>
                                <Image source={require("../../assets/filled-star.png")} style={{marginRight: 5}}/>
                                </View>
                            </View>
                            <View>
                            <Icon name="angle-down" size={30} color="#000" 
                                style={{
                                    alignSelf: "center",
                                    right: '10%',
                                    position: "absolute"
                                    }}
                                    />
                            </View>
                        </View>
                        <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            marginLeft: 20,
                            marginRight: 20,
                        }}
                        />
                </View>

                <View style={{marginTop: 20}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20, marginBottom: 10}}>
                            <Image source={require("../../assets/Rectangle88.png")} />
                            <View style={{marginTop: 0}}>
                                <Text style={{fontSize: 18}}>Previews Purchase</Text>
                                <TouchableOpacity><Text style={styles.underline}>RATE THIS ITEM</Text></TouchableOpacity>
                                <View style={{flexDirection: 'row', marginTop: 5}}>
                                <Image source={require("../../assets/unfilled-star.png")} style={{marginRight: 5}} />
                                <Image source={require("../../assets/unfilled-star.png")} style={{marginRight: 5}}/>
                                <Image source={require("../../assets/unfilled-star.png")} style={{marginRight: 5}}/>
                                <Image source={require("../../assets/unfilled-star.png")} style={{marginRight: 5}}/>
                                <Image source={require("../../assets/unfilled-star.png")} style={{marginRight: 5}}/>
                                </View>
                            </View>
                            <View>
                            <Icon name="angle-down" size={30} color="#000" 
                                style={{
                                    alignSelf: "center",
                                    right: '10%',
                                    position: "absolute"
                                    }}
                                    />
                            </View>
                        </View>
                        <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            marginLeft: 20,
                            marginRight: 20,
                        }}
                        />
                </View>

                <View style={{marginTop: 20}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20, marginBottom: 10}}>
                            <Image source={require("../../assets/Rectangle89.png")} />
                            <View style={{marginTop: 0}}>
                                <Text style={{fontSize: 18}}>Previews Purchase</Text>
                                <TouchableOpacity><Text style={styles.underline}>RATE THIS ITEM</Text></TouchableOpacity>
                                <View style={{flexDirection: 'row', marginTop: 5}}>
                                <Image source={require("../../assets/unfilled-star.png")} style={{marginRight: 5}} />
                                <Image source={require("../../assets/unfilled-star.png")} style={{marginRight: 5}}/>
                                <Image source={require("../../assets/unfilled-star.png")} style={{marginRight: 5}}/>
                                <Image source={require("../../assets/unfilled-star.png")} style={{marginRight: 5}}/>
                                <Image source={require("../../assets/unfilled-star.png")} style={{marginRight: 5}}/>
                                </View>
                            </View>
                            <View>
                            <Icon name="angle-down" size={30} color="#000" 
                                style={{
                                    alignSelf: "center",
                                    right: '10%',
                                    position: "absolute"
                                    }}
                                    />
                            </View>
                        </View>
                        <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            marginLeft: 20,
                            marginRight: 20,
                        }}
                        />
                </View>
                <View style={{marginBottom: 50}}></View>
          
          

            </ScrollView>
            </View>
        </SafeAreaView>
     </View>
  );
}

const styles = StyleSheet.create({
    signText: {
        marginLeft: 20,
        marginTop: 40,
        marginBottom: 20,
        fontSize: 45,
        color: "#0078ED"
    },
    container: {
        //flex: 1,
        justifyContent: "center",
        //alignItems: 'flex-start',
        backgroundColor: "#fff",
      },
      label: {
        //width: 300,
        //height: 25,
        fontSize: 16,
        color: '#000',
        marginBottom: 10
    },
    underline: {
        //textDecorationLine: 'underline',
        color: '#8C8C8C',
        fontSize: 12,
        marginTop: 5,
        //right: 20,
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
        fontSize: 16,
        width: '90%',
        height: 60,
        color: "#000"
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 15,
        marginLeft: 20
    },
    optionTab: {
        width: "100%", 
        height: 60,
        //padding: 20,
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        fontWeight: "normal",
       // backgroundColor: (show) ? "#979797" : "red",
        overflow: "hidden",
        borderRadius: 30
      },
      btn: {
          marginTop: 50,
          alignItems: 'center',
      },

})
