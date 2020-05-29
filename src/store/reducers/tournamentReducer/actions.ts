import {
    FETCH_NEAREST_TOURNAMENTS,
    FETCH_TOURNAMENT_TEAMS,
    FETCH_TOURNAMENTS,
    GET_CURRENT_TOURNAMENT,
    SEND_ENTER_TOURNAMENT_REQUEST
} from 'store/reducers/tournamentReducer/types';
import store from 'store';
import { RequestTypes } from 'models/RequestTypes';
import { request } from 'helpers/request';
import { Config } from 'helpers/Config';

export const fetchNearestTournaments = () => dispatch => {
    request(RequestTypes.get, Config('/tournaments/actual'), null).then(res => {
        const { data: tournaments, error } = res;
        if (!error) {
            dispatch({
                type: FETCH_NEAREST_TOURNAMENTS,
                payload: tournaments
            });
        }
    });
};

export const getCurrentTournament = (id: string) => dispatch => {
    const { user } = store.getState().user;
    request(RequestTypes.get, Config(`/tournament/${id}`), null).then(res => {
        const { data: tournament } = res;
        if (!user || !user.teamId) {
            return dispatch({
                type: GET_CURRENT_TOURNAMENT,
                payload: { tournament, activeTournament: false }
            });
        }
        request(RequestTypes.get, Config('/teamInTournament'), {
            tournamentId: tournament._id,
            teamId: user.teamId
        }).then(res => {
            const { data: activeTournament } = res;
            dispatch({
                type: GET_CURRENT_TOURNAMENT,
                payload: { tournament, activeTournament: Boolean(activeTournament) }
            });
        });
    });
};

export const sendEnterTournamentRequest = (tournamentId, teamId) => dispatch => {
    return request(RequestTypes.post, Config('/tournament/request/enter/team'), { tournamentId, teamId }).then(res => {
        console.log(res);
        dispatch({
            type: SEND_ENTER_TOURNAMENT_REQUEST,
            payload: true
        });
    });
};

export const fetchTournaments = () => dispatch => {
    request(RequestTypes.get, Config('/tournaments'), null).then(res => {
        const { data: tournaments, error } = res;
        if (!error) {
            dispatch({
                type: FETCH_TOURNAMENTS,
                payload: tournaments
            });
        }
    });
};

export const fetchTournamentTeams = id => dispatch => {
    request(RequestTypes.get, Config(`/tournament/teams/${id}`), null).then(res => {
        dispatch({
            type: FETCH_TOURNAMENT_TEAMS,
            payload: res.data
        });
    });
};

export const addTournament = params => {
    return request(RequestTypes.post, Config('/addTournament'), params);
};
