import { FETCH_USER } from 'store/reducers/userReducer/types';
import { request } from 'helpers/request';
import { Config } from 'helpers/Config';
import { RequestTypes } from 'models/RequestTypes';

export const fetchUser = (id: string) => dispatch => {
    request(RequestTypes.get, Config(`/user/${id}`), null).then(res => {
        const { data: user, error } = res;
        if (!user.teamId) {
            return dispatch({
                type: FETCH_USER,
                payload: { user, userTeam: null }
            });
        }
        request(RequestTypes.get, Config(`/team/${user.teamId}`), null).then(res => {
            const { data: team, error } = res;
            dispatch({
                type: FETCH_USER,
                payload: { user, userTeam: team }
            });
        });
    });
};
