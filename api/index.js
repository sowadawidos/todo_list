import axios from 'axios';

import { API_URL } from '@env';

export const fetchData = (method, body = null, path = '') => {
  // console.log(API_URL)
  return axios({
    method: method,
    url: `${API_URL}${path}`,
    data: body ? { ...body } : undefined,
  });
};
