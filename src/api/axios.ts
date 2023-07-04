import { getToken } from '@/utils/token'
import axios, { AxiosRequestConfig, AxiosError } from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqd3RzdHVkeSIsInJvbGUiOiJBRE1JTiIsImlkIjo4LCJleHAiOjE2ODgyNjgwOTV9.stVJr0feAFnepSo7_Jjs_yA-diD4DK8tShHAaomOi2cN64JKdWxnVrMzCIxpA5oebw0-8XYjlYEQuWx99ZS1iA`,
  },
})



axiosInstance.interceptors.request.use(
  (request) => {
    const accessToken = getToken()

    if (accessToken) request.headers['Authorization'] = `Bearer ${accessToken}`
    return request
  },
  (error: AxiosError) => {
    console.log(error)
    return Promise.reject(error)
  },
)

