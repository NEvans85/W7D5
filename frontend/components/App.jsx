import React from "react";
import Greeting from "./Greeting/greeting_container";
import SessionForm from "./Session/session_form_container";
import { Route } from "react-router-dom";

const App = () => (
  <div>
    <header>
      <h1>BenchBnB</h1>
      <Greeting />
    </header>
    <Route path="/login" component={SessionForm} />
    <Route path="/signup" component={SessionForm} />
  </div>
);

export default App;
