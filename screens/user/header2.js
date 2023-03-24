import React from 'react'
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header2({navs, showDrawer=true}) {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View style={styles.container}>
            <View style={styles.back}>
                <TouchableOpacity onPress={() => navs ? navs.goBack() : navigation.goBack()}> 
                    <Image source= {require("../../assets/back.png")}/>
                </TouchableOpacity>   
                </View> 
                <Image source= {require("../../assets/logo.png")} style={{left: 20}}/>
               {showDrawer ? 
               <TouchableOpacity onPress={() => navs ? navs.toggleDrawer() : navigation.openDrawer()}><Image style={styles.nav} source= {require("../../assets/side.png")}/></TouchableOpacity>
                :
                <View />
                }
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

    back: {
        right: 30,
        top: 2
    },

    nav: {
        top: 5,
        left: 40
    },
})
