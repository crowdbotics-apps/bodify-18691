import AsyncStorage from '@react-native-community/async-storage';

const Constants = {
  ACCESS_TOKEN: 'access_token',
  USER: 'user',
  FIRST_VISIT: 'FIRST_VISIT',
  JUST_SIGNED_UP: 'JUST_SIGNED_UP',
};


const StorageUtils = {
  getAccessToken: async () => {
    const token = await AsyncStorage.getItem(Constants.ACCESS_TOKEN);
    return token;
  },

  setAccessToken: async (token) => {
    await AsyncStorage.setItem(Constants.ACCESS_TOKEN, token);
  },

  removeAccessToken: async () => {
    await AsyncStorage.removeItem(Constants.ACCESS_TOKEN);
  },

  getUser: async () => {
    const user = await AsyncStorage.getItem(Constants.USER);
    return user ? JSON.parse(user) : {};
  },

  setUser: async (user) => {
    const userObject = user ? JSON.stringify(user) : null;
    await AsyncStorage.setItem(Constants.USER, userObject);
  },

  removeUser: async () => {
    await AsyncStorage.removeItem(Constants.USER);
  },

  getFirstVisit: async () => {
    const first_visit = await AsyncStorage.getItem(Constants.FIRST_VISIT);
    return first_visit;
  },

  setFirstVisit: async (visit) => {
    await AsyncStorage.setItem(Constants.FIRST_VISIT, visit);
  },

  removeFirstVisit: async () => {
    await AsyncStorage.removeItem(Constants.FIRST_VISIT);
  },

  getSignedUp: async () => {
    const first_singup = await AsyncStorage.getItem(Constants.JUST_SIGNED_UP);
    return first_singup;
  },

  setSignedUp: async (visit) => {
    await AsyncStorage.setItem(Constants.JUST_SIGNED_UP, visit);
  },

  removeSignedUp: async () => {
    await AsyncStorage.removeItem(Constants.JUST_SIGNED_UP);
  },
};

export default StorageUtils;