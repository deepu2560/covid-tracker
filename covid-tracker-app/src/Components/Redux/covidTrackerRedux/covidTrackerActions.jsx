export const COVID_TRACKER_LOADING = "COVID_TRACKER_LOADING";
export const COVID_TRACKER_FAILURE = "COVID_TRACKER_FAILURE";
export const COVID_TRACKER_SUCCESS = "COVID_TRACKER_SUCCESS";

export const covidTrackerLoading = () => ({ type: COVID_TRACKER_LOADING });
export const covidTrackerFailure = () => ({ type: COVID_TRACKER_FAILURE });
export const covidTrackerSuccess = () => ({ type: COVID_TRACKER_SUCCESS });
