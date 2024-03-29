import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native"
import React, { useState, useRef, useContext } from "react"
import Icon from "react-native-vector-icons/FontAwesome"
import Header2 from "./header2"
import BouncyCheckbox from "react-native-bouncy-checkbox"
import { Picker } from "@react-native-picker/picker"
import { launchCamera, launchImageLibrary } from "react-native-image-picker"
import { BASE_URL } from "../../utils/http"
import { useNavigation } from "@react-navigation/native"
import { logout } from "../../utils/redux/auth/actions"
import { updateProfile, getProfile } from "../../utils/redux/app/actions"
import { useDispatch, useSelector } from "react-redux"
import { config, S3 } from "../../utils/constant"
import fs from "react-native-fs"
import { decode } from "base64-arraybuffer"
import { unwrapResult } from "@reduxjs/toolkit"

export default function Profile() {
  const navigation = useNavigation()
  const profile = useSelector(state => state.App.profile)
  const accessToken = useSelector(state => state.Auth.accessToken)
  const dispatch = useDispatch()
  const onLogout = () => {
    dispatch(logout())
  }
  const [show, setShow] = useState(false)
  const [filePath, setFilePath] = useState({})
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
    favs: false
  })

  console.log(profile, 'pro')

  // const captureImage = async type => {
  //   let options = {
  //     mediaType: type,
  //     maxWidth: 300,
  //     maxHeight: 550,
  //     quality: 1,
  //     videoQuality: "low",
  //     durationLimit: 30, //Video max duration in seconds
  //     saveToPhotos: true
  //   }
  //   //let isCameraPermitted = await requestCameraPermission();
  //   //let isStoragePermitted = await requestExternalWritePermission();
  //   ////if (isCameraPermitted && isStoragePermitted) {
  //   launchCamera(options, response => {
  //     console.log("Response = ", response)
  //     //console.log(response.assets[0].fileName);

  //     if (response.didCancel) {
  //       alert("User cancelled camera picker")
  //       return
  //     } else if (response.errorCode == "camera_unavailable") {
  //       alert("Camera not available on device")
  //       return
  //     } else if (response.errorCode == "permission") {
  //       alert("Permission not satisfied")
  //       return
  //     } else if (response.errorCode == "others") {
  //       alert(response.errorMessage)
  //       return
  //     }
  //     //console.log('base64 -> ', response.base64);
  //     //console.log('uri -> ', response.uri);
  //     //console.log('width -> ', response.width);
  //     // console.log('height -> ', response.height);
  //     //console.log('fileSize -> ', response.fileSize);
  //     // console.log('type -> ', response.type);
  //     //console.log('fileName -> ', response.fileName);
  //     setFilePath(response.assets[0])
  //   })
  //   //}
  // }


  const handleImageUpload = async () => {
    const options = {
      mediaType: "photo",
      includeBase64: false,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1
      // maxHeight: 100,
      // maxWidth: 100
    }
    launchImageLibrary(options, res => {
      // setLoader(true)
      if (res.didCancel) {
        console.log("User cancelled image picker")
        // setLoader(false)
      } else if (res.error) {
        // setLoader(false)
        console.log("ImagePicker Error: ", res.error)
      } else if (res.customButton) {
        // setLoader(false)
        console.log("User tapped custom button: ", res.customButton)
        alert(res.customButton)
      } else {
        const file = {
          contentType: res.assets[0].type,
          contentDeposition: `inline;filename="${res.assets[0].fileName}"`,
          fPath: res.assets[0].uri,
          fName: res.assets[0].fileName
        }

        setFilePath(res.assets[0])
        
        Upload(file)
          .then(response => {
            console.log(response, 'pic')
            const payload = {
              profile_picture: response?.Location
            }
            dispatch(updateProfile(payload, accessToken))
              .then(unwrapResult)
              .then(res => {
                console.log(res, 'profile')
                Alert.alert("Image Uploaded Successfuly")
                dispatch(getProfile())
              })
              .catch(err => { console.log(err) })
          })
          .catch(err => { console.log(err) })
      }
    })
  }

  const Upload = async file => {
    const base64 = await fs.readFile(file.fPath, "base64")
    const arrayBuffer = decode(base64)
    const params = {
      Bucket: config.Bucket,
      Key: file.fName,
      Body: arrayBuffer,
      ContentDisposition: file.contentDeposition,
      ContentType: file.contentType
    }

    return new Promise((resolve, reject) => {
      S3.upload(params, (error, data) => {
        if (error) {
          reject(Alert.alert("Falied to Upload Image"))
        }
        resolve(data)
      })
    })
  }


  // const handlePhoto = () => {
  //   let body = JSON.stringify({
  //     photo_front: filePath,
  //     photo_side: filePath2,
  //     user: 2
  //   })
  //   console.log(body)
  //   fetch(`${BASE_URL}/measurements/photo/`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: body
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         return res.json()
  //       } else {
  //         Alert.alert("Sorry!", "Unable to get measurements.", [
  //           { text: "Okay" }
  //         ])
  //         throw res.json()
  //       }
  //     })
  //     .then(json => {
  //       navigation.navigate("Match")
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ position: "absolute", top: "5%", right: "6%" }}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image source={require("../../assets/side.png")} />
          </TouchableOpacity>
        </View>
        {filePath.uri ? (
          <View style={{ marginTop: 40, marginLeft: 20 }}>
            <Image source={{ uri: profile?.profile_picture || filePath.uri }} style={styles.imageStyle} />
          </View>
        ) : (
          <View style={{ marginTop: 40, alignSelf: "center" }}>
            <TouchableOpacity onPress={handleImageUpload}>
              <Image source={require("../../assets/Rectangle.png")} />
            </TouchableOpacity>
            <Icon
              name="upload"
              size={30}
              color="#000"
              style={{
                top: "40%",
                alignSelf: "center",
                position: "absolute"
              }}
              onPress={handleImageUpload}
            />
          </View>
        )}
        <Text style={styles.signText}>
          Hey,{"\n"}
          {profile.first_name}{" "}
        </Text>

        <View>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10
            }}
          />
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <View style={{ width: "25%", marginTop: 40 }}>
              <Text
                style={{
                  fontSize: 16,
                  color: "#8C8C8C",
                  position: "absolute",
                  transform: [{ rotate: "270deg" }]
                }}
              >
                PERSONAL
              </Text>
            </View>
            <View style={{ width: "70%" }}>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ManualMeasurement")}
                >
                  <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 19 }}>
                    Update Measurements
                  </Text>
                </TouchableOpacity>
                <Icon
                  name="angle-right"
                  size={20}
                  color="#000"
                  style={{
                    right: "5%",
                    top: "30%",
                    alignSelf: "center",
                    position: "absolute"
                  }}
                  onPress={() => navigation.navigate("ManualMeasurement")}
                />
              </View>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  marginTop: 20
                }}
              />
              <View>
                <TouchableOpacity onPress={() => navigation.navigate("Closet")}>
                  <Text style={{ marginLeft: 10, marginTop: 20, fontSize: 19 }}>
                    My Closet
                  </Text>
                </TouchableOpacity>
                <Icon
                  name="angle-right"
                  size={20}
                  color="#000"
                  style={{
                    right: "5%",
                    top: "50%",
                    alignSelf: "center",
                    position: "absolute"
                  }}
                  onPress={() => navigation.navigate("Closet")}
                />
              </View>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  marginTop: 20
                }}
              />
              <View>
                <Text style={{ marginLeft: 10, marginTop: 20, fontSize: 19 }}>
                  Brand and {"\n"}Size Recommendations
                </Text>
                <Icon
                  name="angle-right"
                  size={20}
                  color="#000"
                  style={{
                    right: "5%",
                    top: "50%",
                    alignSelf: "center",
                    position: "absolute"
                  }}
                />
              </View>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  marginTop: 20
                }}
              />
              <View>
                <Text style={{ marginLeft: 10, marginTop: 20, fontSize: 19 }}>
                  Rewards
                </Text>
                <Icon
                  name="angle-right"
                  size={20}
                  color="#000"
                  style={{
                    right: "5%",
                    top: "50%",
                    alignSelf: "center",
                    position: "absolute"
                  }}
                />
              </View>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  marginTop: 20
                }}
              />
            </View>
          </View>
        </View>

        <View style={{ marginTop: 40 }}>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10
            }}
          />
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <View style={{ width: "25%", marginTop: 40 }}>
              <Text
                style={{
                  fontSize: 16,
                  color: "#8C8C8C",
                  position: "absolute",
                  transform: [{ rotate: "270deg" }]
                }}
              >
                SETTINGS
              </Text>
            </View>
            <View style={{ width: "70%" }}>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("PasswordReset")}
                >
                  <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 19 }}>
                    Update Password
                  </Text>
                </TouchableOpacity>
                <Icon
                  name="angle-right"
                  size={20}
                  color="#000"
                  style={{
                    right: "5%",
                    top: "30%",
                    alignSelf: "center",
                    position: "absolute"
                  }}
                  onPress={() => navigation.navigate("PasswordReset")}
                />
              </View>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  marginTop: 20
                }}
              />
              <View>
                <TouchableOpacity onPress={() => navigation.navigate("About")}>
                  <Text style={{ marginLeft: 10, marginTop: 20, fontSize: 19 }}>
                    About Us
                  </Text>
                </TouchableOpacity>
                <Icon
                  name="angle-right"
                  size={20}
                  color="#000"
                  style={{
                    right: "5%",
                    top: "50%",
                    alignSelf: "center",
                    position: "absolute"
                  }}
                />
              </View>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  marginTop: 20
                }}
              />
              <View>
                <TouchableOpacity onPress={() => navigation.navigate("Terms")}>
                  <Text style={{ marginLeft: 10, marginTop: 20, fontSize: 19 }}>
                    Terms and Conditions
                  </Text>
                </TouchableOpacity>
                <Icon
                  name="angle-right"
                  size={20}
                  color="#000"
                  style={{
                    right: "5%",
                    top: "50%",
                    alignSelf: "center",
                    position: "absolute"
                  }}
                />
              </View>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  marginTop: 20
                }}
              />
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Privacy")}
                >
                  <Text style={{ marginLeft: 10, marginTop: 20, fontSize: 19 }}>
                    Privacy Policy
                  </Text>
                </TouchableOpacity>
                <Icon
                  name="angle-right"
                  size={20}
                  color="#000"
                  style={{
                    right: "5%",
                    top: "50%",
                    alignSelf: "center",
                    position: "absolute"
                  }}
                  onPress={() => navigation.navigate("Privacy")}
                />
              </View>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  marginTop: 20
                }}
              />
            </View>
          </View>
        </View>

        <View style={{ marginTop: 40, marginBottom: 40 }}>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10
            }}
          />
          <TouchableOpacity onPress={() => onLogout()}>
            <Text
              style={{
                marginLeft: "28%",
                marginTop: 20,
                marginBottom: 20,
                fontSize: 19
              }}
            >
              Log Out
            </Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10
            }}
          />
        </View>
      </ScrollView>
    </View>
  )
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
    alignItems: "center",
    backgroundColor: "#fff"
  },
  label: {
    //width: 300,
    //height: 25,
    fontSize: 16,
    color: "#000",
    marginBottom: 10
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
    marginLeft: 20
  },

  TextInput: {
    borderColor: "#fff",
    borderBottomColor: "#979797",
    borderWidth: 1,
    fontSize: 16,
    width: "100%",
    height: 30,
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
    // backgroundColor: (show) ? "#979797" : "red",
    overflow: "hidden",
    borderRadius: 30
  },
  btn: {
    marginTop: 50,
    alignItems: "center"
  },
  imageStyle: {
    width: 356,
    height: 320,
    margin: 5
  }
})
