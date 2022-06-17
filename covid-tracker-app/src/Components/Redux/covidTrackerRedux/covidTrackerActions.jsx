export const SEARCH_LOADING = "SEARCH_LOADING";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";

export const searchLoading = () => ({ type: SEARCH_LOADING });
export const searchSuccess = (payload) => ({ type: SEARCH_SUCCESS, payload });
export const searchFailure = () => ({ type: SEARCH_FAILURE });
