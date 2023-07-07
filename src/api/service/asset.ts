import { axiosInstance } from '../axios'
import { AssetDetailResponse, AssetResponse, AssetsSearchRequest } from '../interface/asset'

//에셋 전체보기
export const getAssets = async <T = AssetResponse>(page: number): Promise<T> => {
  const res = await axiosInstance.get<T>(`/assets?page=${page}`)
  return res.data
}
//에셋 조회
export const searchAssets = async({page=0, size=5, sort='createdAt',num, name, category, subcategory, status}:AssetsSearchRequest)=> {

  const res = await axiosInstance.get(`https://neuroid-asset.shop/s/admin/assets?num=${num && num}&name=${name && name}&category=${category && category}&subcategory=${subcategory && subcategory}
  &status=${status&&status}&page=${page}&size=${size}&sort=${sort}` )
  return res.data
}


//에셋 상세보기
export const getAssetDetail = async <T = AssetDetailResponse>(id: number): Promise<T> => {
  const res = await axiosInstance.get<T>(`/assets/${id}/details`)
  return res.data
}
export const uploadAsset = async (asset): Promise<T> => {
  const res = await axiosInstance.post('/s/admin/asset', asset)
  return res
}
export const uploadFileAsset = async (file) => {
  const res = await axiosInstance.post(`/s/admin/file/fbx`, file)
}
export const editAsset = async (asset): Promise<T> => {
  const res = await axiosInstance.post('/s/admin/asset/update', asset)
}
export const inactivateAsset = async (): Promise<T> => {}
export const activateAsset = async (): Promise<T> => {}
