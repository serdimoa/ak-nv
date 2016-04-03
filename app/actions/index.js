/**
 * Created by serdimoa on 03.04.16.
 */
import * as types from '../constants/ActionTypes';

export function showMenu(value) {
  return {
    type: types.SHOW_MENU,
    payload:value,
  };
}

export function showSidebar(value) {
  return {
    type: types.SHOW_SIDEBAR,
    payload:value,
  };
}

export function receiveCompany(value) {
  return {
    type: types.RECEIVE_COMPANY,
    payload:value,
  };
}
