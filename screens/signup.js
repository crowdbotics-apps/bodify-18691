import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image, Alert, Linking, Platform } from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { signUp } from '../utils/redux/auth/actions';
import { useDispatch } from 'react-redux'

export default function Signup({navigation}) {
    const [errors, setErrors] = useState(null)
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const [isTerms, setTerms] = useState(false);
    const [isPrivacy, setPrivacy] = useState(false);
    const [date, setDate] = useState(null)
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      })

    const [passwordVisibility, setPasswordVisibility] = useState(true)
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(true)
    
      const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date
        console.log(currentDate)
        //setShow(Platform.OS === 'ios')
        setDate(currentDate)
        setShow(false)

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
        let reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

        if(val.length < 7) {
            setErrors("Password must be 8 characters or more")
            
        } 
        else if(reg.test(val) == false) {
            setErrors("Password at least one letter, one number and one special characte")
        }else  {
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
        if(data.email == '') {
            setErrors('Email is required.')     
        } else if(data.first_name == '') {
            setErrors('First name is required.')
        } else if(data.last_name == '') {
            setErrors('Last name is required.')
        // } else if(data.phone == '') {
        //     setErrors('Phone is required.')
        } else if(data.password == '') {
            setErrors('Password is required.')
        } else if(data.confirm_password == '') {
            setErrors('Confirm password is required.')
        } else if (data.confirm_password !== data.password ) {
            setErrors('password does not matched.')
        } else if (!date) {
            setErrors('Please select your birthday.')
        } else if(isPrivacy == false) {
            setErrors('Please accept the privacy policy.')
        } else if(isTerms == false) {
            setErrors('Please accept the terms.')
        } else if(errors) {
            console.log(errors)
        } else {
        const formattedDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
        
        dispatch(signUp({
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            //phone: '',
            password: data.password,
            user_type: 'customer',
            profile: {
              date_of_birth: formattedDate,
              location: ''
            }
          }))
        }
        
    }

  return (
      <View style={styles.container}>
        <SafeAreaView>
                <Text style={styles.signText}>Create{"\n"}Account </Text>
                {errors ? <Text style={{color: 'red', alignSelf: 'center', marginBottom: 20, fontSize: 14}}>{errors}</Text>: null}
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
                            secureTextEntry={passwordVisibility}
                            placeholder='*************'
                            placeholderTextColor='#fff'
                            />
                        {passwordVisibility ? <Icon name="eye" size={30} color="#fff" 
                        style={{
                            left: 280,
                            padding: 40,
                            alignSelf: "center",
                            position: "absolute"
                            }}
                            onPress={() => setPasswordVisibility(!passwordVisibility)}/>
                        :
                        <Icon name="eye-slash" size={30} color="#fff" 
                            style={{
                                left: 280,
                                padding: 40,
                                alignSelf: "center",
                                position: "absolute"
                                }}
                                onPress={() => setPasswordVisibility(!passwordVisibility)}/>
                        }
                   </View>
                </View>

                <View style={styles.inputView}>
                    <Text style={styles.label}>Confirm Password</Text>
                    <View style={{flexDirection: 'row',}}>
                        <TextInput
                            style={styles.TextInput}
                            onChangeText={(val) => setData({...data, confirm_password: val})}
                            onEndEditing={(e)=>handlePass(e.nativeEvent.text)}
                            autoCapitalize='none'
                            secureTextEntry={confirmPasswordVisibility}
                            placeholder='*************'
                            placeholderTextColor='#fff'
                            />
                        {confirmPasswordVisibility ? <Icon name="eye" size={30} color="#fff" 
                        style={{
                            left: 280,
                            padding: 40,
                            alignSelf: "center",
                            position: "absolute"
                            }}
                            onPress={() => setConfirmPasswordVisibility(!confirmPasswordVisibility)}/>
                        :
                        <Icon name="eye-slash" size={30} color="#fff" 
                            style={{
                                left: 280,
                                padding: 40,
                                alignSelf: "center",
                                position: "absolute"
                                }}
                                onPress={() => setConfirmPasswordVisibility(!confirmPasswordVisibility)}/>
                        }
                   </View>
                </View>

                <View style={styles.inputView}>
                    <Text style={styles.label}>Birthday</Text>
                    <View style={{flexDirection: 'row'}}>
                    <TextInput
                    style={styles.TextInput}
                    onChangeText={(val) => setData({...data, dob: val})}
                    placeholder='Your Birthday'
                    placeholderTextColor={'#001F47'}
                    value={date ? date.toDateString() : 'Your Birthday'}
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
                      value={date || new Date()}
                      mode="date"
                      is24Hour={true}
                      display="spinner"
                      onChange={onChange}
                      textColor="#fff"
                      maximumDate={new Date()}
                      minimumDate={new Date(1950, 0, 1)}
                    /> )}   
                </View>
                
                <View style={{marginTop: 40}}>
                <View style={styles.checkboxContainer}>
                <BouncyCheckbox onPress={handleTerm} 
                    iconStyle={{ borderColor: "#fff" }}
                    fillColor="#0078ED"
                    />
                    <Text>
                        <Text style={styles.underline} onPress={() => navigation.navigate('Terms', {root: true})}>Agree to Terms and Conditions</Text>
                    </Text>
                </View>

                <View style={styles.checkboxContainer}>
                <BouncyCheckbox onPress={handlePrivacy} 
                    iconStyle={{ borderColor: "#fff" }}
                    fillColor="#0078ED"
                    />
                    <Text>
                        <Text style={styles.underline} onPress={() => navigation.navigate('Privacy', {root: true})}>Agree to Privacy Policy</Text>
                    </Text>
                </View>
                </View>

                <View style={styles.btn}>
                    <TouchableOpacity onPress={() => signUpHandler()}><Text style={styles.optionTab}>Sign Up</Text></TouchableOpacity>
                </View>

                <View style={styles.btn}>
                    <Text style={styles.label}>Already have an account?</Text>
                   <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.label}>Log in </Text></TouchableOpacity>
                </View>

                <View style={styles.signOption}>
                        <TouchableOpacity><Image source= {require("../assets/google.png")}/></TouchableOpacity>
                       {Platform.OS === "ios" && <TouchableOpacity><Image source= {require("../assets/apple.png")}/></TouchableOpacity>}
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
