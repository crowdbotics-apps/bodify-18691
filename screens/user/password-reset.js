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

export default function PasswordReset({ navigation }) {
  const [errors, setErrors] = useState(null)
  const [data, setData] = useState({
    current: "",
    new: "",
    confirm_new: "",
  });

  const handleManual = () => {
    //navigation.navigate("Match")
    console.log(data)
    
  };

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
              <TextInput
                style={styles.TextInput}
                onChangeText={val => setData({ ...data, current: val })}
                //onEndEditing={e => handlePass(e.nativeEvent.text)}
                autoCapitalize="none"
                secureTextEntry={true}
                placeholder="*************"
                placeholderTextColor="#000"
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.label}>New Password</Text>
              <TextInput
                style={styles.TextInput}
                onChangeText={val => setData({ ...data, new: val })}
                //onEndEditing={e => handlePass(e.nativeEvent.text)}
                autoCapitalize="none"
                secureTextEntry={true}
                placeholder="*************"
                placeholderTextColor="#000"
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.label}>Password Confirmation</Text>
              <TextInput
                style={styles.TextInput}
                onChangeText={val => setData({ ...data, confirm_new: val })}
                onEndEditing={e => handlePass(e.nativeEvent.text)}
                autoCapitalize="none"
                secureTextEntry={true}
                placeholder="*************"
                placeholderTextColor="#000"
              />
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
