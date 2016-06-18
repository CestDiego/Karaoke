import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';
import ReactFireMixin from 'reactfire';
import React from 'react';
import ReactDOM from 'react-dom';

firebase.initializeApp({
  apiKey: 'AIzaSyAdlrCx_Rat0KoxYVO1PyCceQcvy9TgK30',
  authDomain: 'karaoke-46318.firebaseapp.com',
  databaseURL: 'https://karaoke-46318.firebaseio.com',
  storageBucket: '',
});

export class App extends React.Component {
  mixins: [ReactFireMixin]

  render() {
    return (
      <div>Simple React + Babel + Bootstrap + Webpack</div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#myApp'));
