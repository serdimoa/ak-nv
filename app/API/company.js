/** *******************************
 * Created by serdimoa on 03.04.16.
 */

import _company from './company.json';

const TIMEOUT = 100;

export default {
  getCompany(cb, timeout) {
    setTimeout(()=>cb(_company), timeout || TIMEOUT);
  },
};
