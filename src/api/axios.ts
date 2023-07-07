import { getToken } from '@/utils/token'
import axios, { AxiosRequestConfig, AxiosError } from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization:'Bearer ' + `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqd3RzdHVkeSIsInJvbGUiOiJBRE1JTiIsImlkIjo4LCJleHAiOjE2ODg0NTQ5ODJ9.39oYa-zExLNiQnw8Nu3B6ozL9gjs2VGPN9riCY00QnZZmvOv6oGxe7rlyoiVY_CrSlrW294c1JVfN9zrGDT-8A`,
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

