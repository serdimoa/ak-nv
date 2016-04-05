/** *
 * Created by serdimoa on 03.04.16.
 */
import * as states from '../constants/ActionTypes';

export default function content(state={}, action) {
  switch (action.type) {
    case states.RECEIVE_COMPANY:
      return { ...state, company: action.payload };
    case states.TRIGGER_SIDEBAR:
      return { ...state, showSideBar: action.payload };
    default:
      return state;
  }
}

