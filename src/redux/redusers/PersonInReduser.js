import { createSlice } from '@reduxjs/toolkit'
import { registration,login,logOut,CurrentAvtorization,googleLogin} from '../Acions/ActionForLogin';
import { useNavigate } from "react-router-dom";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import cogoToast from 'cogo-toast';
const PersonSlice = createSlice({
  name: 'Person',
  initialState: {
    user: { name: null, email: null },
    token:null,
    isLoggedIn:false
  },
  reducers: {
    
  },
  extraReducers: {
    [registration.fulfilled]: (state, { payload }) => {
      console.log("dsdfs  payloude",payload)
      if(payload){
        cogoToast.success(`you registration ${payload.user.name}`);
      }
      
      
    },
    [login.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      
    },
    [googleLogin.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled]: (state, { payload }) => {
      state.isLoggedIn = false;
      state.token = null;
      state.user = null;
    },
    [CurrentAvtorization.fulfilled]: (state, { payload }) => {
      console.log(payload);
      if(payload){
        state.user = payload;
      state.isLoggedIn = true;

      }
      else{
        state.user = null;
        state.isLoggedIn = false;
      }
     
      
    }
    
  }
})
const PersonSliceReduser = PersonSlice.reducer;
export default PersonSliceReduser;




