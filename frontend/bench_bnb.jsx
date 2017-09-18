import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";
import Root from "./components/root";

// NOTE: Import 4 tests
import * as SessionActions from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, root);

  // NOTE: Test functions
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});

// NOTE: Test functions
window.login = SessionActions.login;
window.logout = SessionActions.logout;
window.signup = SessionActions.signup;
