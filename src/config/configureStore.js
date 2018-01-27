import { createStore, applyMiddleware, combineReducers } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import RedditReducers from '../reducers/RedditReducers';
import RoutingReducers from '../reducers/RoutingReducers';

const reducer = combineReducers({
  reddit: RedditReducers,
  router: RoutingReducers
});

export const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(apiMiddleware)
));