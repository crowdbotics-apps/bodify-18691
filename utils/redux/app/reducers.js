import * as actions from "./constants"

const initialState = {
  metrics: {},
  isLoading: false,
  profile: {},
  errors: {},
  messages: [],
  userslist: [],
  subscripeFees: [],
  addCardList: [],
  filesList: [],
  detailsFile: [],
  applications: [],
  measurement: [],
  getSearch: {}
}

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.APP_GET_SEARCH_SUCCESS:
      return { ...state, getSearch: action.payload }
    case actions.APP_DETAILS_FILES_SUCCESS:
      return {
        ...state,
        detailsFile: action.payload,
        errors: { detailsFile: null }
      }
    case actions.APP_GET_FILES_SUCCESS:
      return {
        ...state,
        filesList: action.payload,
        errors: { filesList: null }
      }
    case actions.APP_ADD_CARD_SUCCESS:
      return {
        ...state,
        addCardList: action.payload,
        errors: { addCardList: null }
      }
    case actions.APP_GET_SUBSCRIPE_FEES_SUCCESS:
      return {
        ...state,
        subscripeFees: action.payload,
        errors: { subscripeFees: null }
      }
    case actions.APP_GET_PROFILE_SUCCESS:
      return { ...state, profile: action.payload, errors: { Profile: null } }
    case actions.APP_GET_APPLICATIONS_SUCCESS:
      return { ...state, applications: action.payload }
    case actions.APP_GET_MEASUREMENT_SUCCESS:
      return { ...state, measurement: action.payload }
    case actions.APP_GET_PROFILE_ERROR:
      return { ...state, errors: { Profile: action.error } }
    case actions.APP_CHANGE_LOADING_STATE:
      return { ...state, isLoading: action.payload }
    case actions.APP_UPDATE_PROFILE_SUCCESS:
      return { ...state, errors: { Profile: null } }
    default:
      return state
  }
}
