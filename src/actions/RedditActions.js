import { RSAA } from 'redux-api-middleware'; // RSAA = '@@redux-api-middleware/RSAA'

export const REQUEST = 'FETCH_REQUEST';
export const SUCCESS = 'FETCH_SUCCESS';
export const FAILURE = 'FETCH_FAILURE';
export const LOADING_COMPLETE = 'LOADING_COMPLETE';

export function fetchRedditPosts(name) {
    return {
        [RSAA]: {
            endpoint: `https://www.reddit.com/r/popular.json?limit=100&after=${name}`,
            method: 'GET',
            types: [REQUEST, SUCCESS, FAILURE]
        }
    }
}

export function completeLoading() {
    return { type: LOADING_COMPLETE };
}