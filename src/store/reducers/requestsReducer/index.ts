import { FETCH_TEAM_REQUESTS, FETCH_TOURNAMENT_REQUESTS } from 'store/reducers/requestsReducer/types';

const initialState = {
    tournamentRequests: null,
    teamRequests: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_TOURNAMENT_REQUESTS:
            return {
                ...state,
                tournamentRequests: action.payload
            };
        case FETCH_TEAM_REQUESTS:
            return {
                ...state,
                teamRequests: action.payload
            };
        default:
            return {
                ...state
            };
    }
}
