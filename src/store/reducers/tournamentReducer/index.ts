import {
    FETCH_NEAREST_TOURNAMENTS,
    FETCH_TOURNAMENT_TEAMS,
    FETCH_TOURNAMENTS,
    GET_CURRENT_TOURNAMENT,
    SEND_ENTER_TOURNAMENT_REQUEST
} from 'store/reducers/tournamentReducer/types';

const initialState = {
    tournaments: [],
    currentTournament: null,
    activeTournament: false,
    tournamentTeams: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_NEAREST_TOURNAMENTS:
        case FETCH_TOURNAMENTS:
            return {
                ...state,
                tournaments: action.payload
            };
        case GET_CURRENT_TOURNAMENT:
            return {
                ...state,
                currentTournament: action.payload.tournament,
                activeTournament: action.payload.activeTournament
            };
        case SEND_ENTER_TOURNAMENT_REQUEST:
            return {
                ...state,
                activeTournament: action.payload
            };
        case FETCH_TOURNAMENT_TEAMS:
            return {
                ...state,
                tournamentTeams: action.payload
            };
        default:
            return {
                ...state
            };
    }
}
