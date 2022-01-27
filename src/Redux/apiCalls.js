import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import axios from 'axios';
// import { browserHistory } from 'react-router';

export const login = async (dispatch,userInfo) =>{

    dispatch(loginStart());
    try {
        const res= await axios.post(process.env.REACT_APP_BASE_URL+"/auth/login",userInfo);
        dispatch(loginSuccess(res.data));
        return "success"
    } catch (error) {
        dispatch(loginFailure());
        return "error"
    }
}

export const register = async (dispatch,userData) =>{

    dispatch(loginStart());
    try {
        const res= await axios.post(process.env.REACT_APP_BASE_URL+"/auth/register",userData);
        dispatch(loginSuccess(res.data));
        return "success"
    } catch (error) {
        dispatch(loginFailure());
        return "error"
    }
}