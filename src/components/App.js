import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthContextProvider } from "../context/authContext";

import Chats from "./Chats";
import Login from "./Login";

function App() {
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <Router>
        <AuthContextProvider>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
