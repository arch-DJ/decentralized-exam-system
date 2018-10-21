import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" component={Home} exact />
            <Route component={Error} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
