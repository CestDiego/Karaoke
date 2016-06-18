import Immutable from 'immutable';

var queue = Immutable.List();

var vote = (queue, url) => {

}

var dequeue = (queue) => {
  if (queue.size === 1) {
    // TODO: Handle empty queue
  }

  return queue.shift();
}

var getCurrentSong = queue => queue.first()

var updateFirstSongToBeCurrent = queue =>
  queue.update(0, song =>
    song.set('isCurrent', true))

var nextSong = queue =>
  updateFirstSongToBeCurrent(dequeue(queue));

var queueHasUrl = (queue, url) =>
  queue.find(song =>
    song.get('url') === url)

var addSong = (queue, url) => {
  if(queueHasUrl(queue, url) !== undefined) {
    // TODO: Cannot repeat song, what do
  }

  var newSong = Immutable.Map({
    url: url,
    votes: 0,
    isCurrent: queue.size == 0 ? true : false,
    order: queue.size + 1,
  });
  return queue.push(newSong);
}

var urls = ['first', 'second', 'thirdPopular']

var newQueue = urls.reduce((q, url) => addSong(q, url), queue)
