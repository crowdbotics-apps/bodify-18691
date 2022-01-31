import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import React, {useState, useContext} from 'react';
import { BASE_URL } from '../utils/http';
import { AuthContext } from '../utils/context';

export default function Login({navigation}) {
    const [errors, setErrors] = useState(null)
    const {signIn} = useContext(AuthContext)
    const [data, setData] = useState({
        email: '',
        password: ''
      })
    
    const handlePass = (val) => {
        if(val.length < 7) {
            setErrors("Password must be 8 characters or more")
            
        } else {
            setErrors(null)
        }
    }
    
    const handleEmail = (val) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
            if(reg.test(val) == true) {
                setData({...data, email: val})     
            } else {
                setErrors("Please enter a valid email address")
            }
    }
    const loginHandler = (email, password) => {
        console.log(email, password)
        let body = JSON.stringify({
            'username': email.toLowerCase(),
            'password': password
          })
          fetch(`${BASE_URL}/api/users/login/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: body
          }).then(res => {
            if(res.ok) {
              return res.json()
            } else {
              Alert.alert('Invalid User!', 'Email or password is incorrect', [{text: 'Okay'}])
              throw res.json()
            }
          }).then(json => {
              console.log(json)
            signIn(json.token, json.user)
          }).catch(error => {
            console.log(error)
          })
    }

  return (
      <View style={styles.container}>
        <SafeAreaView>
                <Text style={styles.signText}>Welcome{"\n"}Back To {"\n"}Bodify! </Text>
                {errors ? <Text style={{color: 'red', alignSelf: 'center', marginBottom: 20}}>{errors}</Text>: null}
            <ScrollView>
                <View style={styles.inputView}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                    style={styles.TextInput}
                    onChangeText={(val) => setData({...data, email: val})}
                    onEndEditing={(e)=>handleEmail(e.nativeEvent.text)}
                    autoCapitalize='none'
                    placeholder='carlanda@bodify.com'
                    placeholderTextColor='#000'
                    />
                </View>


                <View style={styles.inputView}>
                    <Text style={styles.label}>Password</Text>
                    <View style={{flexDirection: 'row',}}>
                        <TextInput
                        style={styles.TextInput}
                        onChangeText={(val) => setData({...data, password: val})}
                        onEndEditing={(e)=>handlePass(e.nativeEvent.text)}
                        autoCapitalize='none'
                        secureTextEntry={true}
                        placeholder='*************'
                        placeholderTextColor='#000'
                        />
                        
                   </View>
                </View>

                <View style={{marginLeft: 20}}>
                   <TouchableOpacity><Text style={styles.label}>Forgot your Password? </Text></TouchableOpacity>
                </View>

                <View style={styles.btn}>
                    <TouchableOpacity onPress={() => loginHandler(data.email, data.password)}><Text style={styles.optionTab}>Log In</Text></TouchableOpacity>
                </View>

                <View style={styles.btn}>
                   <TouchableOpacity onPress={() => navigation.navigate('Signup')}><Text style={styles.label}>Sign Up </Text></TouchableOpacity>
                </View>

                <View style={styles.signOption}>
                        <TouchableOpacity><Image source= {require("../assets/google-black.png")}/></TouchableOpacity>
                        <TouchableOpacity><Image source= {require("../assets/apple-black.png")}/></TouchableOpacity>
                        <TouchableOpacity><Image source= {require("../assets/fb-black.png")}/></TouchableOpacity>
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
        color: '#fff',
        fontSize: 16,
        height: 25
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
        height: 60,
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
        backgroundColor: "#F68974",
        overflow: "hidden",
        borderRadius: 30
      },
      btn: {
          marginTop: 40,
          alignItems: 'center'
      },
      signOption: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 40,
        marginBottom: 20
    },

})
