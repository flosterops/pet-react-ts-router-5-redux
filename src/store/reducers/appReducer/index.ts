import {
    AppReducerActionTypes,
    CHANGE_SELECTED_TAB,
    IAppReducerModel
} from 'store/reducers/appReducer/types';

const initialState: IAppReducerModel = {
    selectedTabId: ''
};

export default function(
    state: IAppReducerModel = initialState,
    action: AppReducerActionTypes
): IAppReducerModel {
    switch (action.type) {
        case CHANGE_SELECTED_TAB:
            return {
                ...state,
                selectedTabId: action.payload
            };
        default:
            return {
                ...state
            };
    }
}
