import { RSAA } from 'redux-api-middleware'; // RSAA = '@@redux-api-middleware/RSAA'

export const REQUEST = 'FETCH_REQUEST';
export const SUCCESS = 'FETCH_SUCCESS';
export const FAILURE = 'FETCH_FAILURE';

export function fetchRedditPosts() {
    return {
        [RSAA]: {
            endpoint: 'http://www.reddit.com/r/popular.json',
            method: 'GET',
            types: ['REQUEST', 'SUCCESS', 'FAILURE']
        }
    }
}
