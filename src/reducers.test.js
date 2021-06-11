import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
} from "./constants";
import * as reducers from "./reducers";

describe("searchRobots", () => {
  test("should return the initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: "" });
  });
  test("should handle CHANGE_SEARCH_FIELD", () => {
    expect(
      reducers.searchRobots(
        { searchField: "" },
        { type: CHANGE_SEARCH_FIELD, payload: "abc" }
      )
    ).toEqual({ searchField: "abc" });
  });
});

describe("requestRobots", () => {
  test("should return initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual({
      robots: [],
      loading: false,
      error: "",
    });
  });
  test("should handle REQUEST_ROBOTS_PENDING", () => {
    expect(
      reducers.requestRobots(
        { robots: [], loading: false, error: "" },
        {
          type: REQUEST_ROBOTS_PENDING,
        }
      )
    ).toEqual({
      robots: [],
      loading: true,
      error: "",
    });
  });
  test("should handle REQUEST_ROBOTS_SUCCESS", () => {
    expect(
      reducers.requestRobots(
        { robots: [], loading: false, error: "" },
        {
          type: REQUEST_ROBOTS_SUCCESS,
          payload: [{ id: "3", name: "Joe", email: "joe" }],
        }
      )
    ).toEqual({
      robots: [{ id: "3", name: "Joe", email: "joe" }],
      loading: false,
      error: "",
    });
  });
  test("should handle REQUEST_ROBOTS_FAILED", () => {
    expect(
      reducers.requestRobots(
        { robots: [], loading: false, error: "" },
        {
          type: REQUEST_ROBOTS_FAILED,
          payload: "Failed to get data",
        }
      )
    ).toEqual({
      robots: [],
      loading: false,
      error: "Failed to get data",
    });
  });
});
