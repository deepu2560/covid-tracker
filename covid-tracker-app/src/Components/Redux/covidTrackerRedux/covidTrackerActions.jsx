// initializing actions exporting them for reducers use
export const SEARCH_LOADING = "SEARCH_LOADING";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";

// dispatch function for type and payload action
export const searchLoading = () => ({ type: SEARCH_LOADING });
export const searchSuccess = (payload) => ({ type: SEARCH_SUCCESS, payload });
export const searchFailure = () => ({ type: SEARCH_FAILURE });
