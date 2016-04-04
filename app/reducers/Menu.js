/**
 * Created by serdimoa on 03.04.16.
 */
import * as types from '../constants/ActionTypes';

const initialState = {
  open: false,
  urlNum: [1, 2, 3],
  urlById: {
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
        show: true,
        urlNum: {
          ...state.urlNum,
        },
        urlById: {
          ...state.urlById,
        },
      };
    case types.HIDE_MENU:
      return {
        show: false,
        urlNum: {
          ...state.urlNum,
        },
        urlById: {
          ...state.urlById,
        },
      };
    default:
      return state;
  }
}
