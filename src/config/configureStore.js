import { createStore, applyMiddleware, combineReducers } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import RedditReducers from '../reducers/RedditReducers';

const reducer = combineReducers({
  reddit: RedditReducers
});

export const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(apiMiddleware)
));