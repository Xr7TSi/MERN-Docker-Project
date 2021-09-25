import { AUTH } from '../constants/actionTypes.js';
// import everything from ../api in one import statement
import * as api from '../api/index.js';

export const signin = (firmData, history) => async (dispatch) => {
    try {

        history.push('/');
    } catch (error) {
       console.log(error);
    }
};

export const signup = (firmData, history) => async (dispatch) => {
    try {

        history.push('/');
    } catch (error) {
        console.log(error);
    }
};

