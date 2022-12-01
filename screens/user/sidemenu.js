import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { logout } from '../../utils/redux/auth/actions'
import { useDispatch, useSelector } from 'react-redux'

export default function Sidemenu({navigation}) {
    const dispatch = useDispatch()
    const onLogout = () => {
        dispatch(logout())
      }
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginBottom: 20, top: 50, alignItems: 'flex-end', marginRight: 20}}>
                <Image source= {require("../../assets/close.png")}/>
            </TouchableOpacity>
      <SafeAreaView style={styles.menu}>
            <TouchableOpacity style={{flexDirection: 'row', marginBottom: 20}} >
                <Image source= {require("../../assets/recom.png")}/>
                <Text style={styles.menuItem}>My Recommendations</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection: 'row', marginBottom: 20}} onPress={() => navigation.navigate('ManualMeasurement')}>
            <Image source= {require("../../assets/measure.png")}/>
                <Text style={styles.menuItem}>My Measurements</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => navigation.navigate('Profile')}>
            <Image source= {require("../../assets/profile.png")}/>
                <Text style={styles.menuItem}>Profile</Text>
            </TouchableOpacity>
            
        </SafeAreaView>

        <View style={{alignItems: 'flex-end', marginRight: 20, top: "23%"}}>
            <TouchableOpacity >
                <Text style={styles.menuItems}>Brands</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text style={styles.menuItems}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Privacy')}>
                <Text style={styles.menuItems}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
                <Text style={styles.menuItems}>Terms of Use</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('FAQ')}>
                <Text style={styles.menuItems}>FAQ</Text>
            </TouchableOpacity>
           
            <TouchableOpacity onPress={() => onLogout()}>
                <Text style={styles.menuItems}>Log Out</Text>
            </TouchableOpacity>
            
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    menu: {
        width: "100%",
        marginLeft: 10,
        marginBottom: 40,
        top: "20%"
    },
    menuItems: {
        color: '#fff',
        fontSize: 20,
        marginTop: (Platform.OS === 'ios') ? 20 : 10,
        marginLeft: 20
    },
    menuItem: {
        color: '#fff',
        fontSize: 20,
        marginTop: 5,
        marginLeft: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#0078ED'
    },


});
