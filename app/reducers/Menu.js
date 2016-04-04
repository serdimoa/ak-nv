/**
 * Created by serdimoa on 03.04.16.
 */
import * as types from '../constants/ActionTypes';

const initialState = {
  open: false,
  items: {
    1: {
      url: 'home',
      text: 'Главная',
    },
    2: {
      url: 'contacts',
      text: 'Контакты',
    },
    3: {
      url: 'rent',
      text: 'Арендаторам',
    },
  },
};

export default function menu(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_MENU:
      return {
        ...state,
        open: action.payload,
      };
    case types.HIDE_MENU:
      return {
        ...state,
        open: action.payload,
      };
    default:
      return state;
  }
}
