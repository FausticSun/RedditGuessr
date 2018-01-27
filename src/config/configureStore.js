import { createStore, applyMiddleware, combineReducers } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import RedditReducers from '../reducers/RedditReducers';
import RoutingReducers from '../reducers/RoutingReducers';
import ScoreReducers from '../reducers/ScoreReducers';

const reducer = combineReducers({
  reddit: RedditReducers,
  router: RoutingReducers,
  score: ScoreReducers
});

export const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(apiMiddleware)
));