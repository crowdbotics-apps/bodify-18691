import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from "react-native"
import React, { useState } from "react"
import Header2 from "./header2"
import { BASE_URL } from "../../utils/http"
import { useDispatch } from "react-redux"
import { passChange } from "../../utils/redux/auth/actions"
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PasswordReset({ navigation }) {
  const [errors, setErrors] = useState(null)
  const dispatch = useDispatch()
  const [data, setData] = useState({
    old_password: "",
    new_password1: "",
    new_password2: "",
  });


  const [passwordVisibility, setPasswordVisibility] = useState(true)
  const [password1Visibility, setPassword1Visibility] = useState(true)
  const [password2Visibility, setPassword2Visibility] = useState(true)

  const handleManual = () => {
    //navigation.navigate("Match")
    if(data.old_password && (data?.new_password1 === data?.new_password2))
    
    dispatch(passChange(data, navigation))
    // console.log(data)
  };

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

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <SafeAreaView>
        <Header2 navs={navigation} />
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.signText}>Re-enter{'\n'}New Password </Text>
            {errors ? <Text style={{color: 'red', alignSelf: 'center', marginBottom: 20}}>{errors}</Text>: null}
            <View style={styles.inputView}>
              <Text style={styles.label}>Current</Text>
              <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.TextInput}
                onChangeText={val => setData({ ...data, old_password: val })}
                //onEndEditing={e => handlePass(e.nativeEvent.text)}
                autoCapitalize="none"
                secureTextEntry={passwordVisibility}
                placeholder="*************"
                placeholderTextColor="#000"
              />
               {passwordVisibility ? <Icon name="eye" size={30} color="#000" 
                        style={{
                            left: 280,
                            padding: 40,
                            alignSelf: "center",
                            position: "absolute"
                            }}
                            onPress={() => setPasswordVisibility(!passwordVisibility)}/>
                        :
                        <Icon name="eye-slash" size={30} color="#000" 
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
              <Text style={styles.label}>New Password</Text>
              <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.TextInput}
                onChangeText={val => setData({ ...data, new_password1: val })}
                //onEndEditing={e => handlePass(e.nativeEvent.text)}
                autoCapitalize="none"
                secureTextEntry={password1Visibility}
                placeholder="*************"
                placeholderTextColor="#000"
              />
              {password1Visibility ? <Icon name="eye" size={30} color="#000" 
                        style={{
                            left: 280,
                            padding: 40,
                            alignSelf: "center",
                            position: "absolute"
                            }}
                            onPress={() => setPassword1Visibility(!password1Visibility)}/>
                        :
                        <Icon name="eye-slash" size={30} color="#000" 
                            style={{
                                left: 280,
                                padding: 40,
                                alignSelf: "center",
                                position: "absolute"
                                }}
                                onPress={() => setPassword1Visibility(!password1Visibility)}/>
                        }

            </View>
            </View>
            <View style={styles.inputView}>
              <Text style={styles.label}>Password Confirmation</Text>
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  style={styles.TextInput}
                  onChangeText={val => setData({ ...data, new_password2: val })}
                  onEndEditing={e => handlePass(e.nativeEvent.text)}
                  autoCapitalize="none"
                  secureTextEntry={password2Visibility}
                  placeholder="*************"
                  placeholderTextColor="#000"
                />
                {password2Visibility ? <Icon name="eye" size={30} color="#000" 
                        style={{
                            left: 280,
                            padding: 40,
                            alignSelf: "center",
                            position: "absolute"
                            }}
                            onPress={() => setPassword2Visibility(!password2Visibility)}/>
                        :
                        <Icon name="eye-slash" size={30} color="#000" 
                            style={{
                                left: 280,
                                padding: 40,
                                alignSelf: "center",
                                position: "absolute"
                                }}
                                onPress={() => setPassword2Visibility(!password2Visibility)}/>
                        }
              </View>
            </View>


            <View style={styles.btn}>
              <TouchableOpacity onPress={() => handleManual()}>
                <Text
                  style={{
                    width: 250,
                    height: 60,
                    padding: 20,
                    textAlign: 'center',
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: 'normal',
                    backgroundColor: '#F68974',
                    overflow: 'hidden',
                    borderRadius: 30
                  }}
                >
                  Reset Password
                </Text>
              </TouchableOpacity>
            </View>


            </ScrollView>
        </View>
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
    color: '#0078ED',
  },
  container: {
    //flex: 1,
    justifyContent: 'center',
    //alignItems: 'flex-start',
    backgroundColor: "#fff"
  },
  label: {
    //width: 300,
    //height: 25,
    fontSize: 16,
    color: "#000",
    marginBottom: 10,
  },
  underline: {
    textDecorationLine: "underline",
    color: "#8C8C8C",
    fontSize: 16,
    right: 20
    //height: 25
  },

  inputView: {
    marginTop: 10,
    marginBottom: 40,
    marginLeft: 20,
  },

  TextInput: {
    borderColor: "#fff",
    borderBottomColor: "#979797",
    borderWidth: 1,
    fontSize: 16,
    width: "90%",
    height: 60,
    color: '#000',
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 15,
    marginLeft: 20,
  },
  optionTab: {
    width: "100%",
    height: 60,
    //padding: 20,
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'normal',
    // backgroundColor: (show) ? "#979797" : "red",
    overflow: 'hidden',
    borderRadius: 30,
  },
  btn: {
    marginTop: 50,
    alignItems: "center"
  }
});
