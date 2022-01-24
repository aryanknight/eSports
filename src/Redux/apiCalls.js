import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import axios from 'axios';
// import { browserHistory } from 'react-router';

export const login = async (dispatch,userInfo) =>{

    dispatch(loginStart());
    try {
        const res= await axios.post("http://localhost:5000/auth/login",userInfo);
        dispatch(loginSuccess(res.data));
        return "success"
    } catch (error) {
        dispatch(loginFailure());
        return "error"
    }
}