import { combineReducers } from 'redux';
import appReducer from 'store/reducers/appReducer';
import modalReducer from 'store/reducers/modalReducer';
import userReducer from 'store/reducers/userReducer';
import tournamentReducer from 'store/reducers/tournamentReducer';
import teamReducer from 'store/reducers/teamReducer';
import requestsReducer from 'store/reducers/requestsReducer';

export default combineReducers({
    app: appReducer,
    user: userReducer,
    modals: modalReducer,
    tournament: tournamentReducer,
    team: teamReducer,
    requests: requestsReducer
});
