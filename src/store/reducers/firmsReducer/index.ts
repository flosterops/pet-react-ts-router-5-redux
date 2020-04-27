import { FETCH_FIRMS } from 'store/reducers/firmsReducer/types';

const initialState = {
    firms: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_FIRMS:
            return {
                ...state,
                firms: action.payload
            };
        default:
            return {
                ...state
            };
    }
}
