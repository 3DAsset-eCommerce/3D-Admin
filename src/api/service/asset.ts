import { axiosInstance } from "../axios"
import { AssetDetailResponse, AssetResponse } from '../interface/asset'

//에셋 전체보기
export const getAssets = async <T = AssetResponse>(page: number): Promise<T> => {
  const res = await axiosInstance.get<T>(`/assets?page=${page}`)
  return res.data
}

//에셋 상세보기
export const getAssetDetail = async <T = AssetDetailResponse>(id: number): Promise<T> => {
  const res = await axiosInstance.get<T>(`/assets/${id}/details`)
  return res.data
}
export const uploadAsset = async(): Promise<T> => {
  const res = await axiosInstance.post('/s/admin/asset')
}
export const editAsset = async(assetData): Promise<T> => {
  const res = await axiosInstance.post('/s/admin/asset/update', assetData
  )
}
export const inactivateAsset = async(): Promise<T> => {

}
export const activateAsset = async(): Promise<T> => {

}