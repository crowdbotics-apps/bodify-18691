import { all, takeLatest } from "redux-saga/effects"
import axios from "axios"
import { Alert } from "react-native"
import * as actions from "./constants"
import { BASE_URL, request } from "../../http"
import { sagasRunner } from "../../redux"

function subscriptionCreat({ subscription_type, payment_source }) {
  return request.post("/api/v1/subscriptions/", {
    subscription_type,
    payment_source
  })
}
function addCard({ values }) {
  return request.post("/api/v1/stripe/create-card-token/", values)
}

function invite({ values }) {
  return request.post("/api/v1/legals/invite-customer/", values)
}

function inviteLawyer({ values }) {
  return request.post("/api/v1/legals/invite-lawyer/", {
    lawyer_email: values.customer_email,
    title: values.title,
    message: values.message
  })
}

function getSearch({ search, find }) {
  console.log("search", search)
  console.log("find", find)
  // text__contains, mime_type, filename, file_section, file_type, filename__contains
  return request.get(`/api/v1/file-search/?${find}=${search.findName}/`)
}

function getProfile() {
  return request.get("/api/users/profile/")
}

function getSubscripeFees() {
  return request.get("/api/v1/subscriptions/fees/")
}

function updateProfile({ profile, token }) {

  // console.log(profile, token, 'update');

  const profileKeys = Object.keys(profile)
  const data = new FormData()
  
  profileKeys.forEach(k => {
    if(k === 'profile_picture')  data.append(k, profile[k], profile[k].name)
    else data.append(k, profile[k])
  })

  return axios({
    method: "patch",
    url: `${BASE_URL}/api/users/profile/`,
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "multipart/form-data"
    },
    data
  })
}

function getMeasures({ data }) {
  const image = new FormData()
  image.append("front_img", {
    uri: data.front.uri,
    type: data.front.type,
    name: data.front.name || "IMG_0006.jpeg"
  })
  image.append("side_img", {
    uri: data.back.uri,
    type: data.back.type,
    name: data.back.name || "IMG_0007.jpeg"
  })
  // console.log(image)
  return axios({
    method: "post",
    url: `https://api.viubox.com:8001/imagesToMeasurements`,
    headers: {
      Authorization: `38447a3b7373b0a60d4dd443e611a3e29fe3ca049d63ef7ccfaeafbfd88dd4b4`,
      "api-token": `38447a3b7373b0a60d4dd443e611a3e29fe3ca049d63ef7ccfaeafbfd88dd4b4`,
      "Content-Type": "multipart/form-data"
    },
    data: image
  })
}

function handleGetProfile({ id }) {
  return sagasRunner({
    successType: actions.APP_GET_PROFILE_SUCCESS,
    errorType: actions.APP_GET_PROFILE_ERROR,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    errorMessage: "Unable to get profile data.",
    callFunc: getProfile,
    alertError: true,
    callData: { id },
    isProfile: true
  })
}

function handleUpdateProfile({ profile, token }) {
  return sagasRunner({
    successType: actions.APP_UPDATE_PROFILE_SUCCESS,
    errorType: actions.APP_UPDATE_PROFILE_ERROR,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    errorMessage: "Something went wrong. Please try again.",
    updateType: actions.APP_GET_PROFILE_REQUEST,
    alertError: true,
    sendToken: true,
    callFunc: updateProfile,
    callData: { profile, token },
    onSuccess: () => Alert.alert("Successfully updated")
  })
}

function handleMeasurement({ data, navigation }) {
  return sagasRunner({
    successType: actions.APP_GET_MEASUREMENT_SUCCESS,
    errorType: actions.APP_GET_MEASUREMENT_ERROR,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    errorMessage: "Something went wrong. Please try again.",
    // updateType: actions.APP_GET_PROFILE_REQUEST,
    alertError: true,
    //sendToken: true,
    callFunc: getMeasures,
    callData: { data },
    onSuccess: () => navigation.navigate("Match")
  })
}

function handleAddCard({ values, navigation }) {
  return sagasRunner({
    successType: actions.APP_ADD_CARD_SUCCESS,
    errorType: actions.APP_ADD_CARD_ERROR,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    errorMessage: "Something went wrong. Please try again.",
    updateType: actions.APP_GET_PROFILE_REQUEST,
    alertError: true,
    // sendToken: true,
    callFunc: addCard,
    callData: { values },
    onSuccess: () => {
      Alert.alert("Card successfully added", "", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Membership")
        }
      ])
    }
  })
}

function handleSubscripeFees() {
  return sagasRunner({
    successType: actions.APP_GET_SUBSCRIPE_FEES_SUCCESS,
    errorType: actions.APP_GET_SUBSCRIPE_FEES_ERROR,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    errorMessage: "Unable to get profile data.",
    callFunc: getSubscripeFees,
    alertError: false
  })
}

function handleCreatSubscripe({
  subscription_type,
  payment_source,
  navigation
}) {
  return sagasRunner({
    successType: actions.APP_CREAT_SUBSCRIPTION_SUCCESS,
    errorType: actions.APP_CREAT_SUBSCRIPTION_ERROR,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    errorMessage: "Something went wrong. Please try again.",
    updateType: actions.APP_GET_PROFILE_REQUEST,
    alertError: true,
    sendToken: true,
    callFunc: subscriptionCreat,
    callData: { subscription_type, payment_source },
    onSuccess: () => {
      Alert.alert("Successfully subscribed", "", [
        {
          text: "OK",
          onPress: () => navigation.navigate("HomeDashboard")
        }
      ])
    }
  })
}

function userFiles({ file, token, section, applicationId }) {
  const data = new FormData()
  data.append("file", file)
  data.append("file_section", section)
  const url = applicationId
    ? `${BASE_URL}/api/v1/legals/applications/${applicationId}/files/`
    : `${BASE_URL}/api/v1/user-files/`
  return axios({
    method: "post",
    url,
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "multipart/form-data"
    },
    data
  })
}
function handleUserFiles({ file, section, applicationId }) {
  return sagasRunner({
    successType: actions.APP_USER_FILES_SUCCESS,
    errorType: actions.APP_USER_FILES_ERROR,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    errorMessage: "Something went wrong. Please try again.",
    // updateType: actions.APP_GET_PROFILE_REQUEST,
    alertError: true,
    sendToken: true,
    callFunc: userFiles,
    callData: { file, applicationId, section },
    onSuccess: () => {
      Alert.alert("Successfully uploaded")
    }
  })
}

function getFiles() {
  return request.get("/api/v1/user-files/")
}
function handleGetFiles() {
  return sagasRunner({
    successType: actions.APP_GET_FILES_SUCCESS,
    errorType: actions.APP_GET_FILES_ERROR,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    errorMessage: "Something went wrong. Please try again.",
    alertError: true,
    callFunc: getFiles
  })
}

function getApplications() {
  return request.get("/api/v1/applications/")
}

function handleGetApplications() {
  return sagasRunner({
    successType: actions.APP_GET_APPLICATIONS_SUCCESS,
    errorType: actions.APP_GET_APPLICATIONS_ERROR,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    errorMessage: "Something went wrong. Please try again.",
    alertError: true,
    callFunc: getApplications
  })
}

function deleteFiles({ id }) {
  return request.delete(`/api/v1/user-files/${id}/`)
}

function handleDeleteFiles({ id }) {
  return sagasRunner({
    successType: actions.APP_DELETE_FILES_SUCCESS,
    errorType: actions.APP_DELETE_FILES_ERROR,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    errorMessage: "Something went wrong. Please try again.",
    alertError: true,
    callFunc: deleteFiles,
    callData: { id },
    onSuccess: () => {
      Alert.alert("Successfully delete files")
    }
  })
}

function detailsFiles({ id }) {
  return request.get(`/api/v1/user-files/${id}/`)
}
function handleDetailsFiles({ id }) {
  return sagasRunner({
    successType: actions.APP_DETAILS_FILES_SUCCESS,
    errorType: actions.APP_DETAILS_FILES_ERROR,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    errorMessage: "Something went wrong. Please try again.",
    alertError: true,
    callFunc: detailsFiles,
    callData: { id }
  })
}

function handleInvite({ values }) {
  return sagasRunner({
    successType: actions.APP_INVITE_SUCCESS,
    errorType: actions.APP_INVITE_ERROR,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    errorMessage: "Something went wrong. Please try again.",
    // updateType: actions.APP_GET_PROFILE_REQUEST,
    alertError: true,
    // sendToken: true,
    callFunc: inviteLawyer,
    callData: { values },
    onSuccess: () => {
      Alert.alert("Success")
    }
  })
}

function handleInviteLawyer({ values }) {
  return sagasRunner({
    successType: actions.APP_INVITE_LAWYER_SUCCESS,
    errorType: actions.APP_INVITE_LAWYER_ERROR,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    errorMessage: "Something went wrong. Please try again.",
    // updateType: actions.APP_GET_PROFILE_REQUEST,
    alertError: true,
    // sendToken: true,
    callFunc: invite,
    callData: { values },
    onSuccess: () => {
      Alert.alert("Success")
    }
  })
}

function handlegetSearch({ search, find }) {
  return sagasRunner({
    successType: actions.APP_GET_SEARCH_SUCCESS,
    errorType: actions.APP_GET_SEARCH_ERROR,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    errorMessage: "Something went wrong. Please try again.",
    // updateType: actions.APP_GET_PROFILE_REQUEST,
    alertError: true,
    callFunc: getSearch,
    callData: { search, find }
  })
}

export default all([
  takeLatest(actions.APP_GET_PROFILE_REQUEST, handleGetProfile),
  takeLatest(actions.APP_UPDATE_PROFILE_REQUEST, handleUpdateProfile),
  takeLatest(actions.APP_ADD_CARD_REQUEST, handleAddCard),
  takeLatest(actions.APP_GET_SUBSCRIPE_FEES_REQUEST, handleSubscripeFees),
  takeLatest(actions.APP_CREAT_SUBSCRIPTION_REQUEST, handleCreatSubscripe),
  takeLatest(actions.APP_USER_FILES_REQUEST, handleUserFiles),
  takeLatest(actions.APP_GET_FILES_REQUEST, handleGetFiles),
  takeLatest(actions.APP_DELETE_FILES_REQUEST, handleDeleteFiles),
  takeLatest(actions.APP_DETAILS_FILES_REQUEST, handleDetailsFiles),
  takeLatest(actions.APP_GET_APPLICATIONS_REQUEST, handleGetApplications),
  takeLatest(actions.APP_INVITE_REQUEST, handleInvite),
  takeLatest(actions.APP_INVITE_LAWYER_REQUEST, handleInviteLawyer),
  takeLatest(actions.APP_GET_SEARCH_REQUEST, handlegetSearch),
  takeLatest(actions.APP_GET_MEASUREMENT_REQUEST, handleMeasurement)
])
