export const CHANGE_SELECTED_TAB = 'CHANGE_SELECTED_TAB';

export interface IChangeSelectedTabAction {
    type: typeof CHANGE_SELECTED_TAB;
    payload: string;
}

export interface IAppReducerModel {
    selectedTabId: string;
}

export type AppReducerActionTypes = IChangeSelectedTabAction;
