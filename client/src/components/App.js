import React from "react";
import { Switch, Route } from "react-router-dom";
import KooNavBar from "./NavBar";

const App = () => {
  return (
    <div className="App NavBarPadding">
      <KooNavBar />
      <Switch>
        <Route path="/about">About Page</Route>
        <Route path="/faqs">FAQs Page</Route>
        <Route path="/work">How it Works Page</Route>
        <Route path="/" exact={true}>
          Home Page
        </Route>
      </Switch>
    </div>
  );
};

export default App;
