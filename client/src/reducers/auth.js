import { AUTH, LOGOUT} from '../constants/actionTypes.js';

const authReducer = (state = { authData: null}, action) => {
    switch (action.type) {
        case AUTH:
            // set data from google login to local storage
        localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
        return { ...state, authData: action?.data };
        default:
        return state;
    }
    }


export default authReducer;