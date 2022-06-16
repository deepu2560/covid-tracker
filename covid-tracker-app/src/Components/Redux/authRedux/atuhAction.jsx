export const LOG_IN_LOADING = "LOG_IN_LOADING";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const logInLoading = () => ({ type: LOG_IN_LOADING });
export const logInSuccess = (payload) => ({ type: LOG_IN_SUCCESS, payload });
export const logInFailure = () => ({ type: LOG_IN_FAILURE });

export const SIGN_UP_LOADING = "SIGN_UP_LOADING";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const signUpLoading = () => ({ type: SIGN_UP_LOADING });
export const signUpSuccess = () => ({ type: SIGN_UP_SUCCESS });
export const signUpFailure = () => ({ type: SIGN_UP_FAILURE });

export const LOG_OUT_LOADING = "LOG_OUT_LOADING";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";

export const logOutLoading = () => ({ type: LOG_OUT_LOADING });
export const logOutSuccess = () => ({ type: LOG_OUT_SUCCESS });
