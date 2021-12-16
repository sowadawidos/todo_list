import axios from 'axios'

// import { API_URLL } from '@env'

const API_URLL =
    'https://sheet.best/api/sheets/8032dfa7-ce66-4f6c-ae98-e488176d3f5e'

//Diego's sheet (Don't delete this)
// const API_URLL =
//     'https://sheet.best/api/sheets/115b8d9f-24d2-400f-8920-2258ff086b29'

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
