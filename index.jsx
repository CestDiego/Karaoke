import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import ReactFireMixin from 'reactfire';
import { autobind } from 'core-decorators';
import reactMixin from 'react-mixin';
import YouTube from 'react-youtube';
import { Router, Route, Link, browserHistory } from 'react-router';

firebase.initializeApp({
  apiKey: 'AIzaSyAdlrCx_Rat0KoxYVO1PyCceQcvy9TgK30',
  authDomain: 'karaoke-46318.firebaseapp.com',
  databaseURL: 'https://karaoke-46318.firebaseio.com',
  storageBucket: '',
});

const youtubeParser = (url) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : false;
};

@reactMixin.decorate(ReactFireMixin)
export class App extends Component {
  componentWillMount() {
    const ref = firebase.database().ref('songs');
    this.bindAsArray(ref, 'songs');
  }

  @autobind
  addVideo() {
    const { songs } = this.state;
    const url = this._input.value;

    this.firebaseRefs.songs.push({ url });

    songs.push(url);
    this.setState({ songs });
  }

  render() {
    const { songs } = this.state;
    const videoId = songs.length > 0 ? youtubeParser(songs[0].url) : null;

    return (
      <div>
        <input ref={(c) => this._input = c} />
        <button onClick={this.addVideo}></button>
        { videoId ? <YouTube videoId={videoId} /> : null }
        <ol>
          {
            songs.map((song) => (
              <li key={song['.key']}>
                <a href={song.url}>{song.url}</a>
              </li>
            ))
          }
        </ol>
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>,
  document.querySelector('#myApp')
);
