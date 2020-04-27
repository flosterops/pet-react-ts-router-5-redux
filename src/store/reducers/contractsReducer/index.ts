import { FETCH_CONTRACTS } from 'store/reducers/contractsReducer/types';

const initialState = {
    contracts: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_CONTRACTS:
            return {
                ...state,
                contracts: action.payload
            };
        default:
            return {
                ...state
            };
    }
}
