import { combineReducers } from 'redux'
import { SUCCESS } from '../actions/RedditActions';

function posts(state = null, action) {
  switch (action.type) {
    case SUCCESS:
      return action.payload.responseBody.data.children;
    default:
      return state;
  }
}

const RedditReducers = combineReducers({
    posts,
});

export default RedditReducers;
