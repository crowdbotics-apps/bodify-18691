import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import React, {useState, useRef, useContext} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header2 from './header2';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {Picker} from '@react-native-picker/picker';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { BASE_URL } from '../../utils/http';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../../utils/redux/auth/actions'
import { useDispatch, useSelector } from 'react-redux'


export default function About({navigation}) {
    // const navigation = useNavigation();
    const dispatch = useDispatch()
    const onLogout = () => {
        dispatch(logout())
      }
    const [show, setShow] = useState(false)
    const [filePath, setFilePath] = useState({})
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        password2: '',
        favs: false
      })

      
      

  return (
      <View style={styles.container}>
          <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Header2 navs={navigation}/>
     
            <View style={{marginTop: 20}}>
                <View style={{flexDirection: "row"}}>
                    <Text style={{width: "50%", fontSize: 20, letterSpacing: 0.7, alignSelf: 'center', marginLeft: 20}}>Discover which brands are best for your body using our personalized, streamlined process.{'\n'+'\n'}Find what fits without the fuss.</Text>
                    <Image source= {require("../../assets/about.png")}/>
                </View>
                <Text style={{position: "absolute", color: "#0078ED", fontSize: 130, alignSelf: "center", top: 290}}>About</Text>
            </View>
            

            <View style={{marginTop: 50}}>
            
                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <View style={{width: "25%", marginTop: 40}}>
                    <Text style={{fontSize: 20, color: '#F68974', position: 'absolute', width: 188, left: -60, marginTop: 60, textTransform: 'uppercase', transform: [{rotate: '270deg'}]}}>How We Got Here</Text>
                    </View>
                    <View style={{width: "70%"}}>
                        
                           
                            <View>
                            <Text style={{marginLeft: 10, marginTop: 20, fontSize: 16, color: "#979797"}}>Did you know that roughly 50% of all clothing purchased online is returned at some point? We didn't either! Neither did we know that almost 100% of clothing returns are related to fit in some way. 
                            {'\n'}{'\n'}When we started Bodify, the idea was to simplify figuring out what size to buy when shopping online. After discovering just how much of a financial drain returns are to retailers, and what a huge environmental issue they've become, our focus broadened. 
                            {'\n'}{'\n'}Our premise is that by helping you, the shopper, make the best decisions possible when shopping for clothes online, the purchases you make stay purchased and we minimize the negative impact of clothing returns overall.</Text>              
                        </View>
                      
                    </View>
                </View>
                
            </View>

            <View style={{marginTop: 40}}>
            <View
                style={{
                    borderBottomColor: '#F68974',
                    borderBottomWidth: 1,
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: 10
                }}
                />
                   <View style={{marginTop: 20}}>
            
            <View style={{flexDirection: 'row', marginTop: 20}}>
                <View style={{width: "25%", marginTop: 40}}>
                <Text style={{fontSize: 20, color: '#F68974', position: 'absolute', width: 188, left: -60, marginTop: 20, textTransform: 'uppercase', transform: [{rotate: '270deg'}]}}>How It Works</Text>
                </View>
                <View style={{width: "70%"}}>
                    
                       
                        <View>
                        <Text style={{marginLeft: 10, marginTop: 20, fontSize: 16, color: "#979797"}}>First, we get your measurements. Most of our shoppers use our photo input for this. We don't save your images but we do save the measurements we pull from the images. Learn more about our Photo Input process here.Not a picture person? No sweat! We've got options.If you know your precise measurements you can enter them. If not, we can still help by asking you a few questions.
                        {'\n'}{'\n'}Once we have your measurements, we run them against brand data we have stored and Voila! From there we're able to make recommendations about which brands you should shop and what size in each will best work for you.</Text>              
                    </View>
                  
                </View>
            </View>
            
        </View>
                
            </View>

            <View style={{marginTop: 40, marginBottom: 40}}>
                <View
                style={{
                    borderBottomColor: '#F68974',
                    borderBottomWidth: 1,
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: 10
                }}
                />

            </View>
            
        

            
            
            
            </ScrollView>
            
      </SafeAreaView>
     </View>
  );
}

const styles = StyleSheet.create({
    signText: {
        marginLeft: 20,
        marginTop: 30,
        marginBottom: 20,
        fontSize: 40,
        color: "#0078ED"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#fff"
      },
      label: {
        //width: 300,
        //height: 25,
        fontSize: 16,
        color: '#000',
        marginBottom: 10
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
        fontSize: 16,
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
       // backgroundColor: (show) ? "#979797" : "red",
        overflow: "hidden",
        borderRadius: 30
      },
      btn: {
          marginTop: 50,
          alignItems: 'center'
      },
      imageStyle: {
        width: 356,
        height: 320,
        margin: 5,
      },

})
