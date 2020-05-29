import { request } from 'helpers/request';
import { RequestTypes } from 'models/RequestTypes';
import { Config } from 'helpers/Config';
import { FETCH_TEAM_REQUESTS, FETCH_TOURNAMENT_REQUESTS } from 'store/reducers/requestsReducer/types';

export const fetchTeamRequests = () => dispatch => {
    request(RequestTypes.get, Config('/enterTeam/list'), null).then(res => {
        const { data: teamRequests, error } = res;
        if (!error) {
            return dispatch({
                type: FETCH_TEAM_REQUESTS,
                payload: teamRequests
            });
        }
        console.log(error);
    });
};

export const fetchTournamentRequests = () => dispatch => {
    request(RequestTypes.get, Config('/tournament/request/list'), null).then(res => {
        const { data: tournamentRequests, error } = res;
        if (!error) {
            return dispatch({
                type: FETCH_TOURNAMENT_REQUESTS,
                payload: tournamentRequests
            });
        }
        console.log(error);
    });
};

export const sendEnterTeamRequest = (dancerId, teamId) => dispatch => {
    request(RequestTypes.post, Config('/team/request/enter'), { dancerId, teamId }).then(res => {
        const { res: data, error } = res;
    });
};

export const acceptTeamRequestInTournament = (tournamentId, teamId, requestId) =>
    request(RequestTypes.post, Config('/tournament/request/accept'), { tournamentId, teamId, requestId });

export const cancelTeamRequestInTournament = requestId =>
    request(RequestTypes.get, Config(`/tournament/request/cancel/${requestId}`), null);
