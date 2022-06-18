// importing required tools
import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

// importing reducers for auth and covid search country name
import { AuthReducer } from "./authRedux/authReducer";
import { CovidTrackerReducer } from "./covidTrackerRedux/covidTrackerReducer";

// redux takes only reducer so combineReducer for combining both reducers
const rootReducer = combineReducers({
  auth: AuthReducer,
  event: CovidTrackerReducer,
});

// store function which contain rootReducer
export const store = createStore(rootReducer, applyMiddleware(thunk));
