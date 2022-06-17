export const SEARCH_LOADING = "SEARCH_LOADING";
export const SEARCH_FAILURE = "SEARCH_FAILURE";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";

export const searchLoading = () => ({ type: SEARCH_LOADING });
export const searchFailure = () => ({ type: SEARCH_FAILURE });
export const searchSuccess = () => ({ type: SEARCH_SUCCESS, payload });
