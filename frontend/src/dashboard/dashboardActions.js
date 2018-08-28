import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'
console.log(BASE_URL)
export function getSummary() {
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    console.log(request)
    return {
        type: 'BILLING_SUMMARY_FETCH',
        payload: request
    }
}