import axios from 'axios';
import {Navigate} from 'react-router-dom';
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
// import { browserHistory } from 'react-router';

export const login = async (dispatch,userInfo) =>{

    dispatch(loginStart());
    try {
        dispatch(loginSuccess(userInfo));
    } catch (error) {
        dispatch(loginFailure());
    }
}