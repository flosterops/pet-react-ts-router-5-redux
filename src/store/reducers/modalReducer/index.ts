import { CLOSE_MODAL, OPEN_MODAL } from 'store/reducers/modalReducer/types';

const initialState = {
    modals: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                modals: action.payload
            };
        case CLOSE_MODAL:
            return {
                ...state,
                modals: action.payload
            };
        default:
            return {
                ...state
            };
    }
}
