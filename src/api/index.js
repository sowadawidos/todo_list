import axios from 'axios'

// import { API_URLL } from '@env'

//David's sheet
// const API_URLL =
//     'https://sheet.best/api/sheets/bc8c1f1d-ab0b-4dc0-8730-e22aaae74a59'

//Diego's sheet
const API_URLL =
    'https://sheet.best/api/sheets/115b8d9f-24d2-400f-8920-2258ff086b29'

export const fetchData = async (method, body = null, path = '') => {
    console.log(API_URLL)

    try {
        const response = await axios({
            method,
            url: `${API_URLL}${path}`,
            data: body ? { ...body } : undefined,
        })

        return response
    } catch (error) {
        console.log('index.js (23) - error', error)
        return { isFetchError: true }
    }
}
