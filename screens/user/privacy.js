import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import React, {useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header2 from './header2';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {Picker} from '@react-native-picker/picker';
import { BASE_URL } from '../../utils/http';

export default function Privacy({navigation, route}) {
    const [show, setShow] = useState(false)
    
  return (
      <View style={{flex: 1, backgroundColor: "#fff"}}>
        <SafeAreaView>
             <Header2 showDrawer={route?.params?.root ? false : true} />
             <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.signText}>Privacy {'\n'}Policy</Text>
            <View style={{marginLeft: 20, marginRight: 20, marginTop: 10}}>
            <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>
            Protecting your private information is our priority. This Statement of Privacy applies to www.bodify.io, and Bodify Inc and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to Bodify Inc include www.bodify.io and Bodify. The Bodify website is a ecommerce site. By using the Bodify website, you consent to the data practices described in this statement.</Text>
            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Collection of your Personal Information</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>In order to better provide you with products and services offered, Bodify may collect personally identifiable information, such as your: 
                {'\n'}{'\n'}    - First and Last Name 
                {'\n'}    - E-mail Address 
                {'\n'}    - Date of Birth 
                {'\n'}    - Transaction Details
                {'\n'}{'\n'}Bodify may also collect anonymous demographic information, which is not unique to you, such as your: 
                {'\n'}{'\n'}    - Gender 
                {'\n'}{'\n'}Please keep in mind that if you directly disclose personally identifiable information or personally sensitive data through Bodify's public message boards, this information may be collected and used by others. 
                {'\n'}{'\n'}We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services. These may include: (a) registering for an account; (b) entering a sweepstakes or contest sponsored by us or one of our partners; (c) signing up for special offers from selected third parties; (d) sending us an email message; (e) submitting your credit card or other payment information when ordering and purchasing products and services. To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal or non-personal information in the future. </Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Use of your Personal Information</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>Bodify collects and uses your personal information to operate and deliver the services you have requested. 
                {'\n'}{'\n'}Bodify may also use your personally identifiable information to inform you of other products or services available from Bodify and its affiliates. 
                {'\n'}{'\n'}Sharing Information with Third Parties Bodify does not sell, rent or lease its customer lists to third parties. 
                {'\n'}{'\n'}Bodify may, from time to time, contact you on behalf of external business partners about a particular offering that may be of interest to you. In those cases, your unique personally identifiable information (e-mail, name, address, telephone number) is not transferred to the third party. Bodify may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to Bodify, and they are required to maintain the confidentiality of your information. 
                {'\n'}{'\n'}Bodify may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on Bodify or the site; (b) protect and defend the rights or property of Bodify; and/or (c) act under exigent circumstances to protect the personal safety of users of Bodify, or the public. </Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Tracking User Behavior</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>Bodify may keep track of the websites and pages our users visit within Bodify, in order to determine what Bodify services are the most popular. This data is used to deliver customized content and advertising within Bodify to customers whose behavior indicates that they are interested in a particular subject area. </Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Automatically Collected Information</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>Information about your computer hardware and software may be automatically collected by Bodify. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the Bodify website. </Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Use of Cookies</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>The Bodify website may use "cookies" to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you. 
                {'\n'}{'\n'}One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the Web server that you have returned to a specific page. For example, if you personalize Bodify pages, or register with Bodify site or services, a cookie helps Bodify to recall your specific information on subsequent visits. This simplifies the process of recording your personal information, such as billing addresses, shipping addresses, and so on. When you return to the same Bodify website, the information you previously provided can be retrieved, so you can easily use the Bodify features that you customized. 
                {'\n'}{'\n'}You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of the Bodify services or websites you visit.</Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Links</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.</Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Security of your Personal Information</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>Bodify secures your personal information from unauthorized access, use, or disclosure. Bodify uses the following methods for this purpose: 
                {'\n'}{'\n'}    - SSL Protocol 
                {'\n'}{'\n'}When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol. 
                {'\n'}{'\n'}We strive to take appropriate security measures to protect against unauthorized access to or alteration of your personal information. Unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, you acknowledge that: (a) there are security and privacy limitations inherent to the Internet which are beyond our control; and (b) security, integrity, and privacy of any and all information and data exchanged between you and us through this Site cannot be guaranteed.</Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Right to Deletion</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will: 
                {'\n'}{'\n'}• Delete your personal information from our records; and 
                {'\n'}• Direct any service providers to delete your personal information from their records. 
                {'\n'}{'\n'}Please note that we may not be able to comply with requests to delete your personal information if it is necessary to: 
                {'\n'}{'\n'}• Complete the transaction for which the personal information was collected, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, provide a good or service requested by you, or reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform a contract between you and us; 
                {'\n'}• Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible for that activity; 
                {'\n'}• Debug to identify and repair errors that impair existing intended functionality; 
                {'\n'}• Exercise free speech, ensure the right of another consumer to exercise his or her right of free speech, or exercise another right provided for by law; 
                {'\n'}• Comply with the California Electronic Communications Privacy Act; 
                {'\n'}• Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when our deletion of the information is likely to render impossible or seriously impair the achievement of such research, provided we have obtained your informed consent; 
                {'\n'}• Enable solely internal uses that are reasonably aligned with your expectations based on your relationship with us; 
                {'\n'}• Comply with an existing legal obligation; or 
                {'\n'}• Otherwise use your personal information, internally, in a lawful manner that is compatible with the context in which you provided the information.</Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Children Under Thirteen </Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>Bodify does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website.</Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Disconnecting your Bodify Account from Third Party Websites </Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>You will be able to connect your Bodify account to third party accounts. BY CONNECTING YOUR BODIFY ACCOUNT TO YOUR THIRD PARTY ACCOUNT, YOU ACKNOWLEDGE AND AGREE THAT YOU ARE CONSENTING TO THE CONTINUOUS RELEASE OF INFORMATION ABOUT YOU TO OTHERS (IN ACCORDANCE WITH YOUR PRIVACY SETTINGS ON THOSE THIRD PARTY SITES). IF YOU DO NOT WANT INFORMATION ABOUT YOU, INCLUDING PERSONALLY IDENTIFYING INFORMATION, TO BE SHARED IN THIS MANNER, DO NOT USE THIS FEATURE. You may disconnect your account from a third party account at any time. Users may learn how to disconnect their accounts from third-party websites by visiting their "My Account" page. Users may also contact us via email.</Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>E-mail Communications </Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>From time to time, Bodify may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication. In order to improve our Services, we may receive a notification when you open an email from Bodify or click on a link therein. 
                {'\n'}{'\n'}If you would like to stop receiving marketing or promotional communications via email from Bodify, you may opt out of such communications by clicking on the UNSUBSCRIBE button.</Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>External Data Storage Sites</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>We may store your data on servers provided by third party hosting vendors with whom we have contracted.</Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Changes to this Statement</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>Bodify reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our website, and/or by updating any privacy information. Your continued use of the website and/or Services available after such modifications will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy.</Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Contact Information</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>Bodify welcomes your questions or comments regarding this Statement of Privacy. If you believe that Bodify has not adhered to this Statement, please contact Bodify at: 
                {'\n'}{'\n'}Bodify Inc 
                {'\n'}5440 W. 110th St Suite 300 
                {'\n'}Overland Park, Kansas 66211 
                
                </Text>
                <Text style={{fontSize: 16, color: '#979797'}}>{'\n'}Email Address: {'\n'}<Text style={{color: "#0078ED"}} onPress={() => Linking.openURL('mailto:hello@bodify.info')}>hello@bodify.info </Text></Text>
                <Text style={{fontSize: 16, color: '#979797'}}>{'\n'}Effective as of May 01, 2021 </Text>
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
        marginBottom: 20,
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
