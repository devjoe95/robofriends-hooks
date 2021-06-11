import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
} from "./constants";
import * as actions from "./actions";

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe("", () => {
  test("should create an action to search for robots", () => {
    expect(actions.setSearchField("abcd")).toEqual({
      type: CHANGE_SEARCH_FIELD,
      payload: "abcd",
    });
  });

  test("should handle robots API", () => {
    expect.assertions(1);

    store.dispatch(actions.requestRobots());
    expect(store.getActions()[0]).toEqual({
      type: REQUEST_ROBOTS_PENDING,
    });
  });
  // test("should execute fetch data", (done) => {
  //   expect.assertions(1);

  //   return store.dispatch(actions.requestRobots()).then((data) => {
  //     const actions = store.getActions();
  //     expect(actions[0]).toEqual({
  //       type: REQUEST_ROBOTS_SUCCESS,
  //       payload: data,
  //     });
  //     done();
  //   });
  // });
});
