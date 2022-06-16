import {
  LOG_IN_FAILURE,
  LOG_IN_LOADING,
  LOG_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_LOADING,
  SIGN_UP_SUCCESS,
  LOG_OUT_LOADING,
  LOG_OUT_SUCCESS,
} from "./atuhAction";

const initialStore = {
  isLoading: false,
  token: "",
  isAuth: false,
  isFailure: false,
};

export const AuthReducer = (state = initialStore, { type, payload }) => {
  switch (type) {
    case LOG_IN_LOADING:
      return {
        ...state,
        isLoading: true,
        token: state.token,
        isAuth: state.isAuth,
        isFailure: false,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: payload,
        isAuth: true,
        isFailure: false,
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        token: state.token,
        isAuth: state.isAuth,
        isFailure: true,
      };
    case SIGN_UP_LOADING:
      return {
        ...state,
        isLoading: true,
        token: state.token,
        isAuth: state.isAuth,
        isFailure: false,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: "",
        isAuth: false,
        isFailure: false,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isLoading: false,
        token: state.token,
        isAuth: state.isAuth,
        isFailure: true,
      };
    case LOG_OUT_LOADING:
      return {
        ...state,
        isLoading: true,
        token: state.token,
        isAuth: state.isAuth,
        isFailure: false,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: "",
        isAuth: false,
        isFailure: false,
      };
    default:
      return state;
  }
};
