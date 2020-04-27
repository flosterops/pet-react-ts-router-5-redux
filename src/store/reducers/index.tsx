import { combineReducers } from 'redux';
import appReducer from 'store/reducers/appReducer';
import firmsReducer from 'store/reducers/firmsReducer';
import contractsReducer from 'store/reducers/contractsReducer';
import modalReducer from 'store/reducers/modalReducer';

export default combineReducers({
    app: appReducer,
    firms: firmsReducer,
    contracts: contractsReducer,
    modals: modalReducer
});
