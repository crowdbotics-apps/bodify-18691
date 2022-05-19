import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import { colors } from '../utils/colors'
//import Header from '../components/Header'
import Button from '../components/Button'
//import { isWeb } from '../utils/isweb'

const TokenInput = ({ route, navigation }) => {
  const { itemEmail } = route.params;
  const [values, setValues] = useState({
    email: itemEmail.email,
    token: null
  });

  const onSubmit = () => {
    if (!values.token) {
      Alert.alert('Please enter token!')
    } else if (values.token.length !== 4) {
      Alert.alert('Please enter 4-digit token code!')
    } else {
      navigation.navigate('SetPassword', { item: values })
    }
  }

  const onChange = (key, value) => {
    setValues({
      ...values,
      [key]: value
    })
  }
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>Enter {'\n'}the 4-digit {'\n'}token code</Text>
        <Text style={styles.titleContent}>A token was sent to your email, you need to submit it here in order to set a new password. </Text>
        <View style={styles.inputContainer}>
          <TextInput keyboardType={'number-pad'} onChangeText={(v) => onChange('token', v)} value={values.token} placeholder=" 5444 " style={styles.input} />
        </View>
        <TouchableOpacity>
          {/* <Text style={styles.timeToken}>Resend code in 26 seconds</Text> */}
        </TouchableOpacity>
        <Button onPress={onSubmit} name="Submit" backgroundColor={colors.blue} color={colors.white}/>
        <Button onPress={() => navigation.navigate('Login')} name="Cancel" backgroundColor={colors.cancelColor} color={colors.blue}/>
  
      </View>
    </View>
  ) 
}
const styles = StyleSheet.create({
  input: {
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: colors.border,
    //width: isWeb() ? 50 : null,
    fontSize: 22,
    color: colors.black
    
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30

  },
  timeToken: {
    color: colors.blue,
    fontSize: 14,
    textAlign: 'center',
    padding: 10,
    marginBottom: 10
  },
  title: {
    fontSize: 40,
    color: colors.blue,
    fontWeight: 'bold',
    textAlign: "left",
    marginTop: 60,
    marginLeft: 20,
    marginBottom: 15
  },
  titleContent: {
    fontSize: 16,
    color: colors.textColor,
    textAlign: 'left',
    paddingHorizontal: 20,
    marginBottom: 30

  },
  body: {
    padding: 15,
    backgroundColor: colors.backgroundColor,
    //alignItems: isWeb() ? 'center' : null
  },
  container: {
    //width: isWeb() ? 400 : null
  }
})
export default TokenInput;