import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from "react-native"
import React, { useState, useRef, useEffect } from "react"
import Icon from "react-native-vector-icons/FontAwesome"
import Header2 from "./header2"
import { BASE_URL } from "../../utils/http"
import { Alert } from "react-native"
import ImageUploader from "../../components/ImageUploader"
import { useDispatch, useSelector } from "react-redux"
import { getMeasurement } from "../../utils/redux/app/actions"

export default function PhotoMeasurement({ navigation }) {
  const dispatch = useDispatch()
  // const isLoading = useSelector(state => state.App.isLoading)
  const [isLoading, setIsLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(true)
  const [show2, setShow2] = useState(false)
  const [image2, setImage2] = useState(null)
  const [image, setImage] = useState(null)


  useEffect(() => {
    setIsLoading(false)
  }, [])

  const handleShow = val => {
    if (val == "front") {
      setShow1(!show1)
      setShow2(!show2)
    } else if (val == "side") {
      setShow2(!show2)
      setShow1(!show1)
    }
  }

  const handlePhoto = async () => {
    if (!image || !image2) {
      Alert.alert(
        "Image Missing",
        "Please provide both forward and side facing images."
      )
    } else {
      const image_file = {
        front: {
          uri: image.uri,
          type: image.type,
          name: image.fileName,
          contentDeposition: `inline;filename="${image.fileName}"`,
        },
        back: {
          uri: image2.uri,
          type: image2.type,
          name: image2.fileName,
          contentDeposition: `inline;filename="${image2.fileName}"`,
        }
      }
      console.log(image_file)
      setIsLoading(true)
      try {
        dispatch(getMeasurement(image_file, navigation))
        
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header2  navs={navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.signText}>Photo{"\n"}Measurements </Text>
          <TouchableOpacity onPress={() => setShow(!show)}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 18, color: "#000", marginLeft: 20 }}>
                Instructions
              </Text>
              <Icon
                name="caret-down"
                size={30}
                color="#000"
                style={{
                  left: 280,
                  padding: 40,
                  alignSelf: "center",
                  position: "absolute"
                }}
                onPress={() => setShow(!show)}
              />
            </View>
          </TouchableOpacity>

          {show && (
            <View style={{ marginTop: 40 }}>
              <View style={styles.inputView}>
                <Text
                  style={{ fontSize: 16, color: "#0078ed", fontWeight: "600" }}
                >
                  This won't take long, we promise!{" "}
                </Text>
                <Text style={{ fontSize: 16, color: "#979797", marginTop: 20 }}>
                  In order for us to give you the best {"\n"}suggestions, we
                  need your measurements. {"\n"}Don't know them? No problem! We
                  can use {"\n"}your images to get them.{" "}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#0078ed",
                    marginTop: 20,
                    fontWeight: "600"
                  }}
                >
                  It's as easy as 1, 2, 3!
                </Text>
                <Text style={{ fontSize: 16, color: "#979797", marginTop: 20 }}>
                  1. Make sure you aren't wearing anything that changes your
                  shape. We know sweatpants are comfy, but not great for your
                  pics.
                </Text>
                <Text style={{ fontSize: 16, color: "#979797", marginTop: 20 }}>
                  2. Stand near a light switch if you're looking for tops, or a
                  power outlet if you're looking for bottoms. Looking for both?
                  We'll need both in each image OR two sets of images.{" "}
                </Text>
                <Text style={{ fontSize: 16, color: "#979797", marginTop: 20 }}>
                  3. Stand up straight, shoulders back. And GO!
                </Text>
              </View>

              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                <Image source={require("../../assets/photo-front.png")} />
                <Image
                  style={{ top: 15 }}
                  source={require("../../assets/arrow-front.png")}
                />
                <Image source={require("../../assets/photo-side.png")} />
              </View>
            </View>
          )}
          {show1 && (
            <View>
              <View style={{ marginLeft: 20, marginTop: 40 }}>
                <ImageUploader onUpload={setImage}>
                  <Image
                    style={styles.icon}
                    resizeMode="cover"
                    source={
                      image
                        ? { uri: image?.uri || image }
                        : require("../../assets/Rectangle.png")
                      // require('../assets/avatar.png')
                    }
                  />
                </ImageUploader>
                {image ? null : (
                  <Icon
                    name="upload"
                    size={30}
                    color="#000"
                    style={{
                      top: "40%",
                      alignSelf: "center",
                      position: "absolute"
                    }}
                    // onPress={() => captureImage("photo", "front")}
                  />
                )}
              </View>
            </View>
          )}

          {show2 && (
            <View>
              <View style={{ marginLeft: 20, marginTop: 40 }}>
                <ImageUploader onUpload={setImage2}>
                  <Image
                    style={styles.icon}
                    resizeMode="cover"
                    source={
                      image2
                        ? { uri: image2?.uri || image2 }
                        : require("../../assets/Rectangle.png")
                      // require('../assets/avatar.png')
                    }
                  />
                </ImageUploader>
                {image2 ? null : (
                  <Icon
                    name="upload"
                    size={30}
                    color="#000"
                    style={{
                      top: "40%",
                      alignSelf: "center",
                      position: "absolute"
                    }}
                    // onPress={() => captureImage("photo", "front")}
                  />
                )}
              </View>
            </View>
          )}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 20
            }}
          >
            <TouchableOpacity onPress={() => handleShow("front")}>
              <Text style={{ right: "50%", color: show1 ? "#0078ED" : null }}>
                Forward Facing
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleShow("side")}>
              <Text style={{ left: "50%", color: show2 ? "#0078ED" : null }}>
                Side Facing
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.btn}>
            {!isLoading ? (
              <TouchableOpacity onPress={() => handlePhoto()}>
                <Text
                  style={{
                    width: 250,
                    height: 60,
                    padding: 20,
                    textAlign: "center",
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "normal",
                    backgroundColor: image && image2 ? "#F68974" : "#979797",
                    overflow: "hidden",
                    borderRadius: 30
                  }}
                >
                  Get My Measurements
                </Text>
              </TouchableOpacity>
            ) : (
              <ActivityIndicator animating={isLoading} />
            )}
          </View>
          <View
            style={{ alignItems: "center", marginTop: 30, marginBottom: 30 }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Match")}>
              <Text style={{ color: "#8C8C8C" }}>Enter Manually</Text>
            </TouchableOpacity>
          </View>
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
  },
  icon: {
    width: 356,
    height: 300
  }
})
