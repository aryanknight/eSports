import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import axios from 'axios';
// import { browserHistory } from 'react-router';

export const login = async (dispatch,userInfo) =>{

    dispatch(loginStart());
    console.log(process.env.REACT_APP_BASE_URL)
    try {
        const res= await axios.post(process.env.REACT_APP_BASE_URL+"/auth/login",userInfo);
        dispatch(loginSuccess(res.data));
        return "success"
    } catch (error) {
        dispatch(loginFailure());
        return "error"
    }
}