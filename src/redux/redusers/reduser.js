import {addItems,delateContact,FilterValueState,readingHost,getLesonById,updateLesonById,updatePositionById,updatePositionByIdDelete,uploadFile} from '../Acions/Actions'
// import {createReducer} from '@reduxjs/toolkit';
// import { combineReducers } from 'redux'
//import PhoneSlice from '../Acions/Actions'
import {createSlice} from '@reduxjs/toolkit'


const SholeSlice = createSlice({
  name: 'shool',
  initialState: {
    lesons: [],
    filter: '',
    boolforCorrection:false,
    lesonForCorrection:{},
    files:{},
  },
  reducers: {
    resetItem: (state) => {
      state.lesons = [];
    }
    
  },
  extraReducers: {
    [addItems.fulfilled]: (state, { payload }) => {
      console.log("addItems.fulfilled",payload)
      if (payload) {
        state.lesons.push(payload)
      }
      
    },
    [delateContact.fulfilled]: (state, { payload }) => {
      state.lesons = payload;
    },
    [FilterValueState.fulfilled]: (state, { payload }) => {
      state.filter = payload;
    },
    [readingHost.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.lesons = payload;
      }
    },
    [getLesonById.pending]: (state, { payload }) => {
      
        
        state.boolforCorrection=false;
      
    },
    [getLesonById.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.lesonForCorrection = payload;
        state.boolforCorrection=true;
      }
    },
    [updateLesonById.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.lesonForCorrection = payload;
      }
    },
    [updatePositionById.fulfilled]: (state, { payload }) => {
      if (payload) {
        const foo=state.lesons.findIndex(item =>item._id === payload._id);
        if(foo){
          state.lesons[foo]=payload;
          console.log("payload",payload);
        console.log("state",state.lesons[foo]);
        }
        
      }
    },
    [updatePositionByIdDelete.fulfilled]: (state, { payload }) => {
      if (payload) {
        const foo=state.lesons.findIndex(item =>item._id === payload._id);
        
        if(foo){
          state.lesons[foo]=payload;
          console.log("payload",payload);
        console.log("state",state.lesons[foo]);
        }
        
      }
    },
    [uploadFile.fulfilled]: (state, { payload }) => {
      console.log("state",state)
      if (payload.data) {
          const foo=state.lesons.findIndex(item =>item._id === payload.data._id);
          
          if(foo){
            state.lesons[foo]=payload.data;
            console.log("payload",payload.data);
          console.log("state",state.lesons[foo]);
      }
    }}
  
  }})
// const { action, reducers } = PhoneSlice;
export const reduserff= SholeSlice.reducers;
 const ShoolSliceReduser = SholeSlice.reducer;
export default ShoolSliceReduser;





























// const itemsReduser = createReducer([], {
//   [addItems.fulfilled]: (state, {payload}) => {
//     //console.log("meta",meta)
//     // console.log("itemsReduser = createReducer",name, number, id )
//     //  const obj = { name, number, id }
//     //  console.log("obj",obj)
//     console.log("Pauloude reduser",payload)
//     // if (state.contacts.items.some(contact => contact.name.toLocaleLowerCase() === obj.name.toLocaleLowerCase())) {
//     //    alert(`${obj.name} is anlready in contacts npm run build`)
//     //        return [...state]
//     // }
//     return [...state,payload]
//   },
//   [items]: (state, action) => {console.log("ITEMS")
//     return [...state, action.payload]
//   },
//   [deleteContact]: (state, action) => {
//     let delateContacts = state.filter(contact => (contact.id !== action.payload));
//     return [...delateContacts]
//   },
//   [readingLocalHost]: (state, action) => {
//     if (!action.payload) { 
//     return [...state]
//     }
//     return [...action.payload]
//   },
  
// });
// const filterReduser = createReducer("", {
//   [filter().type]: (state, action) => {
//     return action.payload
//   }
// });


// const reduser = combineReducers({
//   items: itemsReduser,
//   filter:filterReduser,
// })
// export const rootReduser = combineReducers({
//   contacts:reduser
// })