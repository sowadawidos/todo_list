import axios from 'axios'

import { API_URL } from '@env'

// const API_URLL =
//     'https://sheet.best/api/sheets/bc8c1f1d-ab0b-4dc0-8730-e22aaae74a59'

export const fetchData = (method, body = null, path = '') => {
    console.log(API_URL)
    return axios({
        method,
        url: `${API_URL}${path}`,
        data: body ? { ...body } : undefined,
    })
}
