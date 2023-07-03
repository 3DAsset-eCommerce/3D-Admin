export interface ApiResponse<T> {
  status: number
  msg: string
  data: T
  headers?: {
    authorization: string
  }
}
