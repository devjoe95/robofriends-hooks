import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
} from "./constants";

export const searchRobots = (state = { searchField: "" }, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export const requestRobots = (
  state = { robots: [], loading: false, error: "" },
  action = {}
) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, loading: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, loading: false, robots: action.payload };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
