import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import React, {useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header2 from './header2';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {Picker} from '@react-native-picker/picker';
import { BASE_URL } from '../../utils/http';

export default function Terms({navigation}) {
    const [show, setShow] = useState(false)
    
  return (
      <View style={{flex: 1, backgroundColor: "#fff"}}>
        <SafeAreaView>
             <Header2 />
             <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.signText}>Terms and {'\n'}Conditions</Text>
            <View style={{marginLeft: 20, marginRight: 20, marginTop: 0}}>
            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Agreement between User and www.bodify.io</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>Welcome to www.bodify.io. The www.bodify.io website (the "Site") is comprised of various web pages operated by Bodify Inc. ("Bodify"). www.bodify.io is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein (the "Terms"). Your use of www.bodify.io constitutes your agreement to all such Terms. Please read these terms carefully, and keep a copy of them for your reference. 
                {'\n'}{'\n'}www.bodify.io is a recommendation Site. 
                {'\n'}{'\n'}We provide brand recommendations to our users who are shopping for clothes online. </Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Privacy</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>Your use of www.bodify.io is subject to Bodify's Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.</Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Electronic Communications</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>Visiting www.bodify.io or sending emails to Bodify constitutes electronic communications. You consent to receive electronic communications and you agree that all agreements, notices, disclosures and other communications that we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communications be in writing. </Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Your Account</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>If you use this site, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password. You may not assign or otherwise transfer your account to any other person or entity. You acknowledge that Bodify is not responsible for third party access to your account that results from theft or misappropriation of your account. Bodify and its associates reserve the right to refuse or cancel service, terminate accounts, or remove or edit content in our sole discretion.</Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Children Under Thirteen</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>Bodify does not knowingly collect, either online or offline, personal information from persons under the age of thirteen. If you are under 18, you may use www.bodify.io only with permission of a parent or guardian.</Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Links to Third Party Sites/ Third Party Services</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>www.bodify.io may contain links to other websites ("Linked Sites"). The Linked Sites are not under the control of Bodify and Bodify is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. Bodify is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by Bodify of the site or any association with its operators. 
                {'\n'}{'\n'}Certain services made available via www.bodify.io are delivered by third party sites and organizations. By using any product, service or functionality originating from the www.bodify.io domain, you hereby acknowledge and consent that Bodify may share such information and data with any third party with whom Bodify has a contractual relationship to provide the requested product, service or functionality on behalf of www.bodify.io users and customers. </Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>No Unlawful or Prohibited Use /Intellectual Property</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>You are granted a non-exclusive, non-transferable, revocable license to access and use www.bodify.io strictly in accordance with these terms of use. As a condition of your use of the Site, you warrant to Bodify that you will not use the Site for any purpose that is unlawful or prohibited by these Terms. You may not use the Site in any manner which could damage, disable, overburden, or impair the Site or interfere with any other party's use and enjoyment of the Site. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through the Site.
                {'\n'}{'\n'}All content included as part of the Service, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Site, is the property of Bodify or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights. You agree to observe and abide by all copyright and other proprietary notices, legends or other restrictions contained in any such content and will not make any changes thereto. 
                {'\n'}{'\n'}You will not modify, publish, transmit, reverse engineer, participate in the transfer or sale, create derivative works, or in any way exploit any of the content, in whole or in part, found on the Site. Bodify content is not for resale. Your use of the Site does not entitle you to make any unauthorized use of any protected content, and in particular you will not delete or alter any proprietary rights or attribution notices in any content. You will use protected content solely for your personal use, and will make no other use of the content without the express written permission of Bodify and the copyright owner. You agree that you do not acquire any ownership rights in any protected content. We do not grant you any licenses, express or implied, to the intellectual property of Bodify or our licensors except as expressly authorized by these Terms.</Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Use of Communication Services </Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>The Site may contain bulletin board services, chat areas, news groups, forums, communities, personal web pages, calendars, and/or other message or communication facilities designed to enable you to communicate with the public at large or with a group (collectively, "Communication Services"). You agree to use the Communication Services only to post, send and receive messages and material that are proper and related to the particular Communication Service.
                {'\n'}{'\n'}By way of example, and not as a limitation, you agree that when using a Communication Service, you will not: defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as rights of privacy and publicity) of others; publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory, infringing, obscene, indecent or unlawful topic, name, material or information; upload files that contain software or other material protected by intellectual property laws (or by rights of privacy of publicity) unless you own or control the rights thereto or have received all necessary consents; upload files that contain viruses, corrupted files, or any other similar software or programs that may damage the operation of another's computer; advertise or offer to sell or buy any goods or services for any business purpose, unless such Communication Service specifically allows such messages; conduct or forward surveys, contests, pyramid schemes or chain letters; download any file posted by another user of a Communication Service that you know, or reasonably should know, cannot be legally distributed in such manner; falsify or delete any author attributions, legal or other proper notices or proprietary designations or labels of the origin or source of software or other material contained in a file that is uploaded; restrict or inhibit any other user from using and enjoying the Communication Services; violate any code of conduct or other guidelines which may be applicable for any particular Communication Service; harvest or otherwise collect information about others, including e-mail addresses, without their consent; violate any applicable laws or regulations.
                {'\n'}{'\n'}Bodify has no obligation to monitor the Communication Services. However, Bodify reserves the right to review materials posted to a Communication Service and to remove any materials in its sole discretion. Bodify reserves the right to terminate your access to any or all of the Communication Services at any time without notice for any reason whatsoever.
                {'\n'}{'\n'}Bodify reserves the right at all times to disclose any information as necessary to satisfy any applicable law, regulation, legal process or governmental request, or to edit, refuse to post or to remove any information or materials, in whole or in part, in Bodify's sole discretion. 
                {'\n'}{'\n'}Always use caution when giving out any personally identifying information about yourself or your children in any Communication Service. Bodify does not control or endorse the content, messages or information found in any Communication Service and, therefore, Bodify specifically disclaims any liability with regard to the Communication Services and any actions resulting from your participation in any Communication Service. Managers and hosts are not authorized Bodify spokespersons, and their views do not necessarily reflect those of Bodify.
                {'\n'}{'\n'}Materials uploaded to a Communication Service may be subject to posted limitations on usage, reproduction and/or dissemination. You are responsible for adhering to such limitations if you upload the materials.
                </Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Materials Provided to www.bodify.io or Posted on Any Bodify Web Page</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>Bodify does not claim ownership of the materials you provide to www.bodify.io (including feedback and suggestions) or post, upload, input or submit to any Bodify Site or our associated services (collectively "Submissions"). However, by posting, uploading, inputting, providing or submitting your Submission you are granting Bodify, our affiliated companies and necessary sublicensees permission to use your Submission in connection with the operation of their Internet businesses including, without limitation, the rights to: copy, distribute, transmit, publicly display, publicly perform, reproduce, edit, translate and reformat your Submission; and to publish your name in connection with your Submission.
                {'\n'}{'\n'}No compensation will be paid with respect to the use of your Submission, as provided herein. Bodify is under no obligation to post or use any Submission you may provide and may remove any Submission at any time in Bodify's sole discretion.
                {'\n'}{'\n'}By posting, uploading, inputting, providing or submitting your Submission you warrant and represent that you own or otherwise control all of the rights to your Submission as described in this section including, without limitation, all the rights necessary for you to provide, post, upload, input or submit the Submissions. 
                </Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Third Party Accounts </Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>You will be able to connect your Bodify account to third party accounts. By connecting your Bodify account to your third party account, you acknowledge and agree that you are consenting to the continuous release of information about you to others (in accordance with your privacy settings on those third party sites). If you do not want information about you to be shared in this manner, do not use this feature.</Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>International Users </Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>The Service is controlled, operated and administered by Bodify from our offices within the USA. If you access the Service from a location outside the USA, you are responsible for compliance with all local laws. You agree that you will not use the Bodify Content accessed through www.bodify.io in any country or in any manner prohibited by any applicable laws, restrictions or regulations. </Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Indemnification</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>You agree to indemnify, defend and hold harmless Bodify, its officers, directors, employees, agents and third parties, for any losses, costs, liabilities and expenses (including reasonable attorney's fees) relating to or arising out of your use of or inability to use the Site or services, any user postings made by you, your violation of any terms of this Agreement or your violation of any rights of a third party, or your violation of any applicable laws, rules or regulations. Bodify reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with Bodify in asserting any available defenses.</Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Arbitration</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>In the event the parties are not able to resolve any dispute between them arising out of or concerning these Terms and Conditions, or any provisions hereof, whether in contract, tort, or otherwise at law or in equity for damages or any other relief, then such dispute shall be resolved only by final and binding arbitration pursuant to the Federal Arbitration Act, conducted by a single neutral arbitrator and administered by the American Arbitration Association, or a similar arbitration service selected by the parties, in a location mutually agreed upon by the parties. The arbitrator's award shall be final, and judgment may be entered upon it in any court having jurisdiction. In the event that any legal or equitable action, proceeding or arbitration arises out of or concerns these Terms and Conditions, the prevailing party shall be entitled to recover its costs and reasonable attorney's fees. The parties agree to arbitrate all disputes and claims in regards to these Terms and Conditions or any disputes arising as a result of these Terms and Conditions, whether directly or indirectly, including Tort claims that are a result of these Terms and Conditions. The parties agree that the Federal Arbitration Act governs the interpretation and enforcement of this provision. The entire dispute, including the scope and enforceability of this arbitration provision shall be determined by the Arbitrator. This arbitration provision shall survive the termination of these Terms and Conditions.</Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Class Action Waiver</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>Any arbitration under these Terms and Conditions will take place on an individual basis; class arbitrations and class/representative/collective actions are not permitted. THE PARTIES AGREE THAT A PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN EACH'S INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PUTATIVE CLASS, COLLECTIVE AND/ OR REPRESENTATIVE PROCEEDING, SUCH AS IN THE FORM OF A PRIVATE ATTORNEY GENERAL ACTION AGAINST THE OTHER. Further, unless both you and Bodify agree otherwise, the arbitrator may not consolidate more than one person's claims, and may not otherwise preside over any form of a representative or class proceeding.</Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Liability Disclaimer</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. BODIFY INC. AND/OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY TIME. 
                {'\n'}{'\n'}BODIFY INC. AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THE SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY KIND. BODIFY INC. AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.
                {'\n'}{'\n'}TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL BODIFY INC. AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE, WITH THE DELAY OR INABILITY TO USE THE SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THE SITE, OR OTHERWISE ARISING OUT OF THE USE OF THE SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF BODIFY INC. OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE.
                </Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Termination/Access Restriction</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>Bodify reserves the right, in its sole discretion, to terminate your access to the Site and the related services or any portion thereof at any time, without notice. To the maximum extent permitted by law, this agreement is governed by the laws of the State of Delaware and you hereby consent to the exclusive jurisdiction and venue of courts in Delaware in all disputes arising out of or relating to the use of the Site. Use of the Site is unauthorized in any jurisdiction that does not give effect to all provisions of these Terms, including, without limitation, this section.
                {'\n'}{'\n'}You agree that no joint venture, partnership, employment, or agency relationship exists between you and Bodify as a result of this agreement or use of the Site. Bodify's performance of this agreement is subject to existing laws and legal process, and nothing contained in this agreement is in derogation of Bodify's right to comply with governmental, court and law enforcement requests or requirements relating to your use of the Site or information provided to or gathered by Bodify with respect to such use. If any part of this agreement is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the agreement shall continue in effect.
                {'\n'}{'\n'}Unless otherwise specified herein, this agreement constitutes the entire agreement between the user and Bodify with respect to the Site and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between the user and Bodify with respect to the Site. A printed version of this agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. It is the express wish to the parties that this agreement and all related documents be written in English. 
                </Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Changes to Terms</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>Bodify reserves the right, in its sole discretion, to change the Terms under which www.bodify.io is offered. The most current version of the Terms will supersede all previous versions. Bodify encourages you to periodically review the Terms to stay informed of our updates.</Text>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{fontSize: 20}}>Contact Information</Text>
                <Text style={{fontSize: 16, color: '#979797', marginTop: 10}}>Bodify welcomes your questions or comments regarding the Terms:
                {'\n'}{'\n'}Bodify Inc 
                {'\n'}5440 W. 110th St Suite 300 
                {'\n'}Overland Park, Kansas 66211 
                
                </Text>
                <Text style={{fontSize: 16, color: '#979797'}}>{'\n'}Email Address: {'\n'}<Text style={{color: "#0078ED"}}>hello@bodify.info </Text></Text>
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
