import { FETCH_TEAM, FETCH_TEAMS } from 'store/reducers/teamReducer/types';

const initialState = {
    team: null,
    teams: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_TEAM:
            return {
                ...state,
                team: action.payload
            };
        case FETCH_TEAMS:
            return {
                ...state,
                teams: action.payload
            };
        default:
            return {
                ...state
            };
    }
}
