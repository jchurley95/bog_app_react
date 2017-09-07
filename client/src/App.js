import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllCreatures from "./components/AllCreatures";
import CreatureItem from "./components/CreatureItem";
import NewCreature from './components/NewCreature';
import EditCreature from './components/EditCreature';
import GlobalNav from './components/GlobalNav';
import SignUpLogIn from './components/SignUpLogIn';
import { setAxiosDefaults } from './util';

import './App.css';


class App extends Component {
  componentWillMount(){
    setAxiosDefaults();
  }
  render() {
    return (
        <Router>
          <div>
            <GlobalNav/>
            <Route exact path='/' component={AllCreatures} />
            <Route exact path='/new' component={NewCreature} />
            <Route exact path='/creatures/:id' component={CreatureItem} />
            <Route exact path='/creatures/:id/edit' component={EditCreature} />
            <Route exact path="/signUp" component={SignUpLogIn} />
          </div>
        </Router>
    );
  }
}

export default App;
