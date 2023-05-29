import { createAction ,createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "axios"

import { useSelector } from "react-redux";

axios.defaults.baseURL = "http://localhost:3002";

export const addItems = createAsyncThunk(
  '/api/leson',
  async (obj) => {
    const {data} = await axios.post("/api/leson/", obj)
    console.log("objfull",data)
    return {_id:data._id,title:data.title,teacher:data.teacher,date:data.date,time:data.time,lesonLink:data.lesonLink}
  }

)

export const delateContact = createAsyncThunk(
  '/leson/delateContact',
 async (id) =>{
    await axios.delete(`/api/leson/${id}`).then().catch(err=>console.log("err na front",err))
   const arr = await giveLeson();
    return arr
  }
)
export const FilterValueState= createAsyncThunk(
  'phone/FilterValueState',
 (text) =>{
   return text; 
  }
)

export const readingHost = createAsyncThunk(
  'leson/readingHost',
  async () => {
    const {data} = await axios.get("/api/leson/");
    if (data) {
        return data
    }
  }
)


export const giveLeson = async () => {
    const items = await axios.get("/api/leson/");
    return items.data
    
}

export const getLesonById = createAsyncThunk(
  'leson/getLesonById',
  async (id) => {
    const {data} = await axios.get(`/api/leson/${id}`);
    if (data) {
        return data
    }
  }
)
export const updateLesonById = createAsyncThunk(
  'leson/updateLesonById',
  async ({id,title,teacher,date,time,lesonLink}) => {
    const {data} = await axios.put(`/api/leson/${id}`,{title,teacher,date,time,lesonLink});
    if (data) {
        return data
    }
  }
)

export const updatePositionById = createAsyncThunk(
  'leson/updatePositionById',
  async ({id,date,time}) => {
    console.log("is id",id)
    const {data} = await axios.patch(`/api/leson/${id}/position`,{date,time});
    if (data) {
        return data
    }
  }
)

export const updatePositionByIdDelete = createAsyncThunk(
  'leson/updatePositionByIdDelete',
  async ({id,date,time}) => {
    console.log("is id",id)
    const {data} = await axios.patch(`/api/leson/${id}/positionDelete`,{date,time});
    if (data) {
        return data
    }
  }
)


