import Immutable from 'immutable'

let DemiQueue = Immutable.Map({})

let vote = (queue, url) {

}

let addEntity = (queue, url) {
  if(queue.get(url) !== undefined) {
    // TODO: Cannot repeat song, what do
  }

  return queue.set(url, {
    url: url,
    isCurrent: false,
    votes: 0,
    order: Object.keys(queue.toJS()).length,
  })
}
