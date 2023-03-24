import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import React, {useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header2 from './header2';

export default function FAQ({navigation}) {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    
  return (
      <View style={{flex: 1, backgroundColor: "#fff"}}>
        <SafeAreaView>
             <Header2 navs={navigation} />
             <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.signText}>FAQ</Text>
            <Text style={[styles.signText, {fontSize: 20, marginTop: 0}]}>Questions we get often</Text>
            <View style={{marginLeft: 20, marginRight: 20, marginTop: 30}}>
            
            <View style={{marginTop: 0}}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={{fontSize: 16, fontWeight: "600"}}>What happens to my pictures?</Text>
                <Icon name={show1 ? "caret-up" : "caret-down"} size={20} color="#979797" 
                                style={{
                                    //left: 280,
                                    //padding: 40,
                                    //alignSelf: "center",
                                    //position: "absolute"
                                    }}
                                    onPress={() => setShow1(!show1)}/>
            </View>
            {show1 ? 
            <Text style={{fontSize: 16, color: "#979797", marginTop: 15}}>Once we get your measurements, the images you upload are erased. We don’t ever save them. We do, however, save your Bodify measurements. </Text>
            : null }
            </View>

            <View style={{marginTop: 30}}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={{fontSize: 16, fontWeight: "600"}}>Do you share my information?</Text>
                <Icon name={show1 ? "caret-up" : "caret-down"} size={20} color="#979797" 
                                style={{
                                    //left: 280,
                                    //padding: 40,
                                    //alignSelf: "center",
                                    //position: "absolute"
                                    }}
                                    onPress={() => setShow2(!show2)}/>
            </View>
            {show2 ? 
            <Text style={{fontSize: 16, color: "#979797", marginTop: 15}}>In cases where it improves your experience or for Bodify business purposes, we do share certain information about recommendations and transactions; but not about you. </Text>
            : null }
            </View>

            <View style={{marginTop: 30}}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={{fontSize: 16, fontWeight: "600"}}>How often do I need to update my measurements?
</Text>
                <Icon name={show3 ? "caret-up" : "caret-down"} size={20} color="#979797" 
                                style={{
                                    //left: 280,
                                    //padding: 40,
                                    //alignSelf: "center",
                                    //position: "absolute"
                                    }}
                                    onPress={() => setShow3(!show3)}/>
            </View>
            {show3 ? 
            <Text style={{fontSize: 16, color: "#979797", marginTop: 15}}>As often as you’d like. Or not. Really, it’s up to you. We recommend updating if any significant physical changes to your body occur or if you notice our recommendations aren’t fitting quite right. 
            </Text>
            : null }
            </View>

            <View style={{marginTop: 30}}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={{fontSize: 16, fontWeight: "600"}}>Can I share my recommendations with my friends?
</Text>
                <Icon name={show4 ? "caret-up" : "caret-down"} size={20} color="#979797" 
                                style={{
                                    //left: 280,
                                    //padding: 40,
                                    //alignSelf: "center",
                                    //position: "absolute"
                                    }}
                                    onPress={() => setShow4(!show4)}/>
            </View>
            {show4 ? 
            <Text style={{fontSize: 16, color: "#979797", marginTop: 15}}>Not yet, but that’s coming soon!

            </Text>
            : null }
            </View>

            <View style={{marginTop: 30}}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={{fontSize: 16, fontWeight: "600"}}>I know about some cool brands you should partner with! How can I tell you about them?

</Text>
                <Icon name={show5 ? "caret-up" : "caret-down"} size={20} color="#979797" 
                                style={{
                                    //left: 280,
                                    //padding: 40,
                                    //alignSelf: "center",
                                    //position: "absolute"
                                    }}
                                    onPress={() => setShow5(!show5)}/>
            </View>
            {show5 ? 
            <Text style={{fontSize: 16, color: "#979797", marginTop: 15}}>We’re building out brand partner suggestion tool, but in the meantime drop us a line at <Text style={{color: "#0078ED"}}>hello@bodify.info</Text> and we’ll check them out!

            </Text>
            : null }
            </View>

            

           


            </View> 
                

            <View style={{marginBottom: 60}}></View>
          
          

            </ScrollView>
            </View>
        </SafeAreaView>
     </View>
  );
}

const styles = StyleSheet.create({
    signText: {
        marginLeft: 20,
        marginTop: 40,
        marginBottom: 10,
        fontSize: 45,
        color: "#0078ED"
    },
    container: {
        //flex: 1,
        justifyContent: "center",
        //alignItems: 'flex-start',
        backgroundColor: "#fff",
      },
      label: {
        //width: 300,
        //height: 25,
        fontSize: 16,
        color: '#000',
        marginBottom: 10
    },
    underline: {
        //textDecorationLine: 'underline',
        color: '#8C8C8C',
        fontSize: 12,
        marginTop: 5,
        //right: 20,
        //height: 25
    },

    inputView: {
        marginTop: 10,
        marginBottom: 40,
        marginLeft: 20
    },

    TextInput: {
        borderColor: '#fff',
        borderBottomColor: '#979797',
        borderWidth: 1,
        fontSize: 16,
        width: '90%',
        height: 60,
        color: "#000"
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 15,
        marginLeft: 20
    },
    optionTab: {
        width: "100%", 
        height: 60,
        //padding: 20,
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
          alignItems: 'center',
      },

})
