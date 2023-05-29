import { configureStore ,getDefaultMiddleware} from '@reduxjs/toolkit';
//import { rootReduser } from './redusers/reduser'
import ShoolSliceReduser from './redusers/reduser';
import PersonSliceReduser from './redusers/PersonInReduser';
import storage from 'redux-persist/lib/storage' 
import { combineReducers } from '@reduxjs/toolkit'; 
import loger from 'redux-logger'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

//const middlewareLoger = [...getDefaultMiddleware(),loger]

//const rootReducer = combineReducers({Person: PersonSliceReduser, phone: PhoneSliceReduser})


const persistConfig = {
  key: 'root',
  storage,
} 

const persistedReducer = persistReducer(persistConfig, PersonSliceReduser)



const store = configureStore({
  reducer: {
    Person: persistedReducer,
    shool: ShoolSliceReduser
    

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // middleware,
})
export const persistor=persistStore(store)

export default store;

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: middlewareLoger,
  
// })
