import * as actions from './constants';

export const getProfile = (id) => ({
  type: actions.APP_GET_PROFILE_REQUEST,
  id,
});

export const updateProfile = (profile, token) => ({
  type: actions.APP_UPDATE_PROFILE_REQUEST,
  profile,
  token
});

export const addCard = (values, navigation) => ({
  type: actions.APP_ADD_CARD_REQUEST,
  values,
  navigation
});

export const getSubscripeFees = () => ({
  type: actions.APP_GET_SUBSCRIPE_FEES_REQUEST,
});

export const creatSubscription = (subscription_type, payment_source, navigation) => ({
  type: actions.APP_CREAT_SUBSCRIPTION_REQUEST,
  subscription_type,
  payment_source,
  navigation
});

export const userFiles = (file, section, applicationId) => ({
  type: actions.APP_USER_FILES_REQUEST,
  file,
  section,
  applicationId,
});

export const getUserFiles = () => ({
  type: actions.APP_GET_FILES_REQUEST,
});

export const getApplications = () => ({
  type: actions.APP_GET_APPLICATIONS_REQUEST,
});

export const fileDelete = (id) => ({
  type: actions.APP_DELETE_FILES_REQUEST,
  id
})

export const fileDetails = (id) => ({
  type: actions.APP_DETAILS_FILES_REQUEST,
  id
})

export const coustomerInvite = (values) => ({
  type: actions.APP_INVITE_REQUEST,
  values
})

export const lawyerInvite = (values) => ({
  type: actions.APP_INVITE_LAWYER_REQUEST,
  values
})

export const getSearch = (search, find) => ({
  type: actions.APP_GET_SEARCH_REQUEST,
  search,
  find
})