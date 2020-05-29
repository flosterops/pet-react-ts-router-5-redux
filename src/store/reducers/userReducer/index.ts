import { FETCH_USER } from 'store/reducers/userReducer/types';

const initialState = {
    user: null,
    userTeam: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                user: action.payload.user,
                userTeam: action.payload.userTeam
            };
        default:
            return {
                ...state
            };
    }
}
