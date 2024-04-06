// src/redux/actions/chatActions.js

import { ActionTypes } from '../constants/actionTypes';

export const sendMessage = (message) => ({
  type: ActionTypes.SEND_MESSAGE,
  payload: message,
});

export const receiveMessage = (message) => ({
  type: ActionTypes.RECEIVE_MESSAGE,
  payload: message,
});
