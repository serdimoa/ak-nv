/**
 * Created by serdimoa on 03.04.16.
 */
import { combineReducers } from 'redux';
import * as states from '../constants/ActionTypes';

function content(state, action) {
  switch (action.type) {
    case states.RECEIVE_COMPANY:
      return { ...state, company: action.payload };
    default:
      return state;
  }
}

