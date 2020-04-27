import { FETCH_FIRMS } from 'store/reducers/firmsReducer/types';
import { RequestTypes } from 'models/RequestTypes';
import { request } from 'helpers/request';
import { Config } from 'helpers/Config';

export const fetchFirms = () => dispatch => {
    request(RequestTypes.get, Config('/firms'), null).then(res => {
        const { data: firms } = res;
        dispatch({
            type: FETCH_FIRMS,
            payload: firms
        });
    });
};

export const addFirm = (
    name: string,
    address: string,
    shef: string
) => dispatch => {
    request(RequestTypes.post, Config('/firms'), { name, address, shef }).then(
        res => {
            console.log(res);
            // dispatch({
            //     type: FETCH_FIRMS,
            //     payload: firms
            // });
        }
    );
};
