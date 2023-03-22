import React, { useEffect } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native'
import { Settings, LoginManager, AccessToken } from 'react-native-fbsdk-next';
// import InstagramLogin from 'react-native-instagram-login';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { facebookLogin, googleLogin, instagramLogin } from '../utils/redux/auth/actions';
import { useDispatch } from 'react-redux';

const SocialLogin = ({ userType, mode }) => {
  // const instagramLoginRef = useRef();
  const dispatch = useDispatch()

  useEffect(() => {
    if (Platform.OS === 'ios') {
      Settings?.initializeSDK();
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

  const loginWithFacebook = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('==> Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            dispatch(facebookLogin({ 
              access_token: data?.accessToken?.toString(),
              user_type: userType 
            }))
          })
        }
      },
      function (error) {
        console.log(`==> Login fail with error: ${error}`);
      }
    );
  }

  async function loginWithApple() {
    try {
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
        console.log(credentialState, "ios")
      }

      const {
        identityToken,
      } = appleAuthRequestResponse;

      if(identityToken) {
        dispatch(instagramLogin({ 
          access_token: identityToken?.toString(),
          user_type: "Customer"
        }))
      }

    } catch (error) {
      console.log(`==> Login fail with error: ${error}`);
    }
    
  }

  const loginWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      await GoogleSignin.signIn();
      const { accessToken } = await GoogleSignin.getTokens();
      dispatch(googleLogin({
        access_token: accessToken,
          user_type: "Customer"
      }));
    } catch (error) {
      console.log('error :>> ', error);
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
  };

  return (
    <View style={styles.body}>
     
      <TouchableOpacity onPress={loginWithGoogle}>
        <Image
          style={styles.icon}
          resizeMode="contain"
          source={mode === "singup" ? require("../assets/google.png") : require('../assets/google-black.png')}
        />    
      </TouchableOpacity>
      {Platform.OS === "ios" &&  
        <TouchableOpacity onPress={loginWithApple}>
        <Image
          style={styles.icon}
          resizeMode="contain"
          source={ mode === "singup" ? require("../assets/apple.png") : require('../assets/apple-black.png')}
        />    
      </TouchableOpacity>
      }
      <TouchableOpacity onPress={loginWithFacebook}>
        <Image
          style={styles.icon}
          resizeMode="contain"
          source={mode === "singup" ? require("../assets/fb.png") : require('../assets/fb-black.png')}
        />    
      </TouchableOpacity>
    </View>
  ) 
}
const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 15,
    width: 35,
    height: 35
  },
  body: {
    margin: 25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
})
export default SocialLogin;