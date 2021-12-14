import axios from 'axios'

import { API_URLL } from '@env'

// const API_URLL =
//     'https://sheet.best/api/sheets/bc8c1f1d-ab0b-4dc0-8730-e22aaae74a59'

export const fetchData = (method, body = null, path = '') => {
    console.log(API_URLL)
    return axios({
        method,
        url: `${API_URLL}${path}`,
        data: body ? { ...body } : undefined,
    })
}
