import {
  SEARCH_FAILURE,
  SEARCH_LOADING,
  SEARCH_SUCCESS,
} from "./covidTrackerActions";

const initialStore = {
  isLoading: false,
  countrySearch: "india",
  isFailure: false,
};

export const CovidTrackerReducer = (
  state = initialStore,
  { type, payload },
) => {
  switch (type) {
    case SEARCH_LOADING:
      return {
        ...state,
        isLoading: true,
        countrySearch: state.countrySearch,
        isFailure: false,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        countrySearch: payload,
        isFailure: false,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        countrySearch: state.countrySearch,
        isFailure: true,
      };
    default:
      return state;
  }
};
