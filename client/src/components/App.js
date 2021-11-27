import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import KooNavBar from "./NavBar";
import About from "./Pages/About";
import FAQs from "./Pages/FAQs";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Works from "./Pages/Works";

class App extends Component {
  state = {
    User: null
  };
  handleAuth = User => {
    this.setState({ User });
  };
  render() {
    return (
      <div className="App NavBarPadding">
        <KooNavBar User={this.state.User} />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/faqs" component={FAQs} />
          <Route path="/work" component={Works} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" exact={true} component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
