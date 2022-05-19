import React, { useState } from 'react'
import { View, StyleSheet, Text, Alert } from 'react-native'
import { colors } from '../utils/colors'
//import Header from '../components/Header'
import Button from '../components/Button'
import Input from '../components/Input'
//import { isWeb } from '../utils/isweb'
import { useDispatch } from 'react-redux'
import { passConfirm } from '../utils/redux/auth/actions'

const SetNewPassword = ({ route, navigation }) => {
  const dispatch = useDispatch()
  const { item } = route.params;
  const [values, setValues] = useState({
    email: item.email,
    otp: item.token
  });

  console.log('item', item)
  const onNewPassword = () => {
    if (!values.new_password1 || !values.new_password2) {
      Alert.alert('Please enter password ') 
    } else if (values.new_password1 !== values.new_password2) {
      Alert.alert('Password don`t match! ')
    } else {
      console.log('object', values)
      dispatch(passConfirm(values, navigation))

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
        <Text style={styles.title}> Set a {'\n'}New Password</Text>
        <Text style={styles.titleContent}>Your password needs to have more than 8 characters. </Text>
        <Input onChangeText={(v) => onChange('new_password1', v)} value={values.new_password1} title="New Password " placeholder="Type new password" password={true}/>
        <Input onChangeText={(v) => onChange('new_password2', v)} value={values.new_password2} title="Confirm Password " placeholder="Confirm your new password" password={true}/>
        <Button onPress={onNewPassword} name="Set new password" backgroundColor={colors.blue} color={colors.white}/>
  
      </View>
    </View>
  ) 
}
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: colors.blue,
    fontWeight: 'bold',
    textAlign: 'left',
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
    //width: isWeb() ? 500 : null,

  }
})
export default SetNewPassword;