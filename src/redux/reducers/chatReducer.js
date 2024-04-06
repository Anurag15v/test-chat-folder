// src/redux/reducers/chatReducer.js

import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  messages: [],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SEND_MESSAGE:
      // Logic to handle sending a message
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case ActionTypes.RECEIVE_MESSAGE:
      // Logic to handle receiving a message
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};

export default chatReducer;
