import axios from 'axios'

import { API_URLS } from '@env'

export const fetchData = (method, body = null, path = '') => {
    console.log(API_URLS)
    return axios({
        method: method,
        url: `${API_URLS}${path}`,
        data: body ? { ...body } : undefined,
    })
}
