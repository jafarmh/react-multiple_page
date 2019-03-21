import React, { Component } from 'react';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Counters from './components/counters';
import Aboute from './components/Aboute';
import Contact from './components/Contact';
import Error from './components/Error';
import Navbar from './components/Navbar';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/" component={Counters} exact/>
          <Route path="/aboute" component={Aboute} exact/>
          <Route path="/contact" component={Contact} exact/>
          <Route  component={Error} />
        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;
