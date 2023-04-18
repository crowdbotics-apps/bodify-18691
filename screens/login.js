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
import { BASE_URL } from "../utils/http"
import {
  GoogleSignin,
  statusCodes
} from "@react-native-google-signin/google-signin"
import { Settings, LoginManager, AccessToken } from "react-native-fbsdk-next"
import { appleAuth } from "@invertase/react-native-apple-authentication"
import { facebookLogin, googleLogin, login } from "../utils/redux/auth/actions"
import { useDispatch } from "react-redux"
import SocialLogin from "../components/SocialLogin"

import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login({ navigation }) {
  const [errors, setErrors] = useState(null)
  const dispatch = useDispatch()

  const [passwordVisibility, setPasswordVisibility] = useState(true)
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  useEffect(() => {
    if (Platform.OS === "ios") {
      Settings?.initializeSDK()
    }

    GoogleSignin.configure({
      // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        "482905565466-4n5kom3vnhn553rno3764fb822hbfg93.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
      // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // hostedDomain: '', // specifies a hosted domain restriction
      // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      // accountName: '', // [Android] specifies an account name on the device that should be used
      iosClientId:
        "482905565466-isdmm6m8kdqmj2hkn59iovlfoi5oobgr.apps.googleusercontent.com" // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      // googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    })
  }, [])

  const loginWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      await GoogleSignin.signOut()
      await GoogleSignin.signIn()
      const { accessToken } = await GoogleSignin.getTokens()
      dispatch(
        googleLogin({
          access_token: accessToken,
          user_type: "customer"
        })
      )
      console.log(accessToken)
    } catch (error) {
      console.log("error :>> ", error)
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  async function loginWithApple() {
    // performs login request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME]
    })

    // get current authentication state for user
    // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user
    )

    // use credentialState response to ensure the user is authenticated
    if (credentialState === appleAuth.State.AUTHORIZED) {
      // user is authenticated
      console.log(credentialState)
    }
  }

  const loginWithFacebook = () => {
    LoginManager.logInWithPermissions(["public_profile", "email"]).then(
      function (result) {
        if (result.isCancelled) {
          console.log("==> Login cancelled")
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            console.log(data?.accessToken?.toString())
            //dispatch(facebookLogin({
            // access_token: data?.accessToken?.toString(),
            // user_type: userType
            // }))
          })
        }
      },
      function (error) {
        console.log(`==> Login fail with error: ${error}`)
      }
    )
  }

  const handlePass = val => {
    if (val.length < 7) {
      setErrors("Password must be 8 characters or more")
    } else {
      setErrors(null)
    }
  }

  const handleEmail = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    if (reg.test(val) == true) {
      setData({ ...data, email: val })
    } else {
      setErrors("Please enter a valid email address")
    }
  }
  const loginHandler = () => {
    if (!data.email || !data.password) {
      Alert.alert("All fields are required")
    } else {
      dispatch(login(data))
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.signText}>
          Welcome{"\n"}Back To {"\n"}Bodify!{" "}
        </Text>
        {errors ? (
          <Text style={{ color: "red", alignSelf: "center", marginBottom: 20 }}>
            {errors}
          </Text>
        ) : null}
        <ScrollView>
          <View style={styles.inputView}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.TextInput}
              onChangeText={val => setData({ ...data, email: val })}
              onEndEditing={e => handleEmail(e.nativeEvent.text)}
              autoCapitalize="none"
              placeholder="carlanda@bodify.com"
              placeholderTextColor="#000"
            />
          </View>

          <View style={styles.inputView}>
            <Text style={styles.label}>Password</Text>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.TextInput}
                onChangeText={val => setData({ ...data, password: val })}
                onEndEditing={e => handlePass(e.nativeEvent.text)}
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

          <View style={{ marginLeft: 20 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text style={styles.label}>Forgot your Password? </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.btn}>
            <TouchableOpacity
              onPress={() => loginHandler(data.email, data.password)}
            >
              <Text style={styles.optionTab}>Log In</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.btn}>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.label}>Create an Account </Text>
            </TouchableOpacity>
          </View>

          <SocialLogin />
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
    marginTop: 10,
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
    alignItems: "center",
  },
  signOption: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 40,
    marginBottom: 20
  }
})
