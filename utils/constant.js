// import React from 'react';
import AWS from "aws-sdk"
// var AWS = require('aws-sdk/dist/aws-sdk-react-native');
// import AWS from 'aws-sdk/dist/aws-sdk-react-native'
// import Geocoder from "react-native-geocoding"


APPLE_SERVICE_ID = "com.crowdbotics.APP_NAME"
APPLE_REDIRECT_CALLBACK =
  "https://your-app-here.com/accounts/apple/login/callback/"

export const GOOGLE_MAP_KEY = ""


ACCESS_KEY_ID = "AKIA4KGTUZ6KKAVYGXZL"
SECRET_ACCESS_KEY = "VNKodnaiWGr4NYi7vD0fdi+ZqloiLIv7dnFCegIl"


export const config = {
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
  Bucket: "bodify-18691",
  signatureVersion: "v4",
  region: "us-east-2",
}

export const S3 = new AWS.S3(config)

// export const GoogleQuery = {
//   key: GOOGLE_MAP_KEY,
//   language: "en"
// }

// Geocoder.init(GOOGLE_MAP_KEY)
