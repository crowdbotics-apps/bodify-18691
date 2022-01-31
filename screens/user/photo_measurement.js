import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import React, {useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header2 from './header2';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {Picker} from '@react-native-picker/picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { BASE_URL } from '../../utils/http';

export default function PhotoMeasurement({navigation}) {
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(true)
    const [show2, setShow2] = useState(false)
    const [filePath, setFilePath] = useState({})
    const [filePath2, setFilePath2] = useState({})
    const pickerRef = useRef()
    const [selectedItem, setSelectedItem] = useState("Select one");
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        password2: '',
        favs: false
      })

      const captureImage = async (type, val) => {
        let options = {
          mediaType: type,
          maxWidth: 300,
          maxHeight: 550,
          quality: 1,
          videoQuality: 'low',
          durationLimit: 30, //Video max duration in seconds
          saveToPhotos: true,
        };
        //let isCameraPermitted = await requestCameraPermission();
        //let isStoragePermitted = await requestExternalWritePermission();
        ////if (isCameraPermitted && isStoragePermitted) {
          launchCamera(options, (response) => {
            console.log('Response = ', response);
            //console.log(response.assets[0].fileName);
    
            if (response.didCancel) {
              alert('User cancelled camera picker');
              return;
            } else if (response.errorCode == 'camera_unavailable') {
              alert('Camera not available on device');
              return;
            } else if (response.errorCode == 'permission') {
              alert('Permission not satisfied');
              return;
            } else if (response.errorCode == 'others') {
              alert(response.errorMessage);
              return;
            }
            //console.log('base64 -> ', response.base64);
            //console.log('uri -> ', response.uri);
            //console.log('width -> ', response.width);
           // console.log('height -> ', response.height);
            //console.log('fileSize -> ', response.fileSize);
           // console.log('type -> ', response.type);
            //console.log('fileName -> ', response.fileName);
            if (val == 'front') {
              setFilePath(response.assets[0]);
            } else {
              setFilePath2(response.assets[0]);
            }
            
          });
        //}
      };
      

      const handleShow = (val) => {
        //console.log('hello')
        if (val == 'front') {
          setShow1(!show1)
          setShow2(!show2)
        } else {
          setShow2(!show2)
          setShow1(!show1)
        }
      }

      const handlePhoto = () => {
        let body = JSON.stringify({
            'photo_front': filePath,
            'photo_side': filePath2,
            'user': 2
          })
          console.log(body)
          fetch(`${BASE_URL}/measurements/photo/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: body
          }).then(res => {
            if(res.ok) {
              return res.json()
            } else {
                Alert.alert('Sorry!', 'Unable to get measurements.', [{text: 'Okay'}])
              throw res.json()
            }
          }).then(json => {
            navigation.navigate('Match')
          }).catch(error => {
            console.log(error)
          })
          
    }
  return (
      <View style={styles.container}>
        <SafeAreaView>
             <Header2 />
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.signText}>Photo{"\n"}Measurements      </Text>
            <TouchableOpacity onPress={() => setShow(!show)}>
            <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 18, color: '#000', marginLeft: 20}}>Instructions</Text>
                    <Icon name="caret-down" size={30} color="#000" 
                    style={{
                        left: 280,
                        padding: 40,
                        alignSelf: "center",
                        position: "absolute"
                        }}
                        onPress={() => setShow(!show)}/>
                    </View>
                    </TouchableOpacity>
            
                    {show && (
                        <View style={{marginTop: 40}}>
                            <View style={styles.inputView}>
                                <Text style={{fontSize: 16, color: "#0078ed", fontWeight: "600"}}>This won't take long, we promise! </Text>
                                <Text style={{fontSize: 16, color: "#979797", marginTop: 20}}>In order for us to give you the best {"\n"}suggestions, we need your measurements. {"\n"}Don't know them? No problem! We can use {"\n"}your images to get them. </Text>
                                <Text style={{fontSize: 16, color: "#0078ed", marginTop: 20, fontWeight: "600"}}>It's as easy as 1, 2, 3!</Text>
                                <Text style={{fontSize: 16, color: "#979797", marginTop: 20}}>1. Make sure you aren't wearing anything that changes your shape. We know sweatpants are comfy, but not great for your pics.</Text>
                                <Text style={{fontSize: 16, color: "#979797", marginTop: 20}}>2. Stand near a light switch if you're looking for tops, or a power outlet if you're looking for bottoms. Looking for both? We'll need both in each image OR two sets of images. </Text>
                                <Text style={{fontSize: 16, color: "#979797", marginTop: 20}}>3. Stand up straight, shoulders back. And GO!</Text>
                               
                            </View>

                            <View style={{flexDirection: 'row', justifyContent: "space-evenly"}}>
                            <Image source= {require("../../assets/photo-front.png")}/>
                            <Image style={{top: 15}} source= {require("../../assets/arrow-front.png")}/>
                            <Image source= {require("../../assets/photo-side.png")}/>
                            </View>
                                
                        </View>
    
                     )}   
        {show1 && (  
        <View>
           {filePath.uri ? (
               <View style={{marginTop: 40, marginLeft: 20}}>
              
                  <Image
                    source={{uri: filePath.uri}}
                    style={styles.imageStyle}
        />

               </View>
           ) : (
            <View style={{ marginLeft: 20, marginTop: 40}}>
             <TouchableOpacity onPress={() => captureImage('photo', 'front')}><Image source= {require("../../assets/Rectangle.png")}/></TouchableOpacity>
            <Icon name="upload" size={30} color="#000" 
            style={{
                top: "40%",
                alignSelf: "center",
                position: "absolute"
                }}
                onPress={() => captureImage('photo', 'front')}/>
                 </View>
                 
           )}
           
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20}}>
                   <TouchableOpacity onPress={() => handleShow('front')}><Text style={{right: "50%", color: '#0078ED'}}>Forward Facing</Text></TouchableOpacity>
                   <TouchableOpacity onPress={() => handleShow('side')}><Text style={{left: "50%"}}>Side Facing</Text></TouchableOpacity>
                 </View>
                 </View>
   )}

{show2 && (  
        <View>
           {filePath2.uri ? (
               <View style={{marginTop: 40, marginLeft: 20}}>
              
                  <Image
                    source={{uri: filePath2.uri}}
                    style={styles.imageStyle}
        />

               </View>
           ) : (
            <View style={{ marginLeft: 20, marginTop: 40}}>
             <TouchableOpacity onPress={() => captureImage('photo', 'side')}><Image source= {require("../../assets/Rectangle.png")}/></TouchableOpacity>
            <Icon name="upload" size={30} color="#000" 
            style={{
                top: "40%",
                alignSelf: "center",
                position: "absolute"
                }}
                onPress={() => captureImage('photo', 'side')}/>
                 </View>
                 
           )}
           
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20}}>
                   <TouchableOpacity onPress={() => handleShow('front')}><Text style={{right: "50%", color: '#0078ED'}}>Forward Facing</Text></TouchableOpacity>
                   <TouchableOpacity onPress={() => handleShow('side')}><Text style={{left: "50%", color: show2 ? '#0078ED' : '#000'}}>Side Facing</Text></TouchableOpacity>
                 </View>
                 </View>
   )}
        

            <View style={styles.btn}>
                    <TouchableOpacity onPress={() => handlePhoto()}><Text style={{width: 250, 
                        height: 60,
                        padding: 20,
                        textAlign: "center",
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: "normal",
                        backgroundColor: (show) ? "#F68974": "#979797",
                        overflow: "hidden",
                        borderRadius: 30}}>Get My Measurements</Text></TouchableOpacity>
            </View>
            <View style={{alignItems: 'center', marginTop: 30, marginBottom: 30}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Match")}><Text style={{color: "#8C8C8C"}}>Enter Manually</Text></TouchableOpacity>
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
