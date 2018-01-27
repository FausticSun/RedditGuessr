import { combineReducers } from 'redux';
import { CLEAR_SCORE, INC_SCORE } from '../actions/ScoreActions';

export function score(state = 0, action) {
    switch (action.type) {
        case CLEAR_SCORE:
            return 0;
        case INC_SCORE:
            return state + 1;
        default:
            return state;
    }
}

const ScoreReducers = combineReducers({
    score
});

export default ScoreReducers;