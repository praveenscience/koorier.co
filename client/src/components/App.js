import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import KooNavBar from "./NavBar";
import Home from "./Pages/Home";

class App extends Component {
  state = {
    User: null
  };
  render() {
    return (
      <div className="App NavBarPadding">
        <KooNavBar User={this.state.User} />
        <Switch>
          <Route path="/about">About Page</Route>
          <Route path="/faqs">FAQs Page</Route>
          <Route path="/work">How it Works Page</Route>
          <Route path="/" exact={true} component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
