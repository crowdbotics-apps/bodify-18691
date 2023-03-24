import React from 'react'
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header({navs}) {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View style={styles.container}>
            <View style={styles.sideIcon}>
                <TouchableOpacity> 
                    <Image source= {require("../../assets/search.png")}/>
                </TouchableOpacity>   
                </View> 
                <Image source= {require("../../assets/logo.png")}/>
               <TouchableOpacity onPress={() => navs ? navs.toggleDrawer() : navigation.openDrawer()}><Image style={styles.nav} source= {require("../../assets/side.png")}/></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10
    },

    sideIcon: {
        right: 30,
        top: -5
    },

    nav: {
        top: 5,
        left: 20
    },
})
