import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard213218711Reducer from '../features/Dashboard213218711/redux/reducers'
import SignIn2775312Reducer from '../features/SignIn2775312/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard213218711: Dashboard213218711Reducer,
SignIn2775312: SignIn2775312Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});