import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { AuthReducer } from "./authRedux/authReducer";
import { CovidTrackerReducer } from "./covidTrackerRedux/covidTrackerReducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  event: CovidTrackerReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
