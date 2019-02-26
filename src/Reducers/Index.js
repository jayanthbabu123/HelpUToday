import * as actionTypes from '../Actions/Types';
import { combineReducers } from 'redux';

const initialUserState = {
    currentUser: null,
    loading: true
}

const USER_REDUCER = (state = initialUserState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                currentUser: action.payload.currentUser,
                loading: false
            }
        default:
            return state
    }
};

const rootReducer = combineReducers({
    user: USER_REDUCER
});
export default rootReducer;