import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route} from 'react-router-dom';
import Login from './components/user/Login';
import Signup from './components/user/Signup';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path ="/login"component= {Login}/>
          <Route path ="/signup"component= {Signup}/>

    <login/>
    <signup/>
</Switch>
  
      </div>
    )
  }
}
