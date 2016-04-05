/**
 * Created by serdimoa on 03.04.16.
 */
import * as types from '../constants/ActionTypes';
import company from '../API/company';
export function showMenu(value) {
  return {
    type: types.TRIGGER_MENU,
    payload:value,
  };
}

export function triggerSidebar(value) {
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

export function receiveAllCompany() {
  return dispatch => {
    company.getCompany(company => {
      dispatch(receiveCompany(company));
    });
  };
}
