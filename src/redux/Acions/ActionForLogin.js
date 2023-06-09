import { createAction ,createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate,Navigate } from "react-router-dom";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import cogoToast from 'cogo-toast';

axios.defaults.baseURL = "https://online-school-gzzo.onrender.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization=`Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization=""
  }
}
export const registration = createAsyncThunk(
  '/api/users/signup',
  async (obj) => {
      
        try {
          const { data } = await axios.post('/api/users/signup', obj);
          return data
        } catch (error) {
          cogoToast.warn(`you registration ${error.message}`);
          
        }
        
  }
)
export const CurrentAvtorization = createAsyncThunk(
  '/user/currentAvtorization',
  async (tokenValue) => {
    try {
      token.set(tokenValue); 
      const {data} = await axios.get('/api/users/current')
      return data
    }
    catch(error) {
      

      cogoToast.warn(`you login currentAvtorization ${error.message}`);

       
    }
  }
)
 // / users / login
 //let navigate = useNavigate();

  export const login = createAsyncThunk(
  '/api/users/login',
    async (obj) => {
      
      try {
        console.log("obj",obj);
            const {data} = await axios.post('/api/users/login', obj);

           token.set(data.token);
        
          return data;
        } catch (error) {
          
          cogoToast.warn(`you login ${error.message}`);
        }
          
      
        
  }
)
export const googleLogin = createAsyncThunk(
  '/api/users/googleLogin',
    async (obj) => {
      
      try {
        console.log("obj",obj);
            const {data} = await axios.post('/api/users/googleLogin', obj);

           token.set(data.token);
        
          return data;
        } catch (error) {
          
          cogoToast.warn(`you login ${error.message}`);
        }
          
      
        
  }
)

export const logOut = createAsyncThunk(
  '/api/users/logout',
  async () => {
    try {

          await axios.post('/api/users/logout');
          token.unset();

        } catch (error) {
          cogoToast.warn(`you login ${error.message}`);
            
        }
        
  }
)