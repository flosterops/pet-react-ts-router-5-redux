import { FETCH_CONTRACTS } from 'store/reducers/contractsReducer/types';
import { request } from 'helpers/request';
import { RequestTypes } from 'models/RequestTypes';
import { Config } from 'helpers/Config';

export const fetchContracts = () => dispatch => {
    request(RequestTypes.get, Config('/contracts'), null).then(res => {
        const { data: contracts } = res;
        dispatch({
            type: FETCH_CONTRACTS,
            payload: contracts
        });
    });
};
