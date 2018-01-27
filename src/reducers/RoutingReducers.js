import { combineReducers } from 'redux';
import { CHANGE_PAGE } from '../actions/RoutingActions';

export function page(state = "Loading", action) {
    switch (action.type) {
        case CHANGE_PAGE:
            return action.page;
        default:
            return state;
    }
}

const RoutingReducers = combineReducers({
    page
});

export default RoutingReducers;