import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TextInput,
    Platform,
    TouchableOpacity,
    Image,
    Alert
  } from "react-native"
  import React, { useState, useContext, useEffect } from "react"
  import { useDispatch } from "react-redux"
import { resetPassword } from "../utils/redux/auth/actions"
  
  export default function ForgotPassword({ navigation }) {
    const [errors, setErrors] = useState(null)
    const dispatch = useDispatch()
    const [data, setData] = useState({
      email: ""
    })
    useEffect(() => {
      if (Platform.OS === "ios") {
        //Settings?.initializeSDK()
      }
    }, [])
  
    const handleEmail = val => {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
      if (reg.test(val) == true) {
        setData({ ...data, email: val })
      } else {
        setErrors("Please enter a valid email address")
      }
    }
    const resetHandler = () => {
      if (!data.email) {
        Alert.alert("Email field is required")
      } else {
          console.log(data)
          dispatch(resetPassword(data, navigation))
      }
    }
  
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.signText}>
          Forgot{"\n"}Password or{"\n"}Account!{" "}
          </Text>
          <Text style={{marginLeft: 20, color: "#979797", fontSize: 16, marginBottom: 20}}>Forgotten password? No sweat!
{'\n'}Please enter the email address associated with your account.</Text>
          {/**errors ? (
            <Text style={{ color: "red", alignSelf: "center", marginBottom: 20 }}>
              {errors}
            </Text>
          ) : null **/}
          <ScrollView>
            <View style={styles.inputView}>
              <Text style={styles.label}>Email or Phone</Text>
              <TextInput
                style={styles.TextInput}
                onChangeText={val => setData({ ...data, email: val })}
                onEndEditing={e => handleEmail(e.nativeEvent.text)}
                autoCapitalize="none"
                placeholder="carlanda@bodify.com"
                placeholderTextColor="#000"
              />
            </View>
  
            
  
            
  
            <View style={styles.btn}>
              <TouchableOpacity
                onPress={() => resetHandler(data.email)}
              >
                <Text style={styles.optionTab}>Reset Password</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.goBack()}> 
                    <Image 
                    style={{alignSelf: "center", marginTop: 60}}
                    source= {require("../assets/back-blue.png")}/>
                </TouchableOpacity>   
  
          </ScrollView>
        </SafeAreaView>
      </View>
    )
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
      alignItems: "flex-start",
      backgroundColor: "#fff"
    },
    label: {
      //width: 300,
      height: 25,
      fontSize: 16,
      color: "#979797"
    },
    underline: {
      textDecorationLine: "underline",
      color: "#fff",
      fontSize: 16,
      height: 25
    },
  
    inputView: {
      marginTop: 80,
      marginBottom: 40,
      marginLeft: 20
    },
  
    TextInput: {
      borderColor: "#fff",
      borderBottomColor: "#979797",
      borderWidth: 1,
      fontSize: 20,
      width: "100%",
      height: 60,
      color: "#000"
    },
    checkboxContainer: {
      flexDirection: "row",
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
      alignSelf: "center",
      alignItems: "center"
    },
    signOption: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: 40,
      marginBottom: 20
    }
  })
  