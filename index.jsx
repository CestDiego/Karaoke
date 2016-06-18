import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import ReactFireMixin from 'reactfire';
import { autobind } from 'core-decorators';
import { Router, Route, Link, browserHistory } from 'react-router';

firebase.initializeApp({
  apiKey: 'AIzaSyAdlrCx_Rat0KoxYVO1PyCceQcvy9TgK30',
  authDomain: 'karaoke-46318.firebaseapp.com',
  databaseURL: 'https://karaoke-46318.firebaseio.com',
  storageBucket: '',
});

export class App extends Component {
  mixins: [ReactFireMixin]

  @autobind
  addVideo() {
    console.log(this._input.value);
  }

  render() {
    return (
      <div>
        <input ref={(c) => this._input = c} />
        <button onClick={this.addVideo}></button>
        <div>Simple React + Babel + Bootstrap + Webpack</div>
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>,
  document.querySelector('#myApp'));
