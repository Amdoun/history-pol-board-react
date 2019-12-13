import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'
import './App.css';
import Discussions from './components/Discussions/Discussions';
import Polls from './components/Polls/Polls'
import BoardRules from './components/BoardRules/BoardRules'
import Profile from './components/Profile/Profile';
import Signup from './components/Signup'
import DiscussionPage from './components/Discussions/DiscussionPage';
import PollPage from './components/Polls/PollPage';

class App extends Component {

  render() {
    return (
      <Router forceRefresh={true}>
        <div>
          <Navigation></Navigation>
          <Route exact path="/" component={Home}/>
          <Route path="/discussions" component={Discussions}/>
          <Route path="/polls" component={Polls}/>
          <Route path="/rules" component={BoardRules}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/discussion/:id" component={DiscussionPage}/>
          <Route path="/poll/:id" component={PollPage}/>
        </div>
      </Router>
    );
  }
}



export default App;
