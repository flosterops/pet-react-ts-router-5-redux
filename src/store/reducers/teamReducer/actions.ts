import { request } from 'helpers/request';
import { RequestTypes } from 'models/RequestTypes';
import { Config } from 'helpers/Config';
import { FETCH_TEAM, FETCH_TEAMS } from 'store/reducers/teamReducer/types';

export const addTeam = team => {
    return request(RequestTypes.post, Config('/team/add'), team);
};

export const fetchTeam = (id: string) => dispatch => {
    request(RequestTypes.get, Config(`/team/${id}`), null).then(res => {
        const { data: team, error } = res;
        if (!error) {
            dispatch({
                type: FETCH_TEAM,
                payload: team
            });
        }
    });
};

export const fetchTeams = () => dispatch => {
    request(RequestTypes.get, Config('/teams'), null).then(res => {
        const { data: teams, error } = res;
        if (!error) {
            dispatch({
                type: FETCH_TEAMS,
                payload: teams
            });
        }
    });
};
