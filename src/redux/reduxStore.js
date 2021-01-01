import { combineReducers, createStore } from "redux";
import blogReducer from './blogReducer'
import usersReducer from './usersReducer'

let reducers = combineReducers({
  blogPage: blogReducer,
  usersPage: usersReducer
});
let store = createStore(reducers);

export default store;