/**
 *  * Created by serdimoa on 03.04.16.
 */
import { combineReducers } from 'redux';
import content  from './Content';
import menu from './Menu';

export default combineReducers({
  content,
  menu,
});
