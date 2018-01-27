import { combineReducers } from 'redux'
import { SUCCESS } from '../actions/RedditActions';

function posts(state = null, action) {
  switch (action.type) {
    case SUCCESS:
      return action.payload.data.children;
    default:
      return state;
  }
}

function isLoadingPosts(state = true, action) {
  switch (action.type) {
    case SUCCESS:
      return false;
    default:
      return state;
  }
}

const RedditReducers = combineReducers({
    posts,
    isLoadingPosts
});

export default RedditReducers;
