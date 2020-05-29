import { LOAD_SESSION, LOGOUT_USER, SET_USER } from 'store/reducers/appReducer/types';

const initialState = {
    appUser: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
        case LOGOUT_USER:
        case LOAD_SESSION:
            return {
                ...state,
                appUser: action.payload
            };
        default:
            return {
                ...state
            };
    }
}
