import axios from 'axios'

import { API_URLL } from '@env'

export const fetchData = (method, body = null, path = '') => {
    console.log(API_URLL)
    return axios({
        method,
        url: `${API_URLL}${path}`,
        data: body ? { ...body } : undefined,
    })
}
