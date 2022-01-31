import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import React, {useContext} from 'react';
import { AuthContext } from '../../utils/context';

export default function Sidemenu({navigation}) {
    const {signOut} = useContext(AuthContext)
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginBottom: 20, top: 50, alignItems: 'flex-end', marginRight: 20}}>
                <Image source= {require("../../assets/close.png")}/>
            </TouchableOpacity>
      <SafeAreaView style={styles.menu}>
            <TouchableOpacity style={{flexDirection: 'row', marginBottom: 20}}>
                <Image source= {require("../../assets/recom.png")}/>
                <Text style={styles.menuItem}>My Recommendations</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection: 'row', marginBottom: 20}}>
            <Image source= {require("../../assets/measure.png")}/>
                <Text style={styles.menuItem}>My Measurements</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection: 'row'}}>
            <Image source= {require("../../assets/profile.png")}/>
                <Text style={styles.menuItem}>Profile</Text>
            </TouchableOpacity>
            
        </SafeAreaView>

        <View style={{alignItems: 'flex-end', marginRight: 20, top: "30%"}}>
            <TouchableOpacity >
                <Text style={styles.menuItems}>Brands</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text style={styles.menuItems}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text style={styles.menuItems}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text style={styles.menuItems}>Terms of Use</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text style={styles.menuItems}>FAQ</Text>
            </TouchableOpacity>
           
            <TouchableOpacity onPress={() => signOut()}>
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