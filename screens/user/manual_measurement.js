import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import React, {useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header2 from './header2';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {Picker} from '@react-native-picker/picker';
import { BASE_URL } from '../../utils/http';

export default function ManualMeasurement({navigation}) {
    const [show, setShow] = useState(false)
    const [drop, setDrop] = useState(false)
    const pickerRef = useRef()
    const [selectedItem, setSelectedItem] = useState("Select one");
    const [data, setData] = useState({
        fav_brands: ''
      })

      const [issue_one, setIssueOne] = useState({
        gap_issue: false,
        support_issue: false,
        length_issue: false,
        stiffness: false,
        shape_issue: false,
        something_else: ''
      })
      const [issue_two, setIssueTwo] = useState({
        gap_issue: false,
        support_issue: false,
        length_issue: false,
        stiffness: false,
        shape_issue: false,
        something_else: ''
      })
     
    const handleIssue = (type, val) => {
       // console.log(issue_two)
        if (type == 'one') {
            if (val == 'gap') {
                if (issue_one.gap_issue == false) {
                    setIssueOne({...issue_one, gap_issue: true})
                } else {
                    setIssueOne({...issue_one, gap_issue: false})
                }
            } else if (val == 'support') {
                if (issue_one.support_issue == false) {
                    setIssueOne({...issue_one, support_issue: true})
                } else {
                    setIssueOne({...issue_one, support_issue: false})
                }
            } else if (val == 'length') {
                if (issue_one.length_issue == false) {
                    setIssueOne({...issue_one, length_issue: true})
                } else {
                    setIssueOne({...issue_one, length_issue: false})
                }
            } else if (val == 'stiff') {
                if (issue_one.stiffness == false) {
                    setIssueOne({...issue_one, stiffness: true})
                } else {
                    setIssueOne({...issue_one, stiffness: false})
                }
            } else if (val == 'shape') {
                if (issue_one.shape_issue == false) {
                    setIssueOne({...issue_one, shape_issue: true})
                } else {
                    setIssueOne({...issue_one, shape_issue: false})
                }
            }
        } else {
            if (val == 'gap') {
                if (issue_one.gap_issue == false) {
                    setIssueTwo({...issue_one, gap_issue: true})
                } else {
                    setIssueTwo({...issue_one, gap_issue: false})
                }
            } else if (val == 'support') {
                if (issue_one.support_issue == false) {
                    setIssueTwo({...issue_one, support_issue: true})
                } else {
                    setIssueTwo({...issue_one, support_issue: false})
                }
            } else if (val == 'length') {
                if (issue_one.length_issue == false) {
                    setIssueTwo({...issue_one, length_issue: true})
                } else {
                    setIssueTwo({...issue_one, length_issue: false})
                }
            } else if (val == 'stiff') {
                if (issue_one.stiffness == false) {
                    setIssueTwo({...issue_one, stiffness: true})
                } else {
                    setIssueTwo({...issue_one, stiffness: false})
                }
            } else if (val == 'shape') {
                if (issue_one.shape_issue == false) {
                    setIssueTwo({...issue_one, shape_issue: true})
                } else {
                    setIssueTwo({...issue_one, shape_issue: false})
                }
            }
        }
    }
      

    const handleManual = () => {
        //navigation.navigate("Match")
        //console.log(data)
        let body = JSON.stringify({
            'jean_size': selectedItem,
            'fav_brands': data.fav_brands,
            'shopping_issue_one': issue_one,
            'shopping_issue_two': issue_two,
            'user': 2
          })
          console.log(body)
      
          fetch(`${BASE_URL}/measurements/manual/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: body
          }).then(res => {
            if(res.ok) {
              return res.json()
            } else {
                Alert.alert('Sorry!', 'Unable to get measurements.', [{text: 'Okay'}])
              throw res.json()
            }
          }).then(json => {
            navigation.navigate('Match')
          }).catch(error => {
            console.log(error)
          })
    }
  return (
      <View style={styles.container}>
        <SafeAreaView>
             <Header2 />
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.signText}>Enter{"\n"}My Measurements{"\n"}Manually </Text>
            <TouchableOpacity onPress={() => setShow(!show)}>
            <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 24, color: (show) ? "#0078ED":'#000', marginLeft: 20}}>I don't know {"\n"}my measurements</Text>
                    <Icon name="caret-down" size={30} color="#000" 
                    style={{
                        left: 280,
                        padding: 40,
                        alignSelf: "center",
                        position: "absolute"
                        }}
                        onPress={() => setShow(!show)}/>
                    </View>
                    </TouchableOpacity>
            
                    {show && (
                        <View style={{marginTop: 50}}>

                            <View style={styles.inputView}>
                                <Text style={styles.label}>What is your normal jeans size?</Text>
                                <View style={{flexDirection: 'row'}}>
                                <TextInput
                                style={styles.TextInput}
                                onChangeText={(val) => setData({...data, dob: val})}
                                placeholder=''
                                placeholderTextColor={'#001F47'}
                                value={selectedItem}
                                editable={false}
                                /> 
                                <Icon name="caret-down" size={20} color="#979797" 
                                style={{
                                    left: 280,
                                    padding: 40,
                                    alignSelf: "center",
                                    position: "absolute"
                                    }}
                                    onPress={() => setDrop(!drop)}/>
                                </View>
                            
                                {drop && (
                                    <Picker
                                    ref={pickerRef}
                                    selectedValue={selectedItem}
                                    onValueChange={(itemValue, itemIndex) =>
                                      setSelectedItem(itemValue)
                                    }>
                                    <Picker.Item label="Zara" value="Zara" />
                                    <Picker.Item label="Levi" value="Levi" />
                                    <Picker.Item label="Tommy" value="Tommy" />
                                  </Picker> 
                                 )}   
                            </View>

                            <View style={styles.inputView}>
                                <Text style={styles.label}>Think about your favorite jeans. {"\n"}What brands are they?</Text>
                                <TextInput
                                style={styles.TextInput}
                                onChangeText={(val) => setData({...data, fav_brands: val})}
                                //onEndEditing={(e)=>handleTextChange(e.nativeEvent.text, 'first_name')}
                                autoCapitalize='none'
                                placeholder='Type here'
                                placeholderTextColor='#979797'
                                />
                                <View style={{marginTop: 20, flexDirection:"row"}}>
                                    <Text style={{color: "#979797"}}>No Favs</Text>
                                    <BouncyCheckbox 
                                    iconStyle={{ borderColor: "#979797", left:60 }}
                                    fillColor="#979797"
                                    size={18}
                                    />
                                </View>
                            </View>

                            <View style={styles.inputView}>
                                <Text style={styles.label}>What is your number one issue with {"\n"}shopping for jeans?</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{marginTop: 10, marginBottom: 10, width: "50%", flexDirection:"row"}}>
                                        <Text style={{color: "#979797"}}>Gap to waist</Text>
                                        <BouncyCheckbox  onPress={() => handleIssue('one', 'gap')}
                                        iconStyle={{ borderColor: "#979797", left: 40 }}
                                        fillColor="#979797"
                                        size={18}
                                        />
                                    </View>
                                    <View style={{marginTop: 10, marginBottom: 10, flexDirection:"row"}}>
                                        <Text style={{color: "#979797"}}>Lack of support</Text>
                                        <BouncyCheckbox onPress={() => handleIssue('one', 'support')}
                                        iconStyle={{ borderColor: "#979797", left: 40}}
                                        fillColor="#979797"
                                        size={18}
                                        />
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{marginTop: 10, marginBottom: 10, width: "50%", flexDirection:"row"}}>
                                        <Text style={{color: "#979797"}}>Too short/long</Text>
                                        <BouncyCheckbox onPress={() => handleIssue('one', 'length')}
                                        iconStyle={{ borderColor: "#979797", left:28 }}
                                        fillColor="#979797"
                                        size={18}
                                        />
                                    </View>
                                    <View style={{marginTop: 10, marginBottom: 10, flexDirection:"row"}}>
                                        <Text style={{color: "#979797"}}>Too stiff</Text>
                                        <BouncyCheckbox onPress={() => handleIssue('one', 'stiff')}
                                        iconStyle={{ borderColor: "#979797", left:90 }}
                                        fillColor="#979797"
                                        size={18}
                                        />
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{marginTop: 10, marginBottom: 10, width: "50%", flexDirection:"row"}}>
                                        <Text style={{color: "#979797"}}>Don’t flatter my {"\n"}shape</Text>
                                        <BouncyCheckbox onPress={() => handleIssue('one', 'shape')}
                                        iconStyle={{ borderColor: "#979797", left:18 }}
                                        fillColor="#979797"
                                        size={18}
                                        />
                                    </View>
                                    <View style={{marginTop: 10, marginBottom: 10, flexDirection:"row"}}>
                                        <Text style={{color: "#979797"}}>Lack of support</Text>
                                        <BouncyCheckbox  
                                        iconStyle={{ borderColor: "#979797", left:42 }}
                                        fillColor="#979797"
                                        size={18}
                                        />
                                    </View>
                                </View>
                                <View style={{marginTop: 10, marginBottom: 10, flexDirection:"row"}}>
                                        <Text style={{color: "#979797"}}>Something else</Text>
                                        <BouncyCheckbox
                                        iconStyle={{ borderColor: "#979797", left:25 }}
                                        fillColor="#979797"
                                        size={18}
                                        />
                                    </View>
                                
                                <TextInput
                                style={styles.TextInput}
                                onChangeText={(val) => setIssueOne({...issue_one, something_else: val})}
                                autoCapitalize='none'
                                placeholder='Entry text'
                                placeholderTextColor='#979797'
                                />

                                
                                
                            </View>


                            <View style={styles.inputView}>
                                <Text style={styles.label}>What is your number two issue with {"\n"}shopping for jeans?</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{marginTop: 10, marginBottom: 10, width: "50%", flexDirection:"row"}}>
                                        <Text style={{color: "#979797"}}>Gap to waist</Text>
                                        <BouncyCheckbox onPress={() => handleIssue('two', 'gap')}
                                        iconStyle={{ borderColor: "#979797", left: 40 }}
                                        fillColor="#979797"
                                        size={18}
                                        />
                                    </View>
                                    <View style={{marginTop: 10, marginBottom: 10, flexDirection:"row"}}>
                                        <Text style={{color: "#979797"}}>Lack of support</Text>
                                        <BouncyCheckbox onPress={() => handleIssue('two', 'support')}
                                        iconStyle={{ borderColor: "#979797", left: 40}}
                                        fillColor="#979797"
                                        size={18}
                                        />
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{marginTop: 10, marginBottom: 10, width: "50%", flexDirection:"row"}}>
                                        <Text style={{color: "#979797"}}>Too short/long</Text>
                                        <BouncyCheckbox onPress={() => handleIssue('two', 'length')}
                                        iconStyle={{ borderColor: "#979797", left:28 }}
                                        fillColor="#979797"
                                        size={18}
                                        />
                                    </View>
                                    <View style={{marginTop: 10, marginBottom: 10, flexDirection:"row"}}>
                                        <Text style={{color: "#979797"}}>Too stiff</Text>
                                        <BouncyCheckbox onPress={() => handleIssue('two', 'stiff')}
                                        iconStyle={{ borderColor: "#979797", left:90 }}
                                        fillColor="#979797"
                                        size={18}
                                        />
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{marginTop: 10, marginBottom: 10, width: "50%", flexDirection:"row"}}>
                                        <Text style={{color: "#979797"}}>Don’t flatter my {"\n"}shape</Text>
                                        <BouncyCheckbox onPress={() => handleIssue('two', 'shape')}
                                        iconStyle={{ borderColor: "#979797", left:18 }}
                                        fillColor="#979797"
                                        size={18}
                                        />
                                    </View>
                                    <View style={{marginTop: 10, marginBottom: 10, flexDirection:"row"}}>
                                        <Text style={{color: "#979797"}}>Lack of support</Text>
                                        <BouncyCheckbox  
                                        iconStyle={{ borderColor: "#979797", left:42 }}
                                        fillColor="#979797"
                                        size={18}
                                        />
                                    </View>
                                </View>
                                <View style={{marginTop: 10, marginBottom: 10, flexDirection:"row"}}>
                                        <Text style={{color: "#979797"}}>Something else</Text>
                                        <BouncyCheckbox 
                                        iconStyle={{ borderColor: "#979797", left:25 }}
                                        fillColor="#979797"
                                        size={18}
                                        />
                                    </View>
                                
                                <TextInput
                                style={styles.TextInput}
                                onChangeText={(val) => setIssueTwo({...issue_one, something_else: val})}
                                autoCapitalize='none'
                                placeholder='Entry text'
                                placeholderTextColor='#979797'
                                />

                                
                                
                            </View>


                            
                    </View>
    
                     )}   
            
           
            <View style={styles.btn}>
                    <TouchableOpacity onPress={() => handleManual()}><Text style={{width: 250, 
                        height: 60,
                        padding: 20,
                        textAlign: "center",
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: "normal",
                        backgroundColor: (show) ? "#F68974": "#979797",
                        overflow: "hidden",
                        borderRadius: 30}}>Get My Measurements</Text></TouchableOpacity>
            </View>
            <View style={{alignItems: 'center', marginTop: 30, marginBottom: 20}}>
                    <TouchableOpacity onPress={() => navigation.navigate("PhotoMeasurement")}><Text style={{color: "#8C8C8C"}}>Get Photo Measurements</Text></TouchableOpacity>
            </View>

           

            </ScrollView>
            
        </SafeAreaView>
     </View>
  );
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
        alignItems: 'flex-start',
        backgroundColor: "#fff"
      },
      label: {
        //width: 300,
        //height: 25,
        fontSize: 16,
        color: '#000',
        marginBottom: 10
    },
    underline: {
        textDecorationLine: 'underline',
        color: '#8C8C8C',
        fontSize: 16,
        right: 20,
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
        width: '100%',
        height: 60,
        color: "#000"
    },
    checkboxContainer: {
        flexDirection: 'row',
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
          alignItems: 'center'
      },

})
