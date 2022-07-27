// @flow
import axios from 'axios'

const API_URL =
    'https://sheet.best/api/sheets/8032dfa7-ce66-4f6c-ae98-e488176d3f5e'

type taskBody = {
    id: number,
    name: string,
    done: string,
    index: number,
}

export default async function fetchData(method: string, body: taskBody | null = null, path: string = ''):  Promise<any>{
    try {
        const response = await axios({
            method,
            url: `${API_URL}${path}`,
            data: body ? { ...body } : undefined,
        })

        return response
    } catch (error) {
        console.log('index.js (23) - error', error)
        return { isFetchError: true }
    }
}
