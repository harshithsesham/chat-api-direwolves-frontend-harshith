import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/main/Main";
import Login from "./components/landing/Login";
import Register from "./components/landing/Register";
import Chatroom from "./components/ChatRoom/Chatroom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/chatbox" exact component={Chatroom}/>
      </Switch>
    </Router>
  );
}

export default App;
