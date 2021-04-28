import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";
import { searchRobots } from "./reducers";

const rootReducer = combineReducers({searchRobots});
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
