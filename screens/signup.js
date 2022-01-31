import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { BASE_URL } from '../utils/http';

export default function Signup({navigation}) {
    const [errors, setErrors] = useState(null)
    const [show, setShow] = useState(false)
    const [isTerms, setTerms] = useState(false);
    const [isPrivacy, setPrivacy] = useState(false);
    const [date, setDate] = useState(new Date())
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      })
    
      const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date
        console.log(currentDate)
        //setShow(Platform.OS === 'ios')
        setDate(currentDate)
        //setShow(false)
      }
      const handlePrivacy = () => {
        if (isPrivacy == false) {
            setPrivacy(true)
            setErrors(null)
        }
    }
    const handleTerm = () => {
        if (isTerms == false) {
            setTerms(true)
            setErrors(null)
        }
    }
    const handlePass = (val) => {
        if(val.length < 7) {
            setErrors("Password must be 8 characters or more")
            
        } else {
            setErrors(null)
        }
    }
    const handleTextChange = (val, field) => {
        if(field == 'first_name') {
            if(val.length < 4) {
                setErrors("First name is too short")
                
            } else {
                setData({
                    ...data,
                    first_name: val
                })
                setErrors(null)
            }
            
        } else if (field == 'last_name') {
            if(val.length < 4) {
                setErrors("Last name is too short")
                
            } else {
                setData({
                    ...data,
                    last_name: val
                })
                setErrors(null)
            }
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
    const signUpHandler = () => {
        //navigation.navigate('SignupSuccess')
       // console.log(data)
        if(isPrivacy == false) {
            setErrors('Please accept the privacy policy')
        } else if(isTerms == false) {
            setErrors('Please accept the terms')
        } else if(data.first_name == '') {
            setErrors('first name is required')
        } else if(data.last_name == '') {
            setErrors('last name is required')
        } else if(data.phone == '') {
            setErrors('phone is required')
        } else if(data.email == '') {
            setErrors('email is required')     
        } else if(data.password == '') {
            setErrors('password is required')
        } else if(data.password2 == '') {
            setErrors('confirm password is required')
        }  else if(errors) {
            console.log(errors)
        } else {
        const formattedDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
        let body = JSON.stringify({
          'email': data.email.toLowerCase(),
          'username': data.first_name.toLowerCase(),
          'first_name': data.first_name,
          'last_name': data.last_name,
          'dob': formattedDate,
          'password': data.password
        })
        console.log(body)
    
        fetch(`${BASE_URL}/api/users/signup/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: body
        }).then(res => {
          if(res.ok) {
            return res.json()
          } else {
              Alert.alert('Sorry!', 'Account not created.', [{text: 'Okay'}])
            throw res.json()
          }
        }).then(json => {
           // Alert.alert('Success!', 'Account created successfully', [{text: 'Okay'}])
            //navigation
          navigation.navigate('SignupSuccess')
          //setToken(json.token)
          //signIn(token, json.user.email)
        }).catch(error => {
          console.log(error)
        })
        }
    }

  return (
      <View style={styles.container}>
        <SafeAreaView>
                <Text style={styles.signText}>Create{"\n"}Account </Text>
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
                    placeholderTextColor='#fff'
                    />
                </View>

                <View style={styles.inputView}>
                    <Text style={styles.label}>First Name</Text>
                    <TextInput
                    style={styles.TextInput}
                    onChangeText={(val) => setData({...data, first_name: val})}
                    onEndEditing={(e)=>handleTextChange(e.nativeEvent.text, 'first_name')}
                    autoCapitalize='none'
                    placeholder='Carlanda'
                    placeholderTextColor='#fff'
                    />
                </View>

                <View style={styles.inputView}>
                    <Text style={styles.label}>Last Name</Text>
                    <TextInput
                    style={styles.TextInput}
                    onChangeText={(val) => setData({...data, last_name: val})}
                    onEndEditing={(e)=>handleTextChange(e.nativeEvent.text, 'last_name')}
                    autoCapitalize='none'
                    placeholder='McKinney'
                    placeholderTextColor='#fff'
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
                        placeholderTextColor='#fff'
                        />
                        
                   </View>
                </View>

                <View style={styles.inputView}>
                    <Text style={styles.label}>Birthday</Text>
                    <View style={{flexDirection: 'row'}}>
                    <TextInput
                    style={styles.TextInput}
                    onChangeText={(val) => setData({...data, dob: val})}
                    placeholder=''
                    placeholderTextColor={'#001F47'}
                    value={date.toDateString()}
                    editable={false}
                    /> 
                    <Icon name="caret-down" size={30} color="#fff" 
                    style={{
                        left: 280,
                        padding: 40,
                        alignSelf: "center",
                        position: "absolute"
                        }}
                        onPress={() => setShow(!show)}/>
                    </View>
                  
                    {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode="date"
                      is24Hour={true}
                      display="spinner"
                      onChange={onChange}
                      textColor="#fff"
                    /> )}   
                </View>
                
                <View style={{marginTop: 40}}>
                <View style={styles.checkboxContainer}>
                <BouncyCheckbox onPress={handleTerm} 
                    iconStyle={{ borderColor: "#fff" }}
                    fillColor="#0078ED"
                    />
                    <Text>
                        <Text style={styles.underline} onPress={() => Linking.openURL('')}>Agree to Terms and Conditions</Text>
                    </Text>
                </View>

                <View style={styles.checkboxContainer}>
                <BouncyCheckbox onPress={handlePrivacy} 
                    iconStyle={{ borderColor: "#fff" }}
                    fillColor="#0078ED"
                    />
                    <Text>
                        <Text style={styles.underline} onPress={() => Linking.openURL('')}>Agree to Privacy Policy</Text>
                    </Text>
                </View>
                </View>

                <View style={styles.btn}>
                    <TouchableOpacity onPress={() => signUpHandler()}><Text style={styles.optionTab}>Sign Up</Text></TouchableOpacity>
                </View>

                <View style={styles.btn}>
                   <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.label}>Log in </Text></TouchableOpacity>
                </View>

                <View style={styles.signOption}>
                        <TouchableOpacity><Image source= {require("../assets/google.png")}/></TouchableOpacity>
                        <TouchableOpacity><Image source= {require("../assets/apple.png")}/></TouchableOpacity>
                        <TouchableOpacity><Image source= {require("../assets/fb.png")}/></TouchableOpacity>
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
        color: "#fff"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'flex-start',
        backgroundColor: "#0078ED"
      },
      label: {
        //width: 300,
        height: 25,
        fontSize: 16,
        color: '#fff',
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
        borderColor: '#0078ED',
        borderBottomColor: '#fff',
        borderWidth: 1,
        fontSize: 20,
        width: '100%',
        height: 60,
        color: "#fff"
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
        color: "#0078ED",
        fontSize: 16,
        fontWeight: "normal",
        backgroundColor: "#fff",
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
