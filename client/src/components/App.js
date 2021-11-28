import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { GetCurrentUser } from "../services/Auth";
import KooNavBar from "./NavBar";
import About from "./Pages/About";
import FAQs from "./Pages/FAQs";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Post from "./Pages/Post";
import Register from "./Pages/Register";
import Works from "./Pages/Works";

class App extends Component {
  state = {
    User: null
  };
  handleAuth = User => {
    this.setState({ User });
  };
  componentDidMount() {
    GetCurrentUser().then(res => {
      this.setState({
        User: res.data.Message.User
      });
    });
  }
  render() {
    return (
      <div className="App NavBarPadding">
        <KooNavBar User={this.state.User} handleAuth={this.handleAuth} />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/faqs" component={FAQs} />
          <Route path="/work" component={Works} />
          <Route
            path="/login"
            render={() => (
              <>
                {this.state.User && <Redirect to="/dashboard" />}
                <Login handleAuth={this.handleAuth} />
              </>
            )}
          />
          <Route
            path="/register"
            render={() => (
              <>
                {this.state.User && <Redirect to="/dashboard" />}
                <Register handleAuth={this.handleAuth} />
              </>
            )}
          />
          <Route path="/dashboard">
            {!this.state.User && <Redirect to="/login" />}
            Dashboard
          </Route>
          <Route path="/post" component={Post} />
          <Route path="/" exact={true} component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
