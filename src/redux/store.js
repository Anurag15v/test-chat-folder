// src/redux/store.js

import { createStore, combineReducers } from 'redux';
import chatReducer from './reducers/chatReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  chat: chatReducer,
  user: userReducer,
  // Add more reducers here as needed
});

const store = createStore(rootReducer);

export default store;
