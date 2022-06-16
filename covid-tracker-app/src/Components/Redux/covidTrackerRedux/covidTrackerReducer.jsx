import {
  COVID_TRACKER_LOADING,
  COVID_TRACKER_FAILURE,
  COVID_TRACKER_SUCCESS,
} from "./covidTrackerActions";

const initialStore = {
  isLoading: false,
  isFailure: false,
};

export const CovidTrackerReducer = (state = initialStore, type, payload) => {
  switch (type) {
    case COVID_TRACKER_LOADING:
      return {
        ...state,
        isLoading: true,
        isFailure: false,
      };
    case COVID_TRACKER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isFailure: true,
      };
    case COVID_TRACKER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isFailure: false,
      };
    default:
      return state;
  }
};
