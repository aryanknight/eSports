import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.error=false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    reset:(state) =>{
      state.isFetching = false;
      state.currentUser=null;
      state.error=false;
      console.log("resetting happeing")
    },
    setError:(state)=>{
      state.error=false
    },
  },
});

export const { loginStart, loginSuccess, loginFailure ,reset ,setError} = userSlice.actions;
export default userSlice.reducer;