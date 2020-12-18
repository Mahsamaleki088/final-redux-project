import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'

const reducers = combineReducers({
  todo: todoReducer,         
 });
 
 const persistConfig = {
     key: 'root',
     storage
 };
 const persistedReducer = persistReducer(persistConfig, reducers);
 
 const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
