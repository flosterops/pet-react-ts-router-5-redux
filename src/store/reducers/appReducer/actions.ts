import { request } from 'helpers/request';
import { Config } from 'helpers/Config';
import { RequestTypes } from 'models/RequestTypes';
import { LOAD_SESSION, LOGOUT_USER, SET_USER } from 'store/reducers/appReducer/types';

export const setUser = user => dispatch => {
    dispatch({
        type: SET_USER,
        payload: user
    });
};

export const userLogin = (login, password) => {
    return request(RequestTypes.post, Config('/login'), { login, password });
};

export const userRegister = params => {
    return request(RequestTypes.post, Config('/register'), params);
};

export const logoutUser = () => dispatch => {
    request(RequestTypes.get, Config('/logout'), null).then(res => {
        dispatch({
            type: LOGOUT_USER,
            payload: null
        });
    });
};

export const loadSession = () => dispatch => {
    request(RequestTypes.get, Config('/loadSession'), null).then(res => {
        const { data: user, error } = res;
        if (!error) {
            return dispatch({
                type: LOAD_SESSION,
                payload: user || null
            });
        }
    });
};
