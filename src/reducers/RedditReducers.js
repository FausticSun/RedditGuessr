import { combineReducers } from 'redux'
import { SUCCESS, LOADING_COMPLETE } from '../actions/RedditActions';

const subredditSimilarity = require('../constants/SubredditSimilarity.json');

function posts(state = [], action) {
  switch (action.type) {
    case SUCCESS:
      return [...state,
        ...action.payload.data.children.filter(post =>
        subredditSimilarity.subreddits.find(subreddit =>
          subreddit.name === post.data.subreddit) !== undefined)];
    default:
      return state;
  }
}

function isLoadingPosts(state = true, action) {
  switch (action.type) {
    case LOADING_COMPLETE:
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
