import { combineReducers, createStore } from "redux";
import blogReducer from './blogReducer'
import usersReducer from './usersReducer'


let reducers = combineReducers({
  blogPage: blogReducer,
  usersPage: usersReducer
});

const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : {}

let store = createStore(reducers, persistedState);

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store;